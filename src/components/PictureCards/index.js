import React from "react";


function PictureCard(props) {
  return (
    <div class="card" onClick={()=>props.cardClicked(props.id)}>
      <img src={require("../../images/" + props.image)} class="card-img" alt={props.name}/>
    </div>
  );
}

export default PictureCard;