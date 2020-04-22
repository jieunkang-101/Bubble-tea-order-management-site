import React, {Component} from 'react';
import NavBar from './NavBar';
import './App.css';


function App() {
  return(
    <React.Fragment>
      <div><NavBar /></div>
      <div><Body /></div>
      <div><Footer /></div>
    </React.Fragment>
  );
}
export default App;
