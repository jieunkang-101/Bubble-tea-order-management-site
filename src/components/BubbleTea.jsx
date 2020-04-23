import React from 'react';
import PropTypes from 'prop-types';

function BubbleTea(props) {

  // function handleSellTea() {
  //   props.whenSellClicked(props.id)
  // }

  // function handleRestockTea() {
  //   props.whenRestockClicked(props.id)
  // }

  // function handleChangingSelectedBubbleTea() {
  //   prop.whenBubbleTeaSelected(props.id)
  // }

  // <div onClick = {() => props.whenTicketClicked(props.id)}></div>
  
  return (
    <>
      {/* <p>Here are bubble tea List!</p> */}
      <button onClick = {() => props.whenBubbleTeaSelected(props.id)}>
      <p>Id : {props.id}</p>
      <p>Name : {props.name}</p>
      <p>Ingredient : {props.ingredient}</p>
      <p>Quantity : {props.quantity}</p>
      <p><img src={props.img} alt="Black sugar milk tea" style={{width: 200, height: 200}}></img></p>
      {/* <button onClick={handleSellTea}>Sell</button>
      <button onClick={handleRestockTea}>Restock</button> */}
      <hr />
      </button>
      </>  
  );
}

BubbleTea.prototype={
  name: PropTypes.string.isRequired,
  ingredient: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenBubbleTeaSelected: PropTypes.func
  // sellTea: PropTypes.func,
  // restockTea: PropTypes.func
};

export default BubbleTea;