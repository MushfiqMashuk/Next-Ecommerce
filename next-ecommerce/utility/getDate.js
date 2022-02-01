export default function getDate() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const time = new Date();
  const date =
    day[time.getDay()] +
    ", " +
    time.getDate() +
    " " +
    months[time.getMonth()] +
    " " +
    time.getFullYear();

  return date;
}
