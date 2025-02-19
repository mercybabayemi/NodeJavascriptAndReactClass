const getStateInZone = require("./enum.js");

test("test that getStateInZone returns correct value", ()=>{
  let state = "adamawa";
  let answer = getStateInZone(state);
  let response = "NORTH_EAST";
  expect(answer).toEqual(response);
});

test("test that getStateInZone returns null when not found", ()=>{
  let state = "london";
  let answer = getStateInZone(state);
  let response = null;
  expect(answer).toEqual(response);
});