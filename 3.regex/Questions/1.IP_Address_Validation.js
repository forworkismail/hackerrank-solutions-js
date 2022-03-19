function processData(input) {
  //Enter your code here
  let lines = input.split('\n').slice(0);
  for (let i = 1; i <= lines[0]; i++) {
      if ((/\b(((2[0-5][0-5])|(1[0-9][0-9])|(\b[1-9][0-9]\b)|(\b\d\b))\.){3}((2[0-5][0-5])|(1[0-9][0-9])|(\b[1-9][0-9]\b)|(\b\d\b))\b/).test(lines[i])) {
          console.log('IPv4');
      } else if ((/([a-f0-9]{1,4}:){7}\b[0-9a-f]{1,4}\b/).test(lines[i])) {
          console.log('IPv6');
      } else {
          console.log('Neither');
      }
  }
}