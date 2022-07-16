import React from "react";

import "components/InterviewerListItem.scss";
import className from "classnames";

export default function InterviewerListItem(props) {
  const interviewerClass = className("interviewer__item", {
    "interviewers__item--selected": props.selected
  });

  return (
    <li className={interviewerClass}>
      <img
        className="interviewers__item-image"
        src="https://i.imgur.com/LpaY82x.png"
        alt={props.name}
      />
      {(props.selected && props.name)}
    </li>
  );
}