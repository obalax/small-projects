import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [title] = useState("Clicker");
  return (
    <div className="App">
      <Header title={title} />
      <Clicker />
    </div>
  );
}
