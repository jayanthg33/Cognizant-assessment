import React from "react";

const App = () => {
  const players = ["Virat", "Rohit", "Dhoni"];
  return (
    <div>
      <h1>Cricket App</h1>
      <ul>
        {players.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
