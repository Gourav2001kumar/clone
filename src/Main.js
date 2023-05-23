import React from 'react';
import TextEditor from './TextEditor';
// import ToolBar from './ToolBar';
import SideBar from './SideBar';

const Main = () => {
  return (
    <div className="main-container">
      <SideBar />
      <div className="content-container">
        <TextEditor />
        
      </div>
    </div>
  );
};

export default Main;
