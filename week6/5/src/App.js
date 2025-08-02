import React from 'react';
import CohortDetails from './CohortDetails';


function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>MyAcademy Cohort Dashboard</h2>
      <CohortDetails name="React Bootcamp" status="ongoing" duration="4 weeks" />
      <CohortDetails name="Spring Boot Basics" status="completed" duration="6 weeks" />
    </div>
  );
}

export default App;
