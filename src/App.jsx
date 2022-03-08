import './App.css';

import React from 'react';

import HowManyTime from './components/how-many-time/how-many-time';

const lastSeenTime = Math.floor(new Date().getTime() / 1000);

function App() {
  return (
    <div className="App">
      <HowManyTime lastSeenTime={lastSeenTime} />
    </div>
  );
}

export default App;
