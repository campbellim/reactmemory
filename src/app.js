import React from "react";
import PictureCard from "./components/PictureCard";
import Pictures from "./pictures.json";
import TitleCard from "./components/title";
import "./App.css";

class App extends React.Component {
  state = {
    cards: Pictures,
    clickedCards: [],
    count: 0
  };


  shuffle = array => {

    var currentIndex = array.length;
    var temporaryValue, randomIndex;
  
    // While there remain piece to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  };

  
  cardClicked = cardID => {
    //Check if ID of Card has Been Clicked Already
    let hasBeenClicked=false;
    for(var i=0;i<this.state.clickedCards.length;i++){
      if(cardID===this.state.clickedCards[i]){
        hasBeenClicked=true;
        break;
      }
    }
    //If Card has Been Clicked,Player Lost
    if(hasBeenClicked){
      alert("YOU LOSE!");
      this.reset();
    }
    //Else Player Clicked Correctly
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

  //Reset Function
  reset = () => {
    this.setState({clickedCards: [], count: 0});
  }
  
  //Render Function
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