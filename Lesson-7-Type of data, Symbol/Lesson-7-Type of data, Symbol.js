/*
// let's create a new symbol - id
let id = Symbol();


// let's create symbol - id, with description (name) "id"
let id = Symbol("id");

// we can create multiple symbols with the same description, it will still be different symbols

let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false


let id = Symbol("id");
alert(id); // TypeError: Cannot convert a Symbol value to a string

// so what we have to do is:

let id = Symbol("id");
alert(id.toString()); // Symbol(id), now works


// we can also use symbol.description, to display just the description

let id = Symbol("id");
alert(id.description); // id


let user = {
    name: "John"
};

let id = Symbol("id");

user[id] = 1;

alert( user[id] ); // we can gain access to the data with the key-symbol

// symbols in a literal object

let id = Symbol("id");

let user = {
    name: "John",
    [id]: 123 // just "id: 123" wouldn't work, since we have to use id as a key rather than a string
};


// Object.assign unlike a loop for..in is copying both string and symbol properties:

let id = Symbol("id");
let user = {
    [id]: 123
};

let clone = Object.assign({}, user);

alert( clone[id] ); //123
*/

// We read a symbol from the global registry and write it to a variable. ( Symbol.for(key) )
let id = Symbol.for("id"); // if the symbol doesn't exist, it will be created

// we read it again and write it to a different variable (maybe from a different part of code)
let idAgain = Symbol.for("id");

// checking -- it's the same symbol
alert( id === idAgain ); // true

// let's receive symbol by its name

let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// now let's receive a name by symbol ( Symbol.keyfor(sym) ) --> only works for global symbols
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id

// but there's property "description" available for all symbols
let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert( Symbol.keyFor(globalSymbol) ); // name, global symbol
alert( Symbol.keyFor(localSymbol) ); // undefined for a not global symbol

alert( localSymbol.description ); // name for a not global symbol
