// 12-QUESTION.Use filter to filter out countries having six character.

const countries = [
    "Finland",
    "Sweden",
    "England",
    "Norway",
    "Iceland",
    "Ireland",
  ];
const countriesHaveSixLetters = countries.filter(
    (country) => country.length === 6
  );
  console.log(countriesHaveSixLetters);
