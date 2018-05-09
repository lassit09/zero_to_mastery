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

JAVASCRIPT FUNCTIONS
----------------------
* Syntax for calling a function: functionName(argument);
* FUNCTION DECLARATION
    * function sayHello() {
        console.log("Hello");
    }
* FUNCTION EXPRESSION
    * var sayBye = function() {
        console.log("Bye");
    };
    * this is an anonymous function
* PARAMETERS VS. ARGUMENTS
    * Parameters are like the variables you put in when constructing a function.
    * Arguments are what you put in place of those variables when calling a function.

JAVASCRIPT ARRAYS
-------------------
* Great for shopping lists or to-do lists
* Accessing arrays: list[0];
* ARRAY METHODS
    * .shift() - remove first item
    * .pop() - remove last item
    * .push() - add item to end
    * .unshift() - add item to beginning
    * .concat() - add to current array
    * .sort() - alphabetize

JAVASCRIPT OBJECTS
--------------------
* Objects are collections of properties
* Great for user information
* Object syntax: 
    var user = {
        name: 'John',
        age: 34,
        hobby: 'Soccer',
        isMarried: false
    }
* To select values: user.name
* Adding/Editing properties to object: user.favoriteFood = 'Spinach';
* A function inside an object is called a "Method"

DOCUMENT OBJECT MODEL
-----------------------
* The DOM allows us to modify HTML and CSS
* DOM Selectors
    * document.getElementsByTagName("h1");
    * document.getElementsByClassName("firstClass");
    * document.getElementById("firstID");
    * document.querySelector("h1") or (#id) or (.class);
    * document.querySelectorAll("li"); //selects all li's
    * document.querySelector(".class").getAttribute("height");
    * document.querySelector(".class").setAttribute("height", "20px");
* Changing Styles
    * document.querySelector("h1").style.{property} //ok
    * className //best
    * classList //best
        * classList.add
        * classList.remove
        * classList.toggle
    * innerHTML //DANGEROUS
    * parentElement
    * children
* CACHE YOUR SELECTORS IN VARIABLES FOR EFFICIENCY

* DOM Events
    * addEventListener("event", function() {
        console.log("whatever");
    });
    * createElement("li");
        * li.appendChild(document.createTextNode(input.value));
        * ul.appendChild(li);

SCOPE
-------
function aa() {
    console.log("test");
}
* function aa is now part of the window scope
function bb() {
    var a = "hello";
}
* you could not console.log(a), because it only lives in function bb()
* you could console.log(a) within in function bb() like
    function bb() {
        var a = "hello";
        console.log(a);
    }
* we can set variables outside functions and use them within the function like
    var b = "Can I access this?";
    function bb() {
        console.log(b) // will retrun "Can I access this?"
    }
* but we can reassign the variable within a function like
    var b = "Can I access this?"
    function bb() {
        b = "hello";
    }
    console.log(b); // will return "hello"

// Root Scope (window)
    var fun = 5;

function funFunction() {
    // child scope
    var fun = "hellooo";
    console.log(1, fun);
}

function funerFunction() {
    // child scope
    var fun = "Bye";
    console.log(2, fun);
}

function funestFunction() {
    // child scope
    fun = "AHHHHH";
    console.log(3, fun);
}

console.log("window", fun); // window 5
funFunction(); // 1 "hellooo"
funerFunction(); // 2 "Bye"
funestFunction(); // 3 "AHHHHH"
console.log(fun); // "AHHHHH"