import React from 'react';
import NavBar from './NavBar';
import BubbleTeaControl from './BubbleTeaControl';
import Footer from './Footer';
import './App.css';

function App() {
  return(
    <React.Fragment className={"App"}>
      <div><NavBar /></div>
      <div><BubbleTeaControl /></div>
      <div><Footer /></div>
    </React.Fragment>
  );
}
export default App;
