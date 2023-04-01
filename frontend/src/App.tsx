import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBanner from './Blah';
import MovieList from './Movies';

function App() {
  return (
    <div>
      <TopBanner saying="My Podcasts" />
      <MovieList />
    </div>
  );
}

export default App;
