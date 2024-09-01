const students = [{
   id: 1,
   name: 'peter',
   score: 80,
   favoriteSubject: 'math',
},
{
   id: 2,
   name: 'Halaand',
   score: 90,
   favoriteSubject: 'physical education',
},
{
   id: 3,
   name: 'Mary',
   score: 87,
   favoriteSubject: 'physics',
},
{
   id: 4,
   name: 'Luka',
   score: 54,
   favoriteSubject: 'Biology',
},          
{
   id: 5,
   name: 'Mario',
   score: 77,
   favoriteSubject: 'Geography',
},
]

const updateStudents = students.map(function (student) {
   
       student.role = "student";
       return student;
});
console.log(updateStudents);

/* #### highScores

1. filter array and return only scores >= 80
2. assign to 'highScores' variable and log

#### specificId

1. find specific id in array
2. assign to 'specificId' variable and log
*/
const highScores = students.filter (function (student)  {
   if(student.score >= 80){
     return student;
   }
});       
   //console.log(highScores);    

const specificId = students.find(function (idStudent) {
  return idStudent.id === 4;
});
  //console.log(specificId);

const averageScore =
  students.reduce(function (scoresTotal, student) {
    return scoresTotal + student.score / students.length;
  }, 0) 

console.log(averageScore);
