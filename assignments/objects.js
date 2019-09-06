// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:
    

// Example format of an intern object: 1, examples@you.edu, Example, F
const example = {
  id: 0,
  name: "Example",
  email: "examples@you.edu",
  gender: "F",
}

// Write your intern objects here:
const internOne = {
  id: 1, 
  email: "mmelloy0@psu.edu", 
  first_name: "Mitzi", 
  gender: "F"
};

const internTwo = {
  id: 2, 
  email: "kdiben1@tinypic.com", 
  first_name: "Kennan", 
  gender: "M", 
  speak: () => {
    console.log(`Hello, my name is ${internTwo.first_name}`);
  }
}

const internThree = {
  id: 3, email: "kmummery2@wikimedia.org", first_name: "Keven", gender: "M"  
}

const internFour = {
  id: 4, email: "gmartinson3@illinois.edu", first_name: "Gannie", gender: "M"
}

const internFive = {
  id: 5, 
  email: "adaine5@samsung.com", 
  first_name: "Antonietta", 
  gender: "F",
  math: (a, b) => {
    return a * b;
  }
}

// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(internOne.first_name);
// Kennan's ID
console.log(internTwo.id);
// Keven's email
console.log(internThree.email);
// Gannie's name
console.log(internFour.first_name);
// Antonietta's Gender
console.log(internFive.gender);
// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
console.log(internTwo.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
console.log(internFive.math(3,4));

// === Great work! === Head over to the the arrays.js. You may come back and attempt the Stretch Challenge once you have completed the challenges in arrays.js and function-conversion.js.

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {
  name: "Susan",
  age: 70,
  speak: (name) => {
    console.log (`hello, my name is ${this.name}`);
  },
  child: {
    name: "George",
    age: 50,
    speak: (name) => {
      return `hello, my name is ${this.name}`;
    },
    grandchild: {
      name: "Sam",
      age: 30,
      speak: (name) => {
        return `hello, my name is ${this.name}`;
      }
    }
  }
}

// Log the parent object's name
console.log(parent.name);
// Log the child's age
console.log(parent.child.age);
// Log the name and age of the grandchild
console.log(parent.child.grandchild.name);
// Have the parent speak
console.log(parent.speak());
// Have the child speak
console.log(parent.child.speak());
// Have the grandchild speak
console.log(parent.child.grandchild.speak());

