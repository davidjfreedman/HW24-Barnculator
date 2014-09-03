HW24-Barnculator
================

Create a Barn and a Calculator

#### Currently console-based only

**Project**: Create to be used in the console:
* a calculator which can add, subtrac, multiply, and divide.
* a barn which can house animals, and a rollcall function which will have them sound off.

Description: The goal of this project was to become more familiar with Prototypes. 
For the barn, each thing in the app has its own Prototype functions: the barn can call roll on the animals, the animals can sound off, etc.

**Barn functions**:  
  1. `var animalname = new Animal("name", "animalnoise"); // adds a new animal`
    * `//animals available are Horse, Cat, and Dog (animal name must be capitalized); other inputs are user-deriven.`
    * example: `var Ghost = new Dog("Ghost", "howling");`
  2. `animalname.speak(); // causes the animal to speak`
    * example: `Ghost.speak(); // --> "Arf!"`
  3. `var barnname = new barn(); // adds a new barn`
    * example: `var b = new Barn();`
  4. `barnname.shelter(name); // adds that animal to the shelter of the barn`
    * example: `b.shelter(Ghost); //adds Ghost to the 'b' barn`
  5. `barnname.rollCall(); // calls roll on any animals in that barn`
    * example: `b.rollCall(); --> "Arf!"`

For the calculator, the mathematical operations are Prototype functions which utilize the inputs in corresponding ways.

**Calculator functions:**
  1. `var name = new Calculator(); // creates a new calculator`
    * example: `c = new Calculator();`
  2. add: `name.add(number(s))`, subtract: `name.sub(number(s))`, multiply: `name.mult(number(s))`, divide: `name.div(number(s))`
    * Performs the operation on the input number(s).
    * Each accepts individual or multiple numbers.
    * Builds off of previous equations (i.e. - add(4,6) will add 10 to whatever number is in the memory from previous equations).
    * example: `console.log( (c.add(4,5)), ", ", (c.add(6,5)) ); // --> '9, 20'`
  3. `name.clr; // clears out the memory`
  4. new add: `name.nadd(number(s))`, new subtract: `name.nsub(number(s))`, new multiply: `name.nmult(number(s))`, new divide: `name.ndiv(number(s))`
    * Each equation starts from 0.
    * Performs the operation on the input number(s) WITHOUT taking into account any outside equations.
    * Each accepts individual or multiple numbers.
    * example: `console.log( (c.nadd(4,5)), ", ", (c.nadd(6,5)) ); // --> '9, 11'`
  5. square: `name.sqr(number(s))`,
    * Performs the operation on the input number(s).
    * If no number is input, it will utilize whatever number is in memory.
    * If a single number is input, the number will be squared
    * If two numbers are input, it will give the first number to the power of the second number.
    * More than two numbers will throw an appropriate error.
    * example: `console.log( (c.sqr(4)), ", ", (c.sqr(4,4)) ) // --> "4, 256"`
  6. square root: `name.sqrt(number)`
    * Performs the operation on the input number(s).
    * If no number is input, it will utilize whatever number is in memory.
    * Known error: Currently only accepts single numbers, will give 'undefined for multiple inputs. This will be fixed in the next update.
    * example: `console.log( (c.sqrt(16)), ", ", (c.sqrt()) ) // --> "4, 2"`


I decided to go further with the calculator concept, adding square and square root operations and differentiating between single-use calculations and those that build off of one another.

**Why?:** Aside from the stated intent of getting to know prototypes, it was fun to create something as useful and functional as a calculator, and see the work that goes into creating such an application.

**Future Updates:** The calculator will be given a skeumorphic DOM counterpart to make user interaction easier.
