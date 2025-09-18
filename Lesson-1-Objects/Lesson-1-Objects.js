/*
let user = new Object(); // syntax `object constructor`
let user = {}; //syntax `literal of an object`


let user = { // Object
    name: `John`, // key `name`, stores value `John`
    age: 30 // key `age`, stores value 30
};

// to receive object properties we use `object.key`
alert( user.name ); // John
alert( user.age ); // 30

user.isAdmin = true; // value can be of any type, we just added a property with a logical meaning

delete user.age; // we delete properties using `delete object.key`


let user = {
    name: `John`,
    age: 30,
    "Likes birds": true // name of a property with multiple words must be in quotes
};



let user = {
    name: `John`,
    age: 30, // here the last property has `,` at the end, which is called hanging coma
}


const user = {
    name: `John`
};

user.name = `Pete`; // here const only protects the property of user, but we can change the...
                    // ...inside of the object

alert(user.name);

user.likes birds = true //this will cause an error, because for properties consisting of...
                        //... multiple names cannot be accessed with `.`

let user = {};

// assigning a value to the property
user["likes birds"] = true;

// receiving the value of the property
alert(user["likes birds"]); // true

// removal of the property
delete user["likes birds"];

let key = "likes birds";

user[key] = true; //the same thing as user["likes birds"] = true



let user = {
    name: `John`,
    age: 30
};

let key = prompt(`What do you want to know about the user?`, `name`);

//access to the property through the variable
alert( user[key] ); // John (if `name` was entered)



let user = {
    name: `John`,
    age: 30
};

let key = `name`;
alert( user.key ); // undefined because The dot notation does not allow this


let fruit = prompt(`which fruit will you buy?`, `apple`);

let bag = {
    [fruit]: 5 // the name of the property is going to be taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit = `apple`

// works the same as
let fruit = prompt(`Which fruit will you buy?`, `apple`);

let bag = {};

// the name of the property s take from the variable fruit
bag[fruit] = 5;

let fruit = `apple`;
let bag = {
    [fruit + `Computers`]: 5 // bag.appleComputers = 5
};


function makeUser(name, age) {
    return {
        name: name,
        age: age
        // ...other properties
    };
}

let user = makeUser(`John`, 30);
alert(user.name); // John

function makeUser(name, age) {
    return {
        name, // the same as name: name,
        age   // the same as age: age
        // ...other properties
    };
}


let user = { // here we're using both normal property type and the short version in the same object
    name,
    age: 30
};

// these property names are allowed
let obj = {
    for: 1,
    let: 2,
    return: 3
};

alert( obj.for + obj.let + obj.return ); //6


let obj = {
    0: "Test" // the same as "0": "Test"
};

// both functions alert will display the same property
alert( obj["0"]); // Test
alert( obj[0]); // Test


let obj = {};
obj.__proto__ = 5; //let's assign a number
alert (obj.__proto__); // [object Object], the value is an object, i.e. not what we expected


let user = {};

alert( user.noSuchProperty === undefined ); // true means `no such property`

// "key" in object also let's you check if the property exists


let user = {name: "John", age: 30};

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); //false, user.blabla doesn't exist


let user = { age: 30 };

let key = "age";
alert( key in user ); // true, the name of the property was taken from the variable key

// so why do we not just use the comparison with undefined instead of "in"?

let obj = {
    test: undefined
};

alert( obj.test ); // will display undefined, meaning the property doesn't exist?
alert( "test" in obj ); // true, the property exists!


for (key in object) {
    // the loop body is executed for each property of the object
}

let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user) { // "for (let prop in obj)" is often used as another name for a variable
    // keys
    alert( key ); // name, age, isAdmin
    // values of keys
    alert( user[key] ); // John, 30, true
}


let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "United Kingdom",
    // ...,
    "1": "United States"
};

for (let code in codes) {
    alert(code); //1, 41, 44, 49 Area codes are listed in ascending order..
                 //... because they are whole numbers.
}

// "integer property" means a string that can be converted to an integer and back without change.

// Math.trunc - built-in function, which deletes the decimal part
alert( String(Math.trunc(Number("49"))) ); // returns 49, since integer property
alert( String(Math.trunc(Number("+49"))) ); // returns 49, since not an integer property
alert( String(Math.trunc(Number("1.2"))) ); // returns 1, since not an integer property

let user = {
    name: "John",
    surname: "Smith"
};
user.age = 25; // let's add another property

// not integer properties are listed in the order of creation
for (let prop in user) {
    alert( prop ); //name, surname, age
}

// so now to fix our problem with the phone codes where we want a specific country code...
// ... to be on top, we can just add "+" before each one
let codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "United Kingdom",
    // ...,
    "+1": "United States"
};

for (let code in codes) {
    alert(code); // 49, 41, 44, 1
}
*/

let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

alert(sum);

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == "number") {
            obj[key] *= 2
        }
    }
}
