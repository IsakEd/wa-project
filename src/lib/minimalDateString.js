export function minimalDateString(date) {
  const today = new Date();

  if (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  ) {
    return "today";
  } else if (date.getFullYear() === today.getFullYear()) {
    return `${date.getDate()}/${date.getMonth() + 1}`;
  } else {
    return `${date.getDate()}/${date.getMonth() + 1}/${date
      .getFullYear()
      .toString()
      .slice(-2)}`;
  }
}
