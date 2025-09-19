/*
// outcome
alert(obj);

// using the object as a key
anotherObj[obj] = 123;

// explicit conversion
let num = Number(obj);

// mathematical (not counting a binary plus)
let n = +obj; // unary plus
let delta = date1 - date2;

// comparison of bigger/smaller
let greater = user1 > user2;

// binary plus is using a hint "default"
let total = obj1 + obj2;

// obj == number is using a hint "default"
if (user == 1 )  {};

obj[Symbol.toPrimitive] = function(hint) {
    // here's the code to convert this object into a primitive
    // it has to return a primitive value
    // hint = something from "string", "number", "default"
};

let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        alert(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money; 
    }
};

// demonstrating results of the conversions
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500

// toString/valueOf

let user = {name: "John"};

alert(user); // [object Object]
alert(user.valueOf() === user); // true


let user = {
    name: "John",
    money: 1000,

    // for hint that equals to "string"
    toString() {
        return `{name: "${this.name}"}`;
    },

    // for hint that equals to "number" or "default"
    valueOf() {
        return this.money;
    }

};

alert(user); // toString -> {name: "John"}
alert(+user); //  valueOf -> 1000
alert(user + 500); // valueOf -> 1500


// when we need one universal place to process all primitive conversions
let user = {
    name: "John",

    toString() {
        return this.name;
    }
};

alert(user); // toString -> John
alert(user + 500); // toString -> John500

// further conversions
let obj = {
    // toString processes all conversions in a case when other methods aren't there
    toString() {
        return "2";
    }
};

alert(obj * 2); // 4, an object has been converted to a primitive string "2", then multiplication converted it into a number
*/

let obj = {
    toString() {
        return "2";
    }
};

alert(obj + 2); // "22" ( "2" + 2), conversion to primitive returned string => concatenation
