const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const flatten = require("./flatten");
const assertEqual = require("./assertEqual");
const assertArrayEqual = require("./assertArraysEqual");
const assertObjectsEqual = require("./assertObjectsEqual");
const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");
const countLetters = require("./countLetters");
const countOnly = require("./countOnly");
const findKey = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const letterPostion = require("./letterPositions");
const map = require("./map");
const takeUntil = require("./takeUntil");
const without = require("./without");

module.exports = {
  head,
  tail,
  middle,
  flatten,
  assertEqual,
  assertArrayEqual,
  assertObjectsEqual,
  eqArrays,
  eqObjects,
  countLetters,
  countOnly,
  findKey,
  findKeyByValue,
  letterPostion,
  map: map,
  takeUntil,
  without,
};
