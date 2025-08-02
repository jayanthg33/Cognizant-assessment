import React from 'react';

const offices = [
  { name: "DBS", rent: 50000, address: "Chennai", image: "https://via.placeholder.com/150" },
  { name: "WeWork", rent: 70000, address: "Bangalore", image: "https://via.placeholder.com/150" },
  { name: "Regus", rent: 55000, address: "Hyderabad", image: "https://via.placeholder.com/150" },
];

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Office Space, at Affordable Range</h1>
      {offices.map((office, index) => {
        const rentStyle = {
          color: office.rent <= 60000 ? 'red' : 'green',
        };

        return (
          <div key={index} style={{ margin: '20px', border: '1px solid #ccc', padding: '15px' }}>
            <img src={office.image} alt="Office" width="25%" height="25%" />
            <h2>Name: {office.name}</h2>
            <h3 style={rentStyle}>Rent: Rs.{office.rent}</h3>
            <h3>Address: {office.address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
