import React, { useState } from 'react';
import './App.css';
import Markdown from 'react-markdown';

function App() {
  const [markdown, setMarkdown] = useState('# sup');
  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };
  return (
    <div className="app">
      <textarea value={markdown} onChange={handleChange} />

      <div className="preview">
        <Markdown>{markdown}</Markdown>
      </div>
    </div>
  );
}

export default App;
