//ECMAScript 6 (ES6)

//let & const
//let is our new var
//const can never be reassigned, but are mutable
const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
    console.log('inside', wizardLevel);
}

console.log('outside', wizardLevel);

//DESTRUCTURING
const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}

const player = obj.player;
const experience = obj.experience;
const wizardLevel = obj.wizardLevel;

const { player, experience } = obj;
let { wizardLevel } = obj;

//OBJECT PROPERTIES
const a = 'Simon';
const b = true;
const c = {};

const obj = {
    a,
    b,
    c
}

//TEMPLATE STRINGS
const name = "Sally";
const age = 34;
const pet = "Horse";
//old way
const greeting = "Hello " + name + " you seem to be doing " + greeting + ".";
//new way uses back ticks 
const greetingBest = `Hello ${name} you seem to be ${age} years old.  What a lovely ${pet} you have!`;

//DEFAULT ARGUMENTS
function greet(name='', age=10, pet='cat') {
    return `Hello, ${name}, you seem to be ${age}. What a lovely ${pet} you have!`;
}

//SYMBOLS (not used often)
let sym1 = Symbol();
let sym2 = Symbol('foo'); //these two will not be equal, they are unique
let sym3 = Symbol('foo'); //these two will not be equal, they are unique

//ARROW FUNCTIONS
function add(a, b) {
    return a + b;
}

const add2 = (a, b) => a + b;