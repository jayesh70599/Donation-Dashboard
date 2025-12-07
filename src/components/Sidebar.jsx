import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>DonationApp</h2>
      <nav>
        {/* Visual link only, inactive */}
        <a href="#" className="active">Dashboard</a>
      </nav>
    </aside>
  );
};

export default Sidebar;