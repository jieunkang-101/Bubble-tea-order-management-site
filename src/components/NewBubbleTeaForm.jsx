import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewBubbleTeaForm(props){

  function handleNewBubbleTeaFormSubmission(event) {
    event.preventDefault();
    props.onNewBubbleTeaCreation({name: event.target.name.value, ingredient: event.target.ingredient.value, quantity: parseInt(event.target.quantity.value), id: v4(), message: "Available"});
  }

  return (
    <React.Fragment>
      <div class="newBubbleTeaForm">
      <form onSubmit={handleNewBubbleTeaFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Bubble tea name' class="form-control" />
        <input
          type='text'
          name='ingredient'
          placeholder='ingredient' class="form-control" />
        <input
          type='number'
          name='quantity'
          placeholder='Quantity' class="form-control"/>
        <br />
        <button variant="primary" type='submit' class="btn btn-outline-info">Add New Tea</button>{' '}
      </form>
      </div>
    </React.Fragment>
  );
}

NewBubbleTeaForm.propTypes = {
  onNewBubbleTeaCreation: PropTypes.func
};

export default NewBubbleTeaForm;