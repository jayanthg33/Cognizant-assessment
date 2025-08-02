import React, { useState } from 'react';

function LoginButton({ onClick }) {
  return <button onClick={onClick}>Login</button>;
}

function LogoutButton({ onClick }) {
  return <button onClick={onClick}>Logout</button>;
}

function UserGreeting() {
  return <h2>Welcome back, User! You can now book your flight tickets.</h2>;
}

function GuestGreeting() {
  return <h2>Welcome, Guest! Please log in to book tickets.</h2>;
}

function Greeting({ isLoggedIn }) {
  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>✈️ Ticket Booking App</h1>
      <Greeting isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        <LogoutButton onClick={handleLogout} />
      ) : (
        <LoginButton onClick={handleLogin} />
      )}
    </div>
  );
}

export default App;
