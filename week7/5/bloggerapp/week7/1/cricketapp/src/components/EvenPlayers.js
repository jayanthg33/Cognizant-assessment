
import React from 'react';

const players = [
  { name: 'Virat Kohli', score: 85 },
  { name: 'Rohit Sharma', score: 72 },
  { name: 'MS Dhoni', score: 66 },
  { name: 'Hardik Pandya', score: 45 }
];

function EvenPlayers() {
  return (
    <div>
      <h2>Even Indexed Players</h2>
      <ul>
        {players.map(({ name, score }, index) =>
          index % 2 === 0 ? (
            <li key={index}>{name} - {score}</li>
          ) : null
        )}
      </ul>
    </div>
  );
}

export default EvenPlayers;
