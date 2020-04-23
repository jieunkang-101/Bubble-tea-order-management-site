import React from "react";
import PropTypes from "prop-types"

function BubbleTeaDetail(props){
  const { bubbleTea, onRestockingTea } =props;

  
  return (
    <React.Fragment>
      <h1>Bubble Tea Detail</h1>
      <h3>{bubbleTea.name}</h3>
      <h3>{bubbleTea.id}</h3>
      <h4>{bubbleTea.ingredient}</h4>
      <h4>{bubbleTea.quantity}</h4>
      <button onClick = {() => props.whenSellClicked(props.id)}>Sell</button>
      <button onClick = {() => props.onRestockingTea(props.id)}>Restock</button>
      <button onClick = {() => props.whenDeleteClicked(props.id)}>Delete</button>
      <hr/>
    </React.Fragment>
  );
}

BubbleTeaDetail.prototype={
  bubbleTea: PropTypes.object, 
  whenSellClicked: PropTypes.func,
  onRestockingTea: PropTypes.func,
  whenDeleteClicked: PropTypes.func
};

export default BubbleTeaDetail;