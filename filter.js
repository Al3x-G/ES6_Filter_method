  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */

/********************************************************************** */
// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

let oldEnough= people.filter(person => person.age >= 21);
console.log(oldEnough)

//const paul = people.filter(person => person.name === "Paul"); //notice difference below
const paul = people.filter(p => p.name === "Paul");
console.log(paul);

/* If you log paul to the console, you’ll see it’s actually an array containing the paul object. 
If I want to access the object itself, I could simply append [0] to the end to get the
first and only element in the resulting array.*/

const paul2 = people.filter(p => p.name === "Paul")[0];
console.log(paul2);


/********************************************************************** */
// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

/*  const candidates = students.filter (students =>{
    let strongSkills = students.skills.filter(skill => skill.yrsExperience >= 5);
    return strongSkills.length > 0;
    });
    console.log(candidates); 
*/

/* This filter looks pretty complex and it’s not exactly easy to understand what’s going on. 
In this case, I would extract the whole filter function into its own function, for example, 
called hasStrongSkills: Then I can just pass the hasStrongSkills function to my filter, 
which is a lot easier to read, plus it allows us to reuse the filter function elsewhere. */


/*  const hasStrongSkills = students =>{
    let strongSkills = students.skills.filter(skill => skill.yrsExperience >= 5);
    return strongSkills.length > 0;
    };
    const candidates = students.filter (hasStrongSkills);
    console.log(candidates); 
*/

/*I could even extract the inner filter into another external function called has5YearsExp, 
and then pass it inside the hasStrongSkills function. This actually allows me to then remove 
the return statement and the strongSkills variable entirely, just attach .length onto the  
end of the inner filter instead, and turn everything into a nice single line of code.*/


/*  const has5YearsExp = skill => skill.yrsExperience >= 5;
    const hasStrongSkills = students =>students.skills.filter(has5YearsExp).length > 0;

    const candidates = students.filter (hasStrongSkills);
    console.log(candidates); 
*/

const has5YearsExp = skill => skill.yrsExperience >= 5;
const hasStrongSkills = student => student.skills.filter(has5YearsExp).length > 0;

const candidates = students.filter(hasStrongSkills).map(student => student.name);
console.log(candidates);

/* The filter function remains the same, filtering out students who have at least one skill with 5 
or more years of experience. The map function is added after the filter function to transform the 
list of student objects to a list of student names. logging this to the console,the candidates array 
will contain only the names of the students who meet the criteria */


