import React from "react";
import PropTypes from "prop-types"

function BubbleTeaDetail(props){
  const { bubbleTea, onRestockingTea, onSellingTea } =props;

  // if ({bubbleTea.quantity} < 1) {
  //   return {bubbleTea.quantity} == "Out of Stock";
  // }

  return (
    <React.Fragment>
      <h1>Bubble Tea Detail</h1>
      <h3>{bubbleTea.name}</h3>
      <h3>{bubbleTea.id}</h3>
      <h4>{bubbleTea.ingredient}</h4>
      <h4>{bubbleTea.quantity}{bubbleTea.message}</h4>
      {/* <h4>{bubbleTea.quantity} > 0 ? {bubbleTea.quantity} : "out of stock"</h4> */}
   
    
      {/* <h4>{bubbleTea.quantity < 1} ? {bubbleTea.quantity='Out of Stock'} : {bubbleTea.quantity}</h4> */}
      <button onClick = {() => props.onSellingTea(props.id)}>Sell</button>
      <button onClick = {() => props.onRestockingTea(props.id)}>Restock</button>
      <button onClick = {() => props.onDeletingTea(props.id)}>Delete</button>
      <hr/>
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