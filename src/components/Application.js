import React, { useState, useEffect } from "react";
import axios from "axios";

import "components/Application.scss";

import DayList from "components/DayList";
import Appointment from "components/Appointment/";
import { getAppointmentsForDay, getInterview } from "helpers/selectors";

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });

  const setDays = days => setState(prev => ({ ...prev, days }));

  const dailyAppointments = getAppointmentsForDay(state, state.day);

  useEffect(() => {
    const daysUrl = "http://localhost:8001/api/days";
    const appointmentsUrl = "http://localhost:8001/api/appointments";
    const interviewersUrl = "http://localhost:8001/api/interviewers";

    Promise.all([
      axios.get(daysUrl),
      axios.get(appointmentsUrl),
      axios.get(interviewersUrl)
    ]).then(all => {
      const daysData = all[0].data;
      const appointmentsData = all[1].data;
      const interviewersData = all[2].data;

      setState(prev => ({
        ...prev,
        days: daysData,
        appointments: appointmentsData,
        interviewers: interviewersData
      }));
    });
  }, []);

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            value={state.day}
            onChange={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {dailyAppointments.map(appointment => {
          const interview = getInterview(state, appointment.interview);

          return (
            <Appointment
              key={appointment.id}
              {...appointment}
              interview={interview}
            />
          );
        })}
      </section>
    </main>
  );
}
