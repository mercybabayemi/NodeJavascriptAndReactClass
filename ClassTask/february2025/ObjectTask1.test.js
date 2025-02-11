const {getStudentName, secondCourse, getZipAddress, updateAge, addGpaValue} = require("./ObjectTask1.js")
let student = {
  name: "JohnDoe",
  age: 22,
  courses: ["Math", "Physics", "Computer Science"],
  address: {
    city: "New York",
    zip: 10001,
  }
};

test("Get the student's name", ()=>{
  let result = getStudentName(student);
  let gotten = "JohnDoe";
  expect(result).toBe(gotten)
});

test("Get student's second course", ()=>{
  let response = secondCourse(student);
  let returned = "Physics";
  expect(response).toBe(returned)
});

test("Get the zip address", ()=>{
  let getting = getZipAddress(student);
  let expected = 10001;
  expect(getting).toBe(expected)
});

test("Update student age from 22 to 23", ()=>{
  let actual = updateAge(student);
  let expected = 23
  expect(actual).toBe(expected)
});

test("Add gpa", ()=>{
  let actual = addGpaValue(student);
  let expected = 3.8
  expect(actual).toBe(expected)
});