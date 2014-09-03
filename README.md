HW24-Barnculator
================

Create a Barn and a Calculator

Project: Create to be used in the console:
* a calculator which can add, subtrac, multiply, and divide.
* a barn which can house animals, and a rollcall function which will have them sound off.

Description: The goal of this project was to become more familiar with Prototypes. 
For the barn, each thing in the app has its own Prototype functions: the barn can call roll on the animals, the animals can sound off, etc.

*Barn functions:  
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


I decided to go further with the calculator concept, adding square and square root operations and differentiating between single-use calculations and those that build off of one another.

Why?: Aside from the stated intent of getting to know prototypes, it was fun to create something as useful and functional as a calculator, and see the work that goes into creating such an application.

Future Updates: The calculator will be given a skeumorphic DOM counterpart to make user interaction easier.
