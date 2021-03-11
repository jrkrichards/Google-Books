import React from "react";
import {Input, FormBtn} from '../Form'


function SearchCard(props) {
  return (
    <div className="card pb-2 bg-light h-100 w-100">
      <div className="card-body">
        <h5 className="text-left">{props.title}</h5>
        <p className="text-left">{props.subtitle}</p>
        <Input id={props.inputId} />
        <FormBtn id={props.buttonId} onClick={props.onClick}>
          {props.buttonName}
        </FormBtn>
      </div>
    </div>
  );
}

export default SearchCard;
