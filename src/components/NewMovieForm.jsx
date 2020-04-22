import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewMovieForm(props){

  function handleNewMovieFormSubmission(event) {
    event.preventDefault();
    props.onNewMovieCreation({name: event.target.name.value, description: event.target.description.value, quantity: event.target.quantity.value, id: v4()});
    console.log(event.target.name.value);
    console.log(event.target.description.value);
    console.log(event.target.quantity.value);
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewMovieFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Movie Title' />
        <input
          type='text'
          name='description'
          placeholder='Description' />
        <input
          type='number'
          name='quantity'
          placeholder='Quantity.' />
        <button type='submit'>Restock</button>
      </form>
    </React.Fragment>
  );
}

NewMovieForm.propTypes = {
  onNewMovieCreation: PropTypes.func
};

export default NewMovieForm;