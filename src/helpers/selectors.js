export function getAppointmentsForDay(state, day) {
  const appointments = [];

  const dayAppointments = state.days.flatMap(dayData => {
    if (dayData.name === day) return dayData.appointments; // return undefined if name and day don't match
  }).filter(appointment => appointment !== undefined); // filter out undefined from other day

  dayAppointments.forEach(appointment => {
    appointments.push(state.appointments[appointment]);
  });


  return appointments;
}