const five = require("johnny-five");

// Define the pin that is connected to the LED
const LEDPIN = 13;

// Create a Johnny Five board instance to represent Arduino
const board = new five.Board();

// board.on() executes the anonymous function when
// board reports back that it is initialized and ready.
board.on("ready", function() {
	console.log("Bored is Alive!!!");

	// Set the pin you connected to the LED to OUTPUT mode
	this.pinMode(LEDPIN, five.Pin.OUTPUT);

	// Create a loop to "flash" an led
	let val = 0;
	this.loop(100, function() {
		this.digitalWrite(LEDPIN, (val = val ? 0 : 1));
	});
});
