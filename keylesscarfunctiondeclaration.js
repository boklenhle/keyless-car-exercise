var check = function() {var age = prompt("What is your age?");
if (Number(age) < 18) {
	return alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	return alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	return alert("Congratulations on your first year of driving. Enjoy the ride!");
}
}
check()