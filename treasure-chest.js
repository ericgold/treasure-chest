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
//isEven
//countChar
//assignGrade
//line (make into function with argument?)
//string (make into function with argument?)
//board
	exports.gameBoard = function(horizontal, vertical) {
		var sizeX = horizontal;
		var sizeY = vertical;
		var board = "";

		for (var y = 0; y < sizeY; y++) {
			for (var x = 0; x < sizeX; x++) {
				if ((x+y) % 2 == 0)
					board += " ";
				else
					board += "#";
		}
		board += "\n";
	}

	
//isPrime
//betterRange
//reverseArray 
//madArguments
//compare
//readNotRead
//Person
//repeatify
//Vector
//month-names

// ******* PROTOTYPES ********************************


// ******* SUB-MODULES *******************************


}(typeof window === 'undefined' || window === null ? global.treasureChest = {} : window.treasureChest = {})

console.log(treasureChest.gameBoard(8,8));


