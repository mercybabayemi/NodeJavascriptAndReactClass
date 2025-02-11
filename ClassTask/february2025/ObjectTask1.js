function getStudentName(student){
  let response = student.name;
  return response;
}

let secondCourse = (student) =>{
  let result = student["courses"][1];
  return result;
};

function getZipAddress(student){
  let zipping = student.address.zip
  return zipping;
}

let updateAge = (student) =>{
  student.age = 23;
  return student.age
}

function addGpaValue(student){
  student.GPA = 3.8
  return student.GPA
}

module.exports = {getStudentName, secondCourse, getZipAddress, updateAge, addGpaValue};