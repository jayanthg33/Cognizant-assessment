
import React from 'react';

const players = [
  { name: 'Virat Kohli', score: 85 },
  { name: 'Rohit Sharma', score: 72 },
  { name: 'MS Dhoni', score: 66 },
  { name: 'Hardik Pandya', score: 45 }
];

const ScoreBelow70 = () => {
  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>Players with Score below 70</h2>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ScoreBelow70;
