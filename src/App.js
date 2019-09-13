import React from 'react';
import './App.css';

function App() {
  return (
    <div className="column">
      <div className="dashboard">
        <iframe
          title="csv"
          src="https://pnap.vizion.ai/kibana/app/kibana#/dashboard/a9f21a00-d0d8-11e9-8c91-4dc5d35831e9?embed=true&_g=()" 
          height="700" 
          width="1400">
        </iframe>
      </div>
      <div className="dashboard">
        <iframe
          title="csv" 
          src="https://pnap.vizion.ai/kibana/app/kibana#/dashboard/a9f21a00-d0d8-11e9-8c91-4dc5d35831e9?_g=()" 
          height="700" 
          width="1450">
        </iframe>
      </div>
    </div>
  );
}

export default App;
