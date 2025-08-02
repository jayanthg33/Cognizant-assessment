
import React from 'react';

const players = [
  { name: 'Virat Kohli', score: 85 },
  { name: 'Rohit Sharma', score: 72 },
  { name: 'MS Dhoni', score: 66 },
  { name: 'Hardik Pandya', score: 45 }
];

function ListOfPlayers() {
  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListOfPlayers;
