import React from "react";

import "components/InterviewerListItem.scss";
import className from "classnames";

export default function InterviewerListItem(props) {
  const interviewerClass = className("interviewer__item", {
    "interviewers__item--selected": props.selected
  });

  return (
    <li className={interviewerClass} onClick={() => props.setInterviewer(props.id)}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {(props.selected && props.name)}
    </li>
  );
}