import InterviewerList from "components/InterviewerList";

export function getAppointmentsForDay(state, day) {
  let appointments = [];

  // extract appointment ids from days
  state.days.forEach(dayData => {
    dayData.name === day && (appointments = [...dayData.appointments]);
  });

  // returns a list of appointment data from days appointment ids
  return appointments.reduce((appointmentsInfo, curr) => {
    appointmentsInfo.push(state.appointments[curr]);

    return appointmentsInfo;
  }, []);
}

export function getInterview(state, interview) {
  // interview is by default null if no interview is scheduled
  return interview && {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer]
  };
}