import React from 'react';
import BubbleTeaList from './BubbleTeaList';
import NewBubbleTeaForm from './NewBubbleTeaForm';
import NavBar from './NavBar';
import { v1 } from 'uuid';

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

  
  // handleChangingSelectedBubbleTea = (id) => {
  //   const selectedBubbleTea = this.state.masterBubbleTeaList.filter(bubbleTea => bubbleTea.id === id)[0];
  //   this.setState({selectedBubbleTea: selectedBubbleTea})
  // }

  handleRestockTea = (key) => {
    let newBubbleTeaList = this.state.masterBubbleTeaList;
    //when adding more than 1, it adds number as string
    newBubbleTeaList[key].quantity ++ ;
    this.setState({masterBubbleTeaList: newBubbleTeaList});
  }


  handleSellTea = (key) => {
    let newBubbleTeaList = this.state.masterBubbleTeaList;
    newBubbleTeaList[key].quantity --;
    this.setState({masterBubbleTeaList: newBubbleTeaList});
  }


  handleAddingNewBubbleTeaToList = (newBubbleTea) => {
    const newMasterBubbleTeaList = this.state.masterBubbleTeaList.concat(newBubbleTea);
    this.setState({masterBubbleTeaList: newMasterBubbleTeaList});
    this.setState({formVisibleOnPage: false});
  }

  setVisibility  = () => {
    if (this.state.formVisibleOnPage) {
      return {
        buttonText: "Return To the Main Page",
        //component: <NewBubbleTeaForm />,
        order: <NewBubbleTeaForm onNewBubbleTeaCreation={this.handleAddingNewBubbleTeaToList} />
      };
    } else {
      return {
        buttonText: "Add New Tea",
        //component: <BubbleTeaList />,
        order : <BubbleTeaList bubbleTeaList={this.state.masterBubbleTeaList} sellTea={this.handleSellTea} restockTea={this.handleRestockTea} />
      };
    }
  };



  render() {
    console.log(this.state)
    
    let currentlyVisibleState = this.setVisibility();
    console.log(currentlyVisibleState.order)
    console.log(currentlyVisibleState.component)
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