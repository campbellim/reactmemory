import React from "react";
import PictureCard from "./components/PictureCard";
import Pictures from "./pictures.json";
import TitleCard from "./components/title";


class App extends React.Component {
  state = {
    cards: Pictures,
    clickedCards: [],
    count: 0
  };


  shuffle = array => {

    var currentIndex = array.length;
    var temporaryValue, randomIndex;
  
    
    while (0 !== currentIndex) {
    
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  };

  
  cardClicked = cardID => {
 //check clicked function
    let hasBeenClicked=false;
    for(var i=0;i<this.state.clickedCards.length;i++){
      if(cardID===this.state.clickedCards[i]){
        hasBeenClicked=true;
        break;
      }
    }
    //Lose function
    if(hasBeenClicked){
      alert("YOU LOSE!");
      this.reset();
    }
    //Continue function
    else{

      let newArray=this.state.clickedCards;
      newArray.push(cardID);
      //Check if Player won 
      let current=this.state.count+1; 
      if(current===this.state.cards.length){
        alert("You Win!");
        this.reset();
      }
    
      else{
        this.setState({clickedCards: newArray, count: this.state.count+1});
      }
    }
  };

  //Reset
  reset = () => {
    this.setState({clickedCards: [], count: 0});
  }
  
  //Render F
  render=()=>{
    let shuffledArray=this.shuffle(this.state.cards);

    const allPictures = shuffledArray.map(Picture =>
      <PictureCard image={Picture.image} name={Picture.name} id={Picture.id} cardClicked={this.cardClicked} />
    );

    return (
      <div>
        <TitleCard/>
          {allPictures} 
      </div>
    );
  };

};

export default App;