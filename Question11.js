// 11-QUESTION.Use filter to filter out countries containing land.

const countries = [
    "Finland",
    "Sweden",
    "England",
    "Norway",
    "Iceland",
    "Ireland",
  ];
const countriesContainingLand = countries.filter((country) =>
country.includes("land")
);
console.log(countriesContainingLand);