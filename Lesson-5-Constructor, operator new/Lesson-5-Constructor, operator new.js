/*
function User(name) { //function has to start with the uppercase letter, so it would be clear that function has to be called out by "new"
    this.name = name;
    this.isAdmin = false;
}

let user = new User( "Jack" );

alert(user.name); // Jack
alert(user.isAdmin); // false

function User(name) {
    // this = {};

    // adding properties to this
    this.name = name;
    this.isAdmin = false;

    // return this;
}

// therefore let user = new User("Jack") returns the same result as:
let user = {
    name: "Jack",
    isAdmin: false
}


// let's create a function and instantly call it out with new
let user = new function() {
    this.name = "John";
    this.isAdmin = false;

    //... any other code to create a user
    // there can be any complicated logic and instructions
    // local variables, etc.
}


// to check if the function is called out with new or not we can use this type of syntax

function User() {
    alert(new.target);
}

// without new:
User(); //undefined

// with new:
new User(); // function User {...}

// we can also make it that new and no new callouts would do the same thing

function User(name) {
    if (!new.target) { // in case you called me out without new operator...
        return new User(name); //... I will add new for you
    }

    this.name = name;
}

let john = User("John"); // redirect the callout to new User
alert(john.name); // John

// here return is replacing this, returning the object

function BigUser() {

    this.name = "John";

    return { name: "Godzilla" }; // returns this object
}

alert( new BigUser().name ); // Godzilla, received this object

// here's an example with an empty return

function SmallUser() {

    this.name = "John";

    return; // returns "this"
}

alert( new SmallUser().name ); // John
*/

// we can add not only properties to "this", but methods too

function User(name) {
    this.name = name;

    this.sayHi = function() {
        alert( "My name is: " + this.name);
    };
}

let john = new User("John");

john.sayHi(); // My name is: John

/* 
john = {
    name: "John",
    sayHi: function() { ... }
}
*/

// let's create a "new" calculator

function Calculator() {

    this.read = function() {
        this.a = +prompt("a?", 0);
        this.b = +prompt("b?", 0);
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

// now let's create a "new" accumulator

function Accumulator() {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt(`How much do we need to add?`, 0);
    };

}

let accumulator = new Accumulator(1); //initial value of 1
accumulator.read(); // adding the value that user entered to the current value
accumulator.read(); // adding the value that user entered to the current value

alert(accumulator.value); // will display the sum of those values
