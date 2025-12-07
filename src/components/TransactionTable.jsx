
import React from 'react';

const TransactionTable = ({ transactions }) => {
  return (
    <div className="dashboard-section">
      <h3>Recent Activity</h3>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Donor</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={t.id}>
                <td>{t.name}</td>
                <td className="amount">+${t.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;