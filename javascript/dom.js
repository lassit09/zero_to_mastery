var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var li = document.querySelector("li");
var deleteButton = document.querySelector("li button");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListElementAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListElementAfterKeyPress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function toggleLiClassOnClick() {
    li.classList.toggle("done");
}

button.addEventListener("click", addListElementAfterClick);

input.addEventListener("keypress", addListElementAfterKeyPress);

li.addEventListener("click", toggleLiClassOnClick);