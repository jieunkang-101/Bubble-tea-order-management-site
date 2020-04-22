import React from 'react';
import PropTypes from 'prop-types';

function BubbleTea(props) {

  function handleSellTea() {
    props.sellTea(props.id)
  }

  return (
    <>
      <p>Here are bubble tea List!</p>
      <p>{props.id}</p>
      <p>{props.name}</p>
      <p>{props.ingredient}</p>
      <p>{props.quantity}</p>
      <button onClick={handleSellTea}>Sell</button>
      <hr />
      </>  
  );
}

BubbleTea.prototype={
  name: PropTypes.string.isRequired,
  ingredient: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  sellTea: PropTypes.func
};

export default BubbleTea;