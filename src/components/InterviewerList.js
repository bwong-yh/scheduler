import React from "react";

import "components/InterviewerList.scss";

import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {
  const interviewerListData = props.interviewers.map(interviewer => {
    const { id, name, avatar } = interviewer;

    return (
      <InterviewerListItem
        key={id}
        name={name}
        avatar={avatar}
        selected={id === props.value}
        setInterviewer={() => { props.onChange(id); }} />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewerListData}</ul>
    </section>
  );
}