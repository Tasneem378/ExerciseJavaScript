// 6-QUESTION.Use map to create a new array by changing each country to uppercase in the countries array.

const countries = [
    "Finland",
    "Sweden",
    "England",
    "Norway",
    "Iceland",
    "Ireland",
  ];
const namesToUpperCase = countries.map((name) => name.toUpperCase());
console.log(namesToUpperCase);