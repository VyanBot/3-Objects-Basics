/*
// Object of a user
let user = {
    name: "John",
    age: 30
};

user.sayHi = function() { // function that is one of the properties of an object is called...
                          // ... object method (so we created method "sayHi" of an object "user")
    alert("Hi!");
};

user.sayHi(); // Hi! 


// we can also announce a function and then add it as a method to our object

let user = {
    //...
};

// first we announce it
function sayHi() {
    alert("Hi!");
}

// then we add it as a method
user.sayHi = sayHi;

user.sayHi(); // Hi!


// there's a shorter version of how to write methods

user = {
    sayHi: function() {
        alert("Hi");
    }
};

// shorter version looks better doesn't it?
user = {
    sayHi(){
        alert("Hi");
    }
};

let user = {
    name: "John",
    age: 30,

    sayHi(){
        // "this" is referring to the current object
        alert(this.name);
    }
};

user.sayHi(); // John


let user = {
    name: "John",
    age: 30,

    sayHi(){
        alert(user.name); // we can also not use "this", but the external variable
    }
};

user.sayHi(); // John


// but it's not always a good option, since it can lead to errors

let user = {
    name: "John",
    age: 30,

    sayHi(){
        alert(user.name); // will lead to an error
    }
};

let admin = user;
user = null; // let's rewrite the variable for clarity...
             //... now it does not store a reference to the object.

user.sayHi(); // TypeError: Cannot read property "name" of null
// if we would use this.name there would be no error
*/

function sayHi() {
    alert( this.name );
}

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi(){
    alert( this.name );
}

// using the same function in two objects
user.f = sayHi
admin.f = sayHi

// these callouts will have different value of this
// "this" inside of the function is an object "in front of the dot"
user.f(); // John (this == user)
admin.f(); // Admin (this == admin)

admin["f"](); // Admin (there's no difference between using [] and . to access the object)

// we can also callout a function without an object
function sayHi() {
    alert(this);
}

sayHi(); // undefined

// let's look at arrow functions and "this"

let user = {
    firstName: "John",
    sayHi(){
        let arrow = () => alert(this.firstName);
        arrow();
    }
};

user.sayHi(); // John

let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt("a?", 0);
        this.b = +prompt("b?", 0);
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

