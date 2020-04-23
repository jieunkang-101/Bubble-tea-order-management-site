import React from "react";
import PropTypes from "prop-types"

function BubbleTeaDetail(props){
  const { bubbleTea, onRestockingTea, onSellingTea, onDeletingTea } =props;

  // if ({bubbleTea.quantity} < 1) {
  //   return {bubbleTea.quantity} == "Out of Stock";
  // }

  return (
    <React.Fragment>
      <div className="BubbleTeaDetail">
      <p>Bubble Tea Detail</p>
      <p>Name : {bubbleTea.name}</p>
      <p>Item Id : {bubbleTea.id}</p>
      <p>Ingredient : {bubbleTea.ingredient}</p>
      <p>Quantity : {bubbleTea.quantity}</p>
      <p>Current Status : {bubbleTea.message}</p>
      <button onClick = {() => props.onSellingTea(props.id)} class="btn btn-outline-info">Sell</button>
      <button onClick = {() => props.onRestockingTea(props.id)} class="btn btn-outline-info">Restock</button>
      <button onClick = {() => props.onDeletingTea(bubbleTea.id)} class="btn btn-outline-info">Delete</button>
      </div>
    </React.Fragment>
  );
}

BubbleTeaDetail.prototype={
  bubbleTea: PropTypes.object, 
  onSellingTea: PropTypes.func,
  onRestockingTea: PropTypes.func,
  onDeletingTea: PropTypes.func
};

export default BubbleTeaDetail;