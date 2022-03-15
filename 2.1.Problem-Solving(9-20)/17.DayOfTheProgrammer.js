function dayOfProgrammer(year) {
  let programmerDay = 0;
  if (year == 1918) {
      return '26.09.1918'
  }
  if (year >= 1700 && year <= 1917) {
      if (Number.isInteger(year / 4)) {
          programmerDay = 12;
      } else {
          programmerDay = 13;
      }
  } else if (year >= 1918 && year <= 2700) {
      if (Number.isInteger(year / 400) || (Number.isInteger(year / 4) && !Number.isInteger(year/ 100))) {
          programmerDay = 12;
      } else {
          programmerDay = 13;
      }
  }
  
  return `${programmerDay}.09.${year}`

}