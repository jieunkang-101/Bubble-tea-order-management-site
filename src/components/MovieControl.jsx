import React from 'react';
import MovieList from './MovieList';
import MovieData from '../MovieData';
import NewMovieForm from './NewMovieForm';

class MovieControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Parasite",
      formVisibleOnPage: false,
      masterMovieList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));    
  }

  setVisibility = () => {
    if (this.state.formVisibleOnPage) {
      return {
        buttonText: "Return To the Main Page",
        component: <NewMovieForm />,
        order: <NewMovieForm onNewMovieCreation={this.handleAddingNewMovieToList} />
      };
    } else {
      return {
        buttonText: "Buy Ticket",
        component: <MovieList />,
        order : <MovieList movieList={this.state.masterMovieList} />
      };
    }
  };

  handleAddingNewMovieToList = (newMovie) => {
    const newMasterMovieList = this.state.masterMovieList.concat(newMovie);
    this.setState({masterMovieList: newMasterMovieList});
    this.setState({formVisibleOnPage: false});
  }

  render() {
    console.log(this.state)
    let currentlyVisibleState = this.setVisibility();
    return (
      <>
      {/* <div><MovieList name={MovieData[this.state.movie]}/></div> */}
      {/* {currentlyVisibleState.component} */}
      {currentlyVisibleState.order}
      <button onClick={this.handleClick}>{currentlyVisibleState.buttonText}</button>
      </>
    );
  }  
}

export default MovieControl;