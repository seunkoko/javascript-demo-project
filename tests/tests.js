// testing code goes here

'use strict'

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var myApp = require('../app/library.js');

describe("Test for proper arithmetic functionality", function() {
  it("should return 2 as average for 1, 2, 3", function() {
    // assert(myApp.computeAverage(1,2,3) == 3);
    // expect(myApp.computeAverage(1,2,3)).to.equal(3);
    myApp.computeAverage(1,2,3).should.equal(3);
  })
  it("should return 5 as average for 3, 7, 5", function() {
    // assert(myApp.computeAverage(3, 7, 5) == 5);
    // expect(myApp.computeAverage(3,7,5)).to.equal(5);
    myApp.computeAverage(3,7,5).should.equal(5);
  })
  it("should return 10 as average for 10, 10, 10", function() {
    // assert(myApp.computeAverage(10,10,10) == 10);
    // expect(myApp.computeAverage(10,10,10)).to.equal(10);
    myApp.computeAverage(10,10,10).should.equal(10);
  })
  it("should return 120 as factorial for 5", function() {
    // assert(myApp.computeFactorial(5) == 120);
    // expect(myApp.computeFactorial(5)).to.equal(120);
    myApp.computeFactorial(5).should.equal(120);
  })
  it("should return 1 as factorial for 0", function() {
    // assert(myApp.computeFactorial(0) == 1);
    // expect(myApp.computeFactorial(0)).to.equal(1);
    myApp.computeFactorial(0).should.equal(1);
  })
  it("should return undefined as factorial for -3", function() {
    // assert(myApp.computeFactorial(-3) == undefined);
    // expect(myApp.computeFactorial(-3)).to.equal(undefined);
    should.equal(myApp.computeFactorial(-3), undefined);
  })
})


describe("Test for temperature conversion functionality", function() {
  it("should return X for Celcius value Y", function() {
    // assert(myApp.convertTempCtoF(40) == 104);
    // expect(myApp.convertTempCtoF(40)).to.equal(104);
    myApp.convertTempCtoF(40).should.equal(104);
  })
  it("should return X for Celcius value Y", function() {
    // assert(myApp.convertTempCtoF(60) == 140);
    // expect(myApp.convertTempCtoF(60)).to.equal(140);
    myApp.convertTempCtoF(60).should.equal(140);
  })
  it("should return Y for Fahrenheit value X", function() {
    // assert(myApp.convertTempFtoC(140) == 60);
    // expect(myApp.convertTempFtoC(140)).to.equal(60);
     myApp.convertTempFtoC(140).should.equal(60);
  })
  it("should return Y for Fahrenheit value X", function() {
    // assert(myApp.convertTempFtoC(104) == 40);
    // expect(myApp.convertTempFtoC(104)).to.equal(40);
    myApp.convertTempFtoC(104).should.equal(40);
  })
})
