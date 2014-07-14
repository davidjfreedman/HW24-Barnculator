// HOMEWORK for Thursday - Sunday, July 10-13, 2014
//  *
//  * Part 1:
//  *
//  * - Create a Cat, Dog, Horse, and Barn function.
//  * - add two functions each to Cat, Dog, and Horse; one of which should be a speak() function.
//  * - ALL PROTOTYPE FUNCTIONS (i.e. speak()) MUST HAVE AT LEAST 1 ARGUMENT
//  * - I've added a function to Barn that .shelter()'s any animal, and stores that animal in an array on `this`...
//  * - write a function on Barn's prototype (called .rollCall()) that makes all animals speak()
//  *
//  * ! some starter code below

function Cat(name, skill) {
    this.name = name;
    this.skill = skill;
}

Cat.prototype.speak = function() {
    console.log("meow");
}

function Dog(name, skill) {
    this.name = name;
    this.skill = skill;
}

Dog.prototype.speak = function() {
    console.log("arf!")
}

function Horse(name, skill) {
    this.name = name;
    this.skill = skill;
}

Horse.prototype.speak = function() {
    console.log("neigh")
}


//-------------------------------------//
// the Barn
//-------------------------------------//

function Barn() {
    this.shelteredAnimals = new Array();
}

Barn.prototype.rollCall = function() {
    if (this.shelteredAnimals.length == 0) {
        throw new Error("There are no animals, ya dink!");
    } else
        for (var i = 0; i < this.shelteredAnimals.length; i++) {
             this.shelteredAnimals[i].speak();
        }
};


//-------------------------------------//
// pushes animal into the shelter
// of the Barn
//-------------------------------------//

Barn.prototype.shelter = function(animal) {
    this.shelteredAnimals.push(animal);
}

var b = new Barn();
var Fievel = new Cat("Fievel", "purring");
var Ed = new Horse("Mr. Ed", "gluing");
var Ghost = new Dog("Ghost", "fetching");
var Keya = new Cat("KeyaCat", "melting");


b.shelter(Fievel);
b.shelter(Ed);
b.shelter(Ghost);
b.shelter(Keya);



//  * Part 2: create a Calculator class and define / use all the functions
// function sepNum() {
// 	var numbers = [].slice.call(arguments);
// }

//-------------------------------------//
// Calculator version 1.0
//-------------------------------------//


var result = 0;


//-------------------------------------//
// Clears out the calculator memory banks
//-------------------------------------//

function clr() {
    result = 0;
    return result;
}

//-------------------------------------//
// Tests if the input is numeric
//-------------------------------------//

function testIfNumber() {
    var numbers = [].slice.call(arguments[0]);
    for (var i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] !== "number" || Number.isNaN(numbers[i])) {
            throw new Error("Please input a proper number.")
        }
    };
    return numbers;
}

function testIfValue(numbers) {
    if (numbers.length == 0) {
        throw new Error("Please input a value to be used");
    }
}

//-------------------------------------//
// Addition, subtraction, etc.
// ----
// 
// Normally named functions (ie - addition,
// subtraction, etc.) will work with the
// existing result variable, whatever it 
// may be.
// 
// 'n___' will work internally, not using
// any previously existing variables. Their
// outputted result CAN be used by other
// functions, however.
//-------------------------------------//

function addition() {
    var numbers = testIfNumber(arguments);
    testIfValue(numbers);
    for (var i = 0; i < numbers.length; i++) {
        result += numbers[i];
    };
    return result;
}

function nadd() {
    var numbers = testIfNumber(arguments);
    testIfValue(numbers);
    if (numbers.length == 1) {
        result = numbers;
        return result;
    } else if (numbers.length > 1) {
        result = numbers[0];
        for (var i = 1; i < numbers.length; i++) {
            result += numbers[i];
        };
        return result;
    }
}

function subtract() {
    var numbers = testIfNumber(arguments);
    testIfValue(numbers);
    for (var i = 0; i < numbers.length; i++) {
        result -= numbers[i];
    };
    return result;
}

function nsub() {
    var numbers = testIfNumber(arguments);
    testIfValue(numbers);
    if (numbers.length == 1) {
        result = numbers;
        return result;
    } else if (numbers.length > 1) {
        result = numbers[0];
        for (var i = 1; i < numbers.length; i++) {
            result -= numbers[i];
        };
        return result;
    }
}

function multiply() {
    var numbers = testIfNumber(arguments);
    testIfValue(numbers);
    for (var i = 0; i < numbers.length; i++) {
        result *= numbers[i];
    };
    return result;
}

function nmult() {
    var numbers = testIfNumber(arguments);
    testIfValue(numbers);
    if (numbers.length == 1) {
        result = numbers;
        return result;
    } else if (numbers.length > 1) {
        result = numbers[0];
        for (var i = 1; i < numbers.length; i++) {
            result *= numbers[i];
        };
        return result;
    }
}

function divide() {
    var numbers = testIfNumber(arguments);
    testIfValue(numbers);
    for (var i = 0; i < numbers.length; i++) {
        result /= numbers[i];
    };
    return result;
}

function ndiv() {
    var numbers = testIfNumber(arguments);
    testIfValue(numbers);
    if (numbers.length == 1) {
        result = numbers;
        return result;
    } else if (numbers.length > 1) {
        result = numbers[0];
        for (var i = 1; i < numbers.length; i++) {
            result /= numbers[i];
        };
        return result;
    }
}

function square() {
    var numbers = testIfNumber(arguments);
    if (numbers.length == 0) {
        result = Math.pow(result, 2);
        return result;
    } else if (numbers.length == 1) {
        result = Math.pow(numbers[0], 2);
        return result;
    } else if (numbers.length == 2) {
        result = Math.pow(numbers[0], numbers[1]);
        return result;
    } else if (numbers.length > 2) {
        throw new Error("Please use only up to two numbers in this equation")
    }
}

function sqRoot() {
    var numbers = testIfNumber(arguments);
    if (numbers.length == 0) {
        result = Math.sqrt(result);
        return result;
    } else if (numbers.length == 1) {
        result = Math.sqrt(numbers[0]);
        return result;
    }
}


function Calculator() {
	this.result = result;
}

Calculator.prototype.add = addition;
Calculator.prototype.sub = subtract;
Calculator.prototype.mult = multiply;
Calculator.prototype.div = divide;
Calculator.prototype.sqr = square;
Calculator.prototype.sqrt = sqRoot;
Calculator.prototype.nadd = nadd;
Calculator.prototype.nsub = nsub;
Calculator.prototype.nmult = nmult;
Calculator.prototype.ndiv = ndiv;
Calculator.prototype.clr = clr;

var c = new Calculator();


//  * BONUS: rewrite your ColorClock homework with Functions/Prototypes/Single-Responsibility-Principle
