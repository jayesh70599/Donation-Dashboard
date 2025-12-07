import React, { useMemo } from 'react';
import Sidebar from './components/Sidebar';
import StatCard from './components/StatCard';
import DonationChart from './components/DonationChart';
import TransactionTable from './components/TransactionTable';
import { donationData } from './data/mockData';
import './styles/Dashboard.css';

function App() {
  // 1. Logic: Calculate metrics directly here
  const stats = useMemo(() => {
    const total = donationData.reduce((acc, curr) => acc + curr.amount, 0);
    const uniqueDonors = new Set(donationData.map((d) => d.name)).size;
    return { total, uniqueDonors };
  }, []);

  return (
    <div className="dashboard-layout">
      <Sidebar />
      
      <main className="main-content">
        <h1>Dashboard</h1>
        
        {/* Requirement 1 & 2: Total Donations and Number of Donors */}
        <div className="stats-grid">
          <StatCard 
            title="Total Received" 
            value={`$${stats.total.toLocaleString()}`} 
            icon="$" 
            color="green" 
          />
          <StatCard 
            title="Number of Donors" 
            value={stats.uniqueDonors} 
            icon="#" 
            color="blue" 
          />
        </div>

        {/* Requirement 3: Chart showing trends */}
        <DonationChart data={donationData} />

        {/* Requirement 3 (Alternative): Simple table */}
        <TransactionTable transactions={donationData} />
      </main>
    </div>
  );
}

export default App;