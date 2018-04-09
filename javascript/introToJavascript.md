JAVASCRIPT BASICS
-------------------
* "Expression" - a fragment of code that produces a value
* "Semicolon Rule" - add a semicolon at the end of every expression

JAVASCRIPT TYPES
------------------
1. Number
2. String
    * Just text with double or single quotes around it
    * Concantenation - adding multiple strings together
        * Ex: "Hey there, " + "Taylor." = "Hey there, Taylor."
3. Boolean
    * This where a lot of our comparisons come in to play
    * Values: true or false
4. Undefined
5. Null
6. Symbol (new in ECMAScript 6)
7. Object

JAVASCRIPT COMPARISONS
------------------------
1. !==  does not equal
2. ===  equal in type and value
3. >=   greater than or equal to
4. <=   less than or equal to
5. >    greater than
6. <    less than

JAVASCRIPT VARIABLES
----------------------
* variables must start with a letter or $ or _ , can end in a number, should use camelCase

1. var
2. let (new in ECMAScript 6)
3. const (new in ECMAScript 6)

JAVASCRIPT CONDITIONALS
-------------------------
* if (name === "Billy") {
    alert("Hi Billy!");
}
* if (name === "Billy") {
    alert("Hi Billy!");
} else {
    alert("Hmmm I don't know you.");
}
* if (name === "Billy") {
    alert("Hi Billy!");
} else if (name === "Susy") {
    alert("Hi Susy!");
} else {
    alert("Hmmm I don't know you.");
}

JAVASCRIPT LOGICAL OPERATORS
------------------------------
* if (name === "Billy" || name === "Ann") {
    alert("Hi Billy or Ann!");
}
    name === "Billy" would work
* if (firstName === "Billy" && lastName === "Smith") {
    alert("Hi Billy Smith!");
}
    var firstName = "Bob";
    var lastName  = "Smith";
* if (!(name === "Bob")) {
    alert("Hi Bob!");
}
    var name === (anything other than Bob works)