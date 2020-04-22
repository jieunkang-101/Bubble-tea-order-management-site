import React from 'react';
import NavBar from './NavBar';
import MovieControl from './MovieControl';
import Footer from './Footer';
import './App.css';

function App() {
  return(
    <React.Fragment>
      <div><NavBar /></div>
      <div><MovieControl /></div>
      <div><Footer /></div>
    </React.Fragment>
  );
}
export default App;
