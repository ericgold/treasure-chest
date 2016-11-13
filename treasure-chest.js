(function(exports) {

// ******* DATA OBJECT ******************************
	var DATA = {
		student : "Eric Gold",
		date : "11-12-16",
		organization : "Hack Oregon",
		department : "Hack University",
		course : "JavaScript Foundations",
		instructor : "Merritt Lawrenson"
	};

// ******* METHODS ********************************** 
//min
	exports.min = function(a,b) {
		if (a < b) {
			return a;
		} else if (b < a) {
			return b;
		} else {
			return false;
		}
	};

//countChar
	exports.countChar = function(string, char) {
		var chars = 0;
		for (var i=0; i<string.length; i++) {
			if (string.charAt(i) == char) {
				chars++;
			}
		}
		return chars;
	};

//board
	exports.gameBoard = function(horizontal, vertical) {
		var sizeX = horizontal;
		var sizeY = vertical;
		var board = "";

		for (var y = 0; y < sizeY; y++) {
			for (var x = 0; x < sizeX; x++) {
				if ((x+y) % 2 === 0)
					board += " ";
				else
					board += "#";
			}
			board += "\n";
		}
		return board;	
	}

//isPrime
	exports.isPrime = function(number) {
		for (var i = 2; i < number; i++) {
			if (number % i === 0) {
				return false;
			} 
		}
		return number > 1;
	};

//betterRange
	exports.betterRange = function(start, end, step) {
		var rangeArray = [];
		if (typeof step === "undefined") { // if (step == null)
			step = 1;
		} else if (step < 0) {
			for (var i = start; i >= end; i+=step) {
				rangeArray.push(i);
			}
		} else {
			for (var j = start; j <= end; j+=step) {
				rangeArray.push(j);
			}
		}
		return rangeArray;
	};

//reverseArray 
	exports.reverseArray = function(array) {
		var output = [];
		for (var i = array.length -1; i >= 0; i--) {
			output.push(array[i]);
		}
		return output;
	};

//madArguments
	exports.madArguments = function() {
		var numbers = [];
		var others = [];
		for (var i = 0; i<arguments.length; i++) {
			if (typeof arguments[i] === "number") {
				//var sqrt = Math.sqrt(arguments[i]);
				numbers.push(Math.sqrt(arguments[i]));
			} else {
				others.push(arguments[i]);
			}
		}
		return numbers;
		return others;
	};

//checkArray
	exports.checkArray = function(array) {
		for (var i=1; i<arguments.length; i++) {
			if (array.indexOf(arguments[i]) === -1) {
				console.log(arguments[i] + " is not in the array");
			} else {
				console.log(arguments[i] + " is in the array");
			}
		}
	};

//readNotRead
	exports.readNotRead = function() {
		var library = [
			{
				author: "Nathaniel West",
				title: "Miss Lonelyhearts",
				readingStatus: true
			},
			{
				author: "Joan Didion",
				title: "Slouching Towards Bethlehem",
				readingStatus: false
			},
			{
				author: "Renata Adler",
				title: "Speedboat",
				readingStatus: true
			}
		];
		for (var i = 0; i < library.length; i++) {
			if (library[i].readingStatus === true) {
				console.log("You have read " + library[i].title);
			} else {
				console.log("You have not read " + library[i].title);
			}
		}
	};

// ******* PROTOTYPES ********************************

//vehicle
	exports.Vehicle = function(type, line, latitude, longitude, speed, full, id, scheduleStatus) {
		this.type = type;
		this.line = line;
		this.latitude = latitude;
		this.longitude = longitude;
		this.full = full;
		this.id = id;
		this.scheduleStatus = scheduleStatus;
	};

	exports.Vehicle.prototype.reportLocation = function() {
		console.log(this.type + " " + this.line + " " + this.location.city);
		console.log(this.latitude + " " + this.longitude);
	};

	exports.Vehicle.prototype.moveTo = function(newLat, newLon) {
		this.latitude = newLat;
		this.longitude = newLon;
	};

// ******* SUB-MODULES *******************************

//month-names

	(function(exports) {
		var months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		];

		exports.name = function(number) {
			return months[number];
		};
		exports.number = function(name) {
			return months.indexOf(name);
		};



	}(exports.month = {}));
	//console.log(this.month);

	//exports.month = this.month;


}(typeof window === 'undefined' || window === null ? global.treasureChest = {} : window.treasureChest = {}))


// ******* TESTS *************************************

console.log(treasureChest.min(10, 100));
console.log(treasureChest.countChar("MISSISSIPPI", "S"));
console.log(treasureChest.gameBoard(8,8));
console.log(treasureChest.isPrime(97));
console.log(treasureChest.betterRange(0, 100, 10));
console.log(treasureChest.reverseArray([1,2,3,4,5]));
console.log(treasureChest.madArguments("Bill", 4, 76, true));
treasureChest.checkArray([1,2,4], 3);
treasureChest.checkArray([1,2,5], 5);

treasureChest.readNotRead();

var bus4 = new treasureChest.Vehicle("bus", 4, 133, 200, 12, false, 3204, -2);
console.log(bus4.id);

console.log(treasureChest.month.name(2));
console.log(treasureChest.month.number("July"));

