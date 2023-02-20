export const parseTimestampString = (timestamp: string) => {
  const [date, time] = timestamp.split("T");
  let parsedTime = time.slice(0, -2);
  const [hours, minutes] = parsedTime.split(":");

  parsedTime =
    String(Number(hours) > 12 ? Number(hours) - 12 : hours) +
    ":" +
    minutes +
    " " +
    (Number(hours) > 11 ? "pm" : "am");

  return date.replace(/-/g, "/") + ", " + parsedTime;
};
