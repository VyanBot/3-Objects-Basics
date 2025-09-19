/*
let user = {}; // user without the property "address"

alert(user.address.street); // ERROR!

// document.querySelector(`.elem`) equals to null, if there's no element
let html = document.querySelector(`.elem`).innerHTML; //ERROR, if it equals to null


// ideally we don't want to get an error, instead we would rather get html = null
let user = {};

alert(user.address ? user.address.street : undefined); // doesn't look nice, since user.address appears twice

let html = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : null;


// let's look at user.address.street.name
let user = {}; // user doesn't have an address

alert(user.address ? user.address.street ? user.address.street.name : null : null); // ew

// we can write this a little better with &&

alert( user.address && user.address.street && user.address.street.name ); // undefined (no error)

 // all of that still looks messy, because we're repeating a lot of similar code in a row
 // this is why ?. was created. value?.prop works the same as value.prop if value exists
 // otherwise when value is undefined or null, it returns undefined


// here's a safe way to receive user.address.street using ?.:
let user = {}; // user without address

alert( user?.address?.street ); // undefined (no error)

// an example with document.querySelector

let html = document.querySelector(`.elem`)?.innerHTML; // will be undefined if there's no element


// it also works even if user doesn't exist

let user = null;

alert( user?.address ); // undefined
alert( user?.address.street ); // undefined

// if there's no user announces at all user?.anything will lead to an error
user?.address; // ReferenceError: user is not defined


let user = null;
let x = 0;

user?.sayHi(x++); // no "user", therefore execution does not reach the call to sayHi and x++

alert(x); //0, the value didn't increase
*/

let userAdmin = {
    admin() {
        alert(`I'm admin`);
    }
};

let userGuest = {};

userAdmin.admin?.(); // I'm admin

userGuest.admin?.(); // nothing will happen, since there's no such method

let key = "firstName";

let user1 = {
    firstName: "John"
};

let user2 = null;

alert( user1?.[key] ); // John
alert( user2?.[key] ); // undefined

delete user?.name; // deleted user.name if user exists

// we can use ?. for safe reading and deleting, but not for definition

let user = null;

user?.name = "John"; // Error, doesn't work
// the same thing as writing undefined = "John"
