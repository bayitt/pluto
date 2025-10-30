const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const parseDate = (dateString: string) => {
  const date = new Date(dateString);
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};
