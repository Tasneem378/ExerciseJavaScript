// 7-QUESTION.Use map to create an array of countries length from countries array.

const countries = [
    "Finland",
    "Sweden",
    "England",
    "Norway",
    "Iceland",
    "Ireland",
  ];
const countryLengths = countries.map((country) => country.length);
console.log(countryLengths);