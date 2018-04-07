var links = document.querySelectorAll(".nav-item");

function clickedLink() {
    for(var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function(){
            links[i].classList.add("selected");
        });
    }
}