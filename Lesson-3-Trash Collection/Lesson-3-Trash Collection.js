// in user there is a link to the object
let user = {
    name: "John"
};

user = null; // now name: "John" is unreachable, there's not access or links to it.
             // Trash collector will delete this data and empty out the memory.

let admin = user; // let's copy the link from user to admin

user = null; // now if we do the same, the object John is still reachable through admin

function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
}

let family = marry({
    name: "John"
}, {
    name: "Ann"
});

// now let's delete two links, by doing this we removed all of the incoming links to the object...
// ...which makes John an unreachable object and it will be deleted from memory with all its data
delete family.father
delete family.mother.husband

family = null; // this detaches all of the links from the root and makes both objects unreachable
