import React from 'react';
import NavBar from './NavBar';
import BubbleTeaControl from './BubbleTeaControl';
import Footer from './Footer';
import './App.css';

function App() {
  return(
    <React.Fragment>
      <div><NavBar /></div>
      <div class="body"><BubbleTeaControl /></div>
      <div><Footer /></div>
    </React.Fragment>
  );
}
export default App;
