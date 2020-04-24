import React from "react";
import BubbleTea from "./BubbleTea";
import PropTypes from "prop-types";

function BubbleTeaList(props) {
  return(
    <>{props.bubbleTeaList.map((bubbleTea) => 
        <BubbleTea
          key = {bubbleTea.id}
          id = {bubbleTea.id}
          name = {bubbleTea.name}
          ingredient = {bubbleTea.ingredient}
          quantity = {bubbleTea.quantity} 
          img = {bubbleTea.img}
          message = {bubbleTea.message}
          whenBubbleTeaSelected = {props.onBubbleTeaSelection}
          whenSellClicked={props.onSellingTea}
          />     
  )}
  </>
  );
}

BubbleTeaList.propTypes = {
  bubbleTeaList: PropTypes.array,
  onBubbleTeaSelection: PropTypes.func,
  onSellingTea: PropTypes.func,
  onRestockingTea: PropTypes.func
}

export default BubbleTeaList;

