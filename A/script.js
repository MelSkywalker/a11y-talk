const start = new Date().getTime();

function calculateTimePassed(past) {
	const now = new Date().getTime();
	const difference =  now - past;
	return difference / 1000;
}

const buttonA = document.getElementById('a');
buttonA && buttonA.addEventListener("click", () => alert(calculateTimePassed(start) + ' segundos'));
