import React from "react";
import BubbleTea from "./BubbleTea";
import PropTypes from "prop-types";
import BubbleTeaData from "../BubbleTeaData"
import { v4 } from 'uuid';

function BubbleTeaList() {
  return(
    <><hr/>{BubbleTeaData.map((bubbleTea, id) => 
        <BubbleTea
          key = {id}
          name = {bubbleTea.name}
          ingredient = {bubbleTea.ingredient}
          quantity = {bubbleTea.quantity} 
          sellTea={bubbleTea.sellTea}
          />
  )}
  </>
  );
}

BubbleTeaList.propTypes = {
  bubbleTeaList: PropTypes.array,
  sellTea: PropTypes.func
}

export default BubbleTeaList;

