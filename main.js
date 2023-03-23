/*
In this challenge, you will be using your newfound knowledge of asynchronous code to control time and make the hand of this clock tick. Break down the problem, make a plan, and then translate it into code.

- You should use setInterval.
- The hand should move around the clock every second and should complete a full revolution in 60 seconds.
- You should adjust the rotation of the hand using the transform property as demonstrated in `main.js`.

## Bonus after your clock is ticking

- Use the JS Date object to get the real seconds.
- Add a minute hand.
- Add an hour hand.
*/

const secondsHand = document.querySelector('.seconds');
const minutesHand = document.querySelector('.minutes');
const hoursHand = document.querySelector('.hours');
let countdeg = 0;

setInterval(function () {
	const now = new Date();
	const seconds = now.getSeconds();
	const secondsDegrees = (seconds / 60) * 360;
	secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

	const mins = now.getMinutes();
	const minsDegrees = (mins / 60) * 360;
	minutesHand.style.transform = `rotate(${minsDegrees}deg)`;

	const hours = now.getHours();
	const hoursDegrees = (hours / 12) * 360;
	hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}, 1000);
