import React from "react";
import "./style.css";


function CardTitle(props) {
  return (
    <h6 className={`text-center ${props.class}`}>
      <a
        href={props.link}
      >
        {props.project}
      </a>
    </h6>
  );
}

export default CardTitle;
