/* eslint-disable no-undef */
/*
This script should test with chai and mocha to test that the fibonacciSeries prints
for numbers (1,5,10 and 100)
@author Timothy1 and Nisha */

const chai = require("chai");
const { assert } = chai;

var fibonacci = require("../one");

describe("This function should calculate the fibonacciSeries series", function() {
  it("The number 1 should print series up to 1 ", function() {
    assert.deepEqual(fibonacci.fibonacciSeries(1), [0, 1]);
  });
  it("The number 5 should print series up to 5 ", function() {
    assert.deepEqual(fibonacci.fibonacciSeries(5), [0, 1, 1, 2, 3, 5]);
  });
  it("The number 10 should print series up to 55 ", function() {
    assert.isArray(fibonacci.fibonacciSeries(10), 55);
  });
  it("The number 100 should print series up to 354224848179262000000 ", function() {
    assert.isArray(fibonacci.fibonacciSeries(100), 354224848179262000000);
  });
});
