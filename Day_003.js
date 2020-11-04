// Using a for...of() loop and Object.keys to list the keys of an object in JavaScript

const studentGrades = {
  Alan: 90,
  Bob: 88,
  Charlie: 75,
  Diane: 80,
  Elanor: 76,
  Fred: 78
};

for (let student of Object.keys(studentGrades)) {
  console.log(student)
}

// Using a for...of() loop, Object.values, and Math.round to get the rounded average of
// the values of an object in JavaScript

const grades = Object.values(studentGrades);
let totalGrades = 0;

for (grade of grades) {
  totalGrades += grade;
}

let average = Math.round(totalGrades / grades.length);
console.log(average);