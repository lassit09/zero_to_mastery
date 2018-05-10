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