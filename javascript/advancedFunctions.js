// function first() {
//     var greet = "Hi";
//     function second() {
//         alert(greet);
//     }
//     return second;
// }

const first = () => {
    const greet = "Hi";
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

//Closures
    //The function ran, the function executed, it's never going to execute again, BUT it's going to remember that there are references to those variables so that child scope always has access to parent scope.
    //The child scope always has access to the parent scope.
    //Calling first executes second function without const greet, but because of closures, second function has access to const greet.

//Currying
    //The process of converting a function that takes multiple arguments into a funciton that takes arguments one at a time.

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
// curriedMultiply(3, 4) //returns 12
const multiplyBy5 = curriedMultiply(5);
// multiplyBy5(4); returns 20;

//Compose
    //The act of putting two functions together to form a third function where the output of one function is the input of the other
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum,sum)(5);
//returns 7 because f(g(a)) equals f(g(5)), then f(6), then 7

//Avoiding Side Effects, Functional Purity
var a = 1;
function b() {
    a = 2; //this is a side effect because it affects the outside world
}