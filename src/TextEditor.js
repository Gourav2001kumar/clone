// TextEditor.js

import React, { useState } from 'react';

const TextEditor = () => {
  const [content, setContent] = useState('');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleBoldToggle = () => {
    setIsBold(!isBold);
  };

  const handleItalicToggle = () => {
    setIsItalic(!isItalic);
  };

  const getEditorContentStyle = () => {
    const styles = {};
    if (isBold) {
      styles.fontWeight = 'bold';
    }
    if (isItalic) {
      styles.fontStyle = 'italic';
    }
    return styles;
  };

  return (
    <div className="text-editor">
      <div className="toolbar">
        <button
          className={`toolbar-button ${isBold ? 'active' : ''}`}
          onClick={handleBoldToggle}
        >
          Bold
        </button>
        <button
          className={`toolbar-button ${isItalic ? 'active' : ''}`}
          onClick={handleItalicToggle}
        >
          Italic
        </button>
      </div>
      <textarea
        className="editor-content"
        style={getEditorContentStyle()}
        value={content}
        onChange={handleContentChange}
      />
    </div>
  );
};

export default TextEditor;
