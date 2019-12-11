import React from "react";

const NumberButton = props => {
  return (
      <button className="button" onClick={() => props.setNumberState(props.label)}>{props.label}</button> 
  )
};

export default NumberButton ;

/* Display a button element rendering the data being passed down from the parent container on props */{/*onClick={numberState = props.label }*/} 