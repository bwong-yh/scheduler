import React from "react";

export default function Empty(props) {
  return (
    <img
      className="appointment__add-button"
      src="images/add.png"
      alt="Add"
      onClick={props.onAdd} />
  );
}