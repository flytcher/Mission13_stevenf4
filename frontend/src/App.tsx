import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopBanner from './Blah';
// import MovieList from './Movies';
import Navbar from './Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieList from './movie/MovieList';
import Podcast from './pages/Podcast';

// Navbar routing
function App() {
  let Component;
  switch (window.location.pathname) {
    case '/':
      Component = <TopBanner saying="Joel Hilton" />;
      break;
    case '/podcast':
      Component = <Podcast />;
      break;
    case '/movies':
      Component = <MovieList />;
      break;
  }
  return (
    <div>
      <Navbar />
      {Component}
      {/* <MovieList /> */}
      {/* <TopBanner saying="My Podcasts" />
      <MovieList /> */}
    </div>
  );
}

export default App;
