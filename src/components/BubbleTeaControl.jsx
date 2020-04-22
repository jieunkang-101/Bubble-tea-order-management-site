import React from 'react';
import BubbleTeaList from './BubbleTeaList';
import NewBubbleTeaForm from './NewBubbleTeaForm';
import NavBar from './NavBar';
import { v4 } from 'uuid';

class BubbleTeaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterBubbleTeaList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));    
  }

  // handleSellTea = (id) => {
  //   let newBubbleTeaList = this.state.masterBubbleTeaList;
  //   newBubbleTeaList[id].quantity --;
  //   this.setState({masterBubbleTeaList: newBubbleTeaList});
  // }

  handleSellTea = (id) => {
    let newBubbleTeaList = this.state.masterBubbleTeaList;
    newBubbleTeaList[id].quantity --;
    this.setState({masterBubbleTeaList: newBubbleTeaList});
  }

  setVisibility  = () => {
    if (this.state.formVisibleOnPage) {
      return {
        buttonText: "Return To the Main Page",
        //component: <NewBubbleTeaForm />,
        order: <NewBubbleTeaForm onNewBubbleTeaCreation={this.handleAddingBubbleTeaToList} />
      };
    } else {
      return {
        buttonText: "Add New Tea",
        //component: <BubbleTeaList />,
        order : <BubbleTeaList bubbleTeaList={this.state.masterBubbleTeaList} sellTea={this.handleSellTea} />
      };
    }
  };

  handleAddingNewBubbleTeaToList = (newBubbleTea) => {
    const newMasterBubbleTeaList = this.state.masterBubbleTeaList.concat(newBubbleTea);
    this.setState({masterBubbleTeaList: newMasterBubbleTeaList});
    this.setState({formVisibleOnPage: false});
  }

  render() {
    console.log(this.state)
    let currentlyVisibleState = this.setVisibility();
    return (
      <>
      {/* <div><MovieList name={MovieData[this.state.movie]}/></div> */}
      {/* {currentlyVisibleState.component} */}
      {currentlyVisibleState.order}
      <button onClick={this.handleClick}>{currentlyVisibleState.buttonText}</button>
      </>
    );
  }  
}

export default BubbleTeaControl;