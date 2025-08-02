
import React from 'react';

const currentPlayers = ['Virat Kohli', 'Rohit Sharma'];
const pastPlayers = ['Sachin Tendulkar', 'MS Dhoni'];

const allPlayers = [...currentPlayers, ...pastPlayers];

function ListOfIndianPlayers() {
  return (
    <div>
      <h2>List of Indian Players</h2>
      <ul>
        {allPlayers.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListOfIndianPlayers;
