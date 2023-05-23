// Toolbar.js

import React, { useState } from 'react';

const ToolBar = () => {
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);

  const handleBoldClick = () => {
    setIsBold(!isBold);
  };

  const handleItalicClick = () => {
    setIsItalic(!isItalic);
  };

  return (
    <div className="toolbar">
      <button
        className={`toolbar-button ${isBold ? 'active' : ''}`}
        onClick={handleBoldClick}
        style={{ fontWeight: isBold ? 'bold' : 'normal' }}
      >
        Bold
      </button>
      <button
        className={`toolbar-button ${isItalic ? 'active' : ''}`}
        onClick={handleItalicClick}
        style={{ fontStyle: isItalic ? 'italic' : 'normal' }}
      >
        Italic
      </button>
    </div>
  );
};

export default ToolBar;
