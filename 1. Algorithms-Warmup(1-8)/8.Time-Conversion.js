function timeConversion(s) {
  const arr = s.split(':');
  let isTimePm = arr[2].substring(2, 4) == 'PM' ? true : false;
  let hours = parseInt(arr[0], 10);
  hours = isTimePm ? hours < 12 ? hours + 12 : hours : hours == 12 ? 0 : hours;
  const minutes = arr[1];
  const seconds = arr[2].substring(0, 2);
  return `${String(hours).padStart(2, '0')}:${minutes}:${seconds}`;
}