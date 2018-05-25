//Advanced Arrays

const array = [1, 2, 30, 47];

const double = [];
const newArray = array.forEach((num) => {
    double.push(num *= 2);
})

console.log(double);

// map, filter, reduce

const mapArray = array.map(num => num * 2);
//map always returns an element, while forEach just iterates over each element
console.log(mapArray);

const filterArray = array.filter(num => num > 5);
console.log('filter', filterArray);
//returns new array with only the numbers from original array that are greater than 5

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0) //this is the accumulator starting value 
//accumulator is where we can store information that happens in body of function
console.log('reduce', reduceArray);