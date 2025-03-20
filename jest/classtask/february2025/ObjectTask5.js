const company = {
  name : "TechCorp",
  location : "San Francisco",
  employees : [
    {id : 1, name: "Mercy", department: "Engineering"},
    {id : 2, name: "Janet", department: "HR"},
    {id : 3, name: "Ayomide", department: "Marketing"},
    {id : 4, name: "Iyanuoluwa", department: "Engineering"}
  ]
}

function destructuring(){
  const {name, location} = company;
  console.log("The company name is "+ name);
  console.log("It is located at " + location);
  return " "
}

const secondEmployee = () =>{
  return company.employees.filter((element) => element.id == 2);
  // let count = 0
  // for(let employee in company.employees){
  //   ++count;
  //   if(count == 2){
  //     return `${company.employees[employee]["name"]}`;
  //   }
  // }
}

function printNameAndDepartment(){
  for(let employee in company.employees){
    console.log(`${company.employees[employee]["name"]} is in ${company.employees[employee]["department"]} depaartment`);
  }
  return " "
}

console.log(destructuring());
console.log(`The second employee is ${secondEmployee()}`);
console.log(printNameAndDepartment());