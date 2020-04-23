import React from 'react';
import BubbleTeaList from './BubbleTeaList';
import NewBubbleTeaForm from './NewBubbleTeaForm';
import NavBar from './NavBar';
import { v4 } from 'uuid';
import BubbleTeaDetail from './BubbleTeaDetail';

class BubbleTeaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedBubbleTea: null,
      masterBubbleTeaList: [
          {
            name: "Black Sugar Milk Tea",
            ingredient: "black tea",
            quantity: 5,
            img : "https://images.squarespace-cdn.com/content/v1/58d1f7308419c23d328cdb22/1559894022209-RV13I0JU6Y5N4P7XZKQU/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/Brown+Sugar+Bubble+Tea",
            id: v4(),
            message: "Available"
          },
          {
            name: "Taro milk Tea",
            description: "taro",
            quantity: 10,
            img: "https://cdn.shopify.com/s/files/1/0189/8074/files/shutterstock_409592143_grande.jpg?v=1504742648",
            id: v4(),
            message: "Available"
          },
          {
            name: "Matcha milk Tea",
            description: "matcha",
            quantity: 6,
            img : "https://hocphache.com.vn/wp-content/uploads/2017/10/hinh-tra-sua-thai-tra-xanh.jpg",
            id: v4(),
            message: "Available"
          }
      ],
      
    };
  }

  handleClick = () => {
    if (this.state.selectedBubbleTea != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBubbleTea: null
      });
    } else {
      this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
      }));    
    }
  }


  handleChangingSelectedBubbleTea = (id) => {
    const selectedBubbleTea = this.state.masterBubbleTeaList.filter(bubbleTea => bubbleTea.id === id)[0];
    console.log('selected bubble tea' + selectedBubbleTea);
    console.log('selected bubble tea id ' + id);
    this.setState({selectedBubbleTea : selectedBubbleTea});
  }

  // handleRestockTea = (id) => {
  //   const selectedBubbleTea = this.state.masterBubbleTeaList.filter(bubbleTea => bubbleTea.id === id)[0];
  //   console.log("quantity", this.state.selectedBubbleTea.quantity);
  //   this.state.selectedBubbleTea.quantity += 10;
  //   this.setState({selectedBubbleTea: selectedBubbleTea});
  // }

  handleRestockTea = (bubbleTeaToRestock) => {
    this.state.selectedBubbleTea.message = "Available";
    this.state.selectedBubbleTea.quantity += 10;
    const newMasterBubbleTeaList = this.state.masterBubbleTeaList.filter(bubbleTea => bubbleTea.id !== this.state.selectedBubbleTea.id).concat(bubbleTeaToRestock);
    this.setState({masterTicketList: newMasterBubbleTeaList});
  }

  handleSellTea = (bubbleTeaToSell) => {
    this.state.selectedBubbleTea.quantity > 0 ? this.state.selectedBubbleTea.quantity -- : this.state.selectedBubbleTea.message = "out of stock"
    const newMasterBubbleTeaList = this.state.masterBubbleTeaList.filter(bubbleTea => bubbleTea.id !== this.state.selectedBubbleTea.id).concat(bubbleTeaToSell);
    this.setState({masterTicketList: newMasterBubbleTeaList});
  }

  handleDeleteTea = (id) => {
    const newMasterBubbleTeaList = this.state.masterBubbleTeaList.filter(bubbleTea => bubbleTea.id !== id);
    this.setState({masterBubbleTeaList: newMasterBubbleTeaList});
    this.setState({selectedBubbleTea: null});
  }

  handleAddingNewBubbleTeaToList = (newBubbleTea) => {
    const newMasterBubbleTeaList = this.state.masterBubbleTeaList.concat(newBubbleTea);
    this.setState({masterBubbleTeaList: newMasterBubbleTeaList});
    this.setState({formVisibleOnPage: false});
  }


  // handleSellTea = (name) => {
  //   console.log('sell' + name);
  //   let newBubbleTeaList = this.state.masterBubbleTeaList;
  //   newBubbleTeaList[name].quantity --;
  //   this.setState({masterBubbleTeaList: newBubbleTeaList});
  // }


  setVisibility  = () => {
    if (this.state.selectedBubbleTea != null) {
      return {
        buttonText: "Return to the Main Page",
        order:  <BubbleTeaDetail bubbleTea = {this.state.selectedBubbleTea} onSellingTea={this.handleSellTea}  onRestockingTea={this.handleRestockTea} onDeletingTea={this.handleDeleteTea}/>
      }
    } else if (this.state.formVisibleOnPage) {
      return {
        buttonText: "Return to the Main Page",
        order: <NewBubbleTeaForm onNewBubbleTeaCreation={this.handleAddingNewBubbleTeaToList} />
      };
    } else {
      return {
        buttonText: "Add New Tea",
        order : <BubbleTeaList bubbleTeaList={this.state.masterBubbleTeaList} onBubbleTeaSelection={this.handleChangingSelectedBubbleTea} />
      };
    }
  };


  render() {
    console.log(this.state)
    
    let currentlyVisibleState = this.setVisibility();
    console.log('order' + currentlyVisibleState.order);
    //console.log('BubbleTeaList' + bubbleTeaList)
    return (
      <>
      {currentlyVisibleState.order}
      <button onClick={this.handleClick}>{currentlyVisibleState.buttonText}</button>
      </>
    );
  }  
}

export default BubbleTeaControl;