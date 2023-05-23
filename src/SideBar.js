import React from 'react';

const SideBar = () => {
  return (
    <div className="sidebar">
      <ul className="app-links">
        <li>
          <a href="#">Google Drive</a>
        </li>
        <li>
          <a href="#">Google Sheets</a>
        </li>
        {/* Add more app links */}
      </ul>
    </div>
  );
};

export default SideBar;
