import React from 'react';
import PropTypes from 'prop-types';

function BubbleTea(props) {

  function handleSellTea() {
    props.sellTea(props.id)
  }

  function handleRestockTea() {
    props.restockTea(props.id)
  }

  return (
    <>
      {/* <p>Here are bubble tea List!</p> */}
      <p>Id : {props.id}</p>
      <p>Name : {props.name}</p>
      <p>Ingredient : {props.ingredient}</p>
      <p>Quantity : {props.quantity}</p>
      <p>Key : {props.key}</p>
      <button onClick={handleSellTea}>Sell</button>
      <button onClick={handleRestockTea}>Restock</button>
      <hr />
      </>  
  );
}

BubbleTea.prototype={
  name: PropTypes.string.isRequired,
  ingredient: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  sellTea: PropTypes.func,
  restockTea: PropTypes.func
};

export default BubbleTea;