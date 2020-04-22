import React from 'react';
import MovieList from './MovieList';
import MovieData from '../MovieData';

class MovieControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      //name: "Parasite",
      formVisibleOnPage: false,
      masterMovieList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));    
  }

  handleAddingNewMovieToList = (newMovie) => {
    const newMasterMovieList = this.state.masterMovieList.concat(newMovie);
    this.setState({masterMovieList: newMasterMovieList});
    this.setState({formVisibleOnPage: false});
  }

  render() {
    let currentlyVisibleState = <MovieList movieList={this.state.masterMovieList} />; 
    console.log(this.state)
    return (
      <>
      {/* <div><MovieList name={MovieData[this.state.movie]}/></div> */}
      {currentlyVisibleState}
      </>
    );
  }  
}

export default MovieControl;