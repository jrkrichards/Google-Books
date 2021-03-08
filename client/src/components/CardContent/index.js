import React from "react";
import CardTitle from "../CardTitle";


function CardContent(props) {
  return (
    <CardTitle
    title={props.title}
    link={props.link}
    project={props.project}
    />
  );
}

export default CardContent;