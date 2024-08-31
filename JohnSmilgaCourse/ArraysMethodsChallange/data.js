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

const updateStudents = students.map(function (students) {
       return {
       ...students,
       role: "student",
     };
});

console.log(updateStudents);
