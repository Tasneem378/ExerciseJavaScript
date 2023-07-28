 // 13-QUESTION.Use filter to filter out countries containing six letters and more in the country array.
 
 const countries = [
    "Finland",
    "Sweden",
    "England",
    "Norway",
    "Iceland",
    "Ireland",
  ];
 const result = countries.filter((name) => name.length > 6);
 console.log(result);