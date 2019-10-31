/*
This script should calculate the fibonacciSeries for numbers (1,5,10 and 100)
@author Timothy1 and Nisha */

const chalk = require("chalk");
const error = chalk.bold.red;
const warning = chalk.keyword("orange");

const fibonacciSeries = number => {
  if (number == 1) {
    return [0, 1];
  } else {
    var series = fibonacciSeries(number - 1);
    series.push(series[series.length - 1] + series[series.length - 2]);
    return series;
  }
};

console.log(error("The series for the number one is ") + fibonacciSeries(1));
console.log(warning("The series for the number five is ") + fibonacciSeries(5));
// console.log(error("The series for the number ten is ") + fibonacciSeries(10));
// console.log(
//   warning("The series for the number onehundred is ") + fibonacciSeries(100)
// );

module.exports = {
  fibonacciSeries
};
