function gradingStudents(grades) {
  // Write your code here
  for (let i = 0; i < grades.length; i++) {
    let max = Math.ceil(grades[i] / 5) * 5;
    let value = max - grades[i];
    if (value < 3 && (grades[i] + value) >= 40) {
      grades[i] = max;
    }
  }
  return grades;
}