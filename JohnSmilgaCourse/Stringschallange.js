/*

## strings #8

1. create function fullName
2. accept two parameters "firstName", "lastName"
3. add them together (concat) and return result in uppercase
4. involke fullname and pass some values
5. log results
6. change the order of arguments
7. refactor to object paraneters 

*/

function fullname(firstName, lastName){
  const fullname = `${firstName} ${lastName}`;
  return console.log(fullname.toUpperCase());
}

fullname("Rony", "Rustic");

function objectFullName({firstName, lastName}){
  const objectFullName = `${firstName} ${lastName}`;
  return console.log(objectFullName.toUpperCase());
}

objectFullName({lastName: "Thompson", firstName: "Mary"});
