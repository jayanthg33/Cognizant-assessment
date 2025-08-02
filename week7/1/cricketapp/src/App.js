import React from 'react';
import ListOfPlayers from './components/ListOfPlayers';
import ScoreBelow70 from './components/ScoreBelow70';
import OddPlayers from './components/OddPlayers';
import EvenPlayers from './components/EvenPlayers';
import ListOfIndianPlayers from './components/ListOfIndianPlayers';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Cricket Player Dashboard</h1>
      <ListOfPlayers />
      <hr />
      <ScoreBelow70 />
      <hr />
      <OddPlayers />
      <hr />
      <EvenPlayers />
      <hr />
      <ListOfIndianPlayers />
    </div>
  );
}

export default App;
