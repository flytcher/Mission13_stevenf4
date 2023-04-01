import React from 'react';
import logo from './logo.svg';
import './App.css';

class Welcome extends React.Component {
  render() {
    return <h1>This website gives some rando numbers</h1>;
  }
}

class Conclusion extends React.Component {
  render() {
    return <p>Hope you enjoyed!</p>;
  }
}

function App() {
  return (
    <div>
      <Welcome />
      <br></br>
      <Conclusion />
    </div>
  );
}

export default App;
