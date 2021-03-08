import React from "react";

function CardText(props) {
  return (
    <div className="card-text text-left" style={{flexDirection:'row', flex: 1, flexWrap: 'wrap'}}>
      <p className="card-block">
        {props.text}
      </p>
    </div>
    
  );
}

export default CardText;