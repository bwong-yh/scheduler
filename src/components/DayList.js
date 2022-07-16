import React from "react";


import DayListItem from "./DayListItem";

export default function DayList(props) {
  const dayListData = props.days.map(day => {
    const { id, name, spots } = day;

    return (
      <DayListItem
        key={id}
        name={name}
        spots={spots}
        selected={name === props.value}
        setDay={props.onChange} />
    );
  });

  return (
    <ul>{dayListData}</ul>
  );
};