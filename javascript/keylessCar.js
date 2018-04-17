//Make a keyless car!
//This car will only let you dirve if you are over 18.

function checkDriverAge() {
	var age = Number(prompt("What is your age?"));

	if (age < 18) {
		alert("Sorry, you are too young to be driving this car. Powering off.");
	} else if (age === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	} else {
		alert("Powering on. Enjoy the ride!");
	}
}

function checkDriverAge2(age) {
	if (age < 18) {
		return "Sorry, you are too young to be driving this car. Powering off.";
	} else if (age === 18) {
		return "Congratulations on your first year of driving. Enjoy the ride!";
	} else {
		return "Powering on. Enjoy the ride!";
	}
}