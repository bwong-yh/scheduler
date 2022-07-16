import React from "react";

import "components/DayListItem.scss";
import className from "classnames";

export default function DayListItem(props) {
  const dayClass = className("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": (props.spots === 0)
  });

  const openSpots = props.spots;

  const formatSpots = (openSpots) => {
    if (openSpots === 0) {
      return "no spots remaining";
    } else if (openSpots === 1) {
      return "1 spot remaining";
    }

    return `${openSpots} spots remaining`;
  };

  return (
    <li
      className={dayClass}
      onClick={() => props.setDay(props.name)}
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(openSpots)}</h3>
    </li>
  );
}