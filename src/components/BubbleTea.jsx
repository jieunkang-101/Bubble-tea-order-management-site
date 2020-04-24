import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function BubbleTea(props) {
  return (
    <div class="bubbleTeaBody">
      <button class="bubbleTeaList" onClick = {() => props.whenBubbleTeaSelected(props.id)}>
      <p>Name : {props.name}</p>
      <p>Ingredient : {props.ingredient}</p>
      <p>Quantity : {props.quantity}</p>
      <p>Message: {props.message}</p>
      <p><img src={props.img} alt={props.name} style={{width: 200, height: 200}}></img></p>
      </button>
    </div>  
  );
}

BubbleTea.prototype={
  name: PropTypes.string.isRequired,
  ingredient: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenBubbleTeaSelected: PropTypes.func
};

export default BubbleTea;