import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler);

const DonationChart = ({ data }) => {
  const processData = () => {
    const months = ["July", "August", "September", "October", "November", "December"];
    const monthMap = { "07": 0, "08": 0, "09": 0, "10": 0, "11": 0, "12": 0 };

    data.forEach((d) => {
      const monthIndex = d.date.split('-')[1];
      if (monthMap[monthIndex] !== undefined) {
        monthMap[monthIndex] += d.amount;
      }
    });

    return {
      labels: months,
      datasets: [{
        label: 'Donations ($)',
        data: Object.values(monthMap),
        borderColor: '#22c55e',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        fill: true,
        tension: 0.4,
      }],
    };
  };

  return (
    <div className="dashboard-section">
      <h3>Donation Trends</h3>
      <div className="chart-wrapper">
        <Line 
          data={processData()} 
          options={{ maintainAspectRatio: false, plugins: { legend: { display: false } } }} 
        />
      </div>
    </div>
  );
};

export default DonationChart;