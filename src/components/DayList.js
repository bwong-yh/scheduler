import React from "react";


import DayListItem from "./DayListItem";

export default function DayList(props) {
  const DayListData = props.days.map(day => {
    const { id, name, spots } = day;

    return (
      <DayListItem
        key={id}
        name={name}
        spots={spots}
        selected={name === props.day}
        setDay={props.setDay} />
    );
  });

  return (
    <ul>{DayListData}</ul>
  );
};