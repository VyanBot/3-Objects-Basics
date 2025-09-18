/*
let message = "Hello!";
let phrase = message;

let user = {
    name: "John"
};


let user = { name : "John" };

let admin = user; // copying the link

admin.name = "Pete"; //changed following the link from the variable "admin"

alert(user.name); // "Pete", changes are seen following the link from the variable "user"


let a = {};
let b = a; // copying the link

alert ( a == b); // true, since both variables are linked to the same object
alert ( a === b); // true


// but in this case it's different

let a = {};
let b = {}; // two independent objects

alert ( a == b); // false

let user = {
    name: "John",
    age: 30
};

let clone = {}; // new empty object (our clone)

// let's copy all properties of user into this
for (let key in user) {
    clone[key] = user[key];
}

// now clone is a fully independent object with the same contents

clone.name = "Pete"; // let's change some data in it

alert( user.name ); // still "John" in the initial object


let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// let's copy all of the properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }


let user = { name: "John" };

Object.assign(user, { name: "Pete" });

alert(user.name); // now user = { name: "Pete" }

let user = {
    name: "John",
    age: 30
};

let clone = Object.assign({}, user);


let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

alert( user.sizes.height ); //182


let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true, the same object

// user and clone have the same property sizes
user.sizes.width++; // changing the property in the first object
alert(clone.sizes.width); //51, seeing the result in another
*/

const user = {
    name: "John"
};

user.name = "Pete"; 

alert(user.name); // Pete
