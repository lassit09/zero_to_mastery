function sayHello() {
    console.log("Hello");
}

sayHello();

//anonymous function using Function Expression
var sayBye = function() {
    console.log("Bye");
}

function sing(song) {
    console.log(song);
}

sing("Laaa deee daaa");
sing("Hellooooooo");
sing("Backstreet's back alright!");

function multiply(a, b) {
    if (a > 10 || b > 10) {
        return "That's too hard.";
    } else {
        return a * b;
    }
}

alert(multiply(5, 10));