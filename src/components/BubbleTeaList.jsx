import React from "react";
import BubbleTea from "./BubbleTea";
import PropTypes from "prop-types";
import BubbleTeaData from "../BubbleTeaData"


function BubbleTeaList(props) {
  return(
    <><hr/>{props.bubbleTeaList.map((bubbleTea, index) => 
        <BubbleTea
          key = {bubbleTea.id}
          id = {index}
          name = {bubbleTea.name}
          ingredient = {bubbleTea.ingredient}
          quantity = {bubbleTea.quantity} 
          sellTea={props.sellTea}
          restockTea={props.restockTea}
          />
  )}
  </>
  );
}

BubbleTeaList.propTypes = {
  bubbleTeaList: PropTypes.array,
  sellTea: PropTypes.func,
  restockTea: PropTypes.func
}

export default BubbleTeaList;

