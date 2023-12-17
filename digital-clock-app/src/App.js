import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, updateTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      updateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <div className="elementContainer">
        <h1>Digital Clock</h1>
        <div className="timeParent">
          <div className="timeContainer">
            {/* print the string prettily */}
            <span className="time">{time.toLocaleTimeString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
