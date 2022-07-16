import React from "react";

import DayListItem from "./DayListItem";

export default function DayList(props) {
  const DayListData = props.days.map(day => {
    const { id, name, spots, setDay } = day;

    return (
      <DayListItem
        key={id}
        name={name}
        spots={spots}
        selected={name === props.day}
        setDay={setDay} />
    );
  });

  return (
    <ul>{DayListData}</ul>
  );
};