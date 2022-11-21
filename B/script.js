const start = new Date().getTime();

function calculateTimePassed(past) {
	const now = new Date().getTime();
	const difference =  now - past;
	return difference / 1000;
}

const buttonB = document.getElementById('b');
const buttonBStyle = buttonB && buttonB.style;
const randomTop = Math.floor(Math.random() * 92).toString() + '%';
const randomLeft = Math.floor(Math.random() * 82).toString() + '%';
buttonBStyle.top = randomTop;
buttonBStyle.left = randomLeft;
buttonB && buttonB.addEventListener("click", () => alert(calculateTimePassed(start) + ' segundos'));