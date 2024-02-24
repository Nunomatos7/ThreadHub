// App.js

import './App.css';
import React from 'react';
import TopBar from './TopBar/TopBar.js';
import MainContent from './MainContent/MainContent.js';
import Subreddits from './Subreddits/Subreddits.js';

function App() {
  return (
    <div className="app">
      <TopBar />
      <div className="content-wrapper">
        {/* Normal order: MainContent followed by Subreddits */}
        <div className="main-content">
          <MainContent />
        </div>
        <div className="subreddits">
          <Subreddits />
        </div>
      </div>
    </div>
  );
}

export default App;
