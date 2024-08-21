/*
## conditional statements #7

1. create two objects "person1", "person2"
2. setup name, age(15-25),
   status ('resident', 'tourist') keys

3. set up if else condition where age must bigger than 18 and status must be equal to 'resident'
4. test with both objects
*/

const person1 = {
    name: "Clara",
    age: 15,
    status: "tourist",
}

const person2 = {
    name: "Michael",
    age: 25,
    status: "Resident",
}

if (person1.age >= 18 && person1.status === "Resident"){
  console.log("You can cast a vote");
}else{
  console.log("You are not eligible");
}

if (person2.age >= 18 && person2.status === "Resident"){
  console.log("You can cast a vote");
}else{
  console.log("You are not eligible");
}
