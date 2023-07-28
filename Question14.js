//14-QUESTION.Use filter to filter out country start with 'E';

const countries = [
    "Finland",
    "Sweden",
    "England",
    "Norway",
    "Iceland",
    "Ireland",
  ];
const startsWithE = countries.filter((country) =>
country.startsWith("E")
);
console.log(startsWithE);