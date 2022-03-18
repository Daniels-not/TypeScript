/**
    Interfaces in TypeScript have two usage scenarios: you can create a contract that classes must follow,
    such as the members that those classes must implement, and you can also represent types in your application,
    just like the normal type declaration.
 */

interface Magician {
    // attributes
    firstName?: string; // optional property (?)
    lastName?: string;
    readonly magicType: string; // readonly property (readonly) - can't be changed
}



// we can create an object that implements the interface Magician and pass it to the function useMagic

let superPowers = {
    firstName: 'Elder',
    lastName: 'Elton',
    magicType: 'Fire ☠',
    magicPower: 1500,
    magicLevel: 'Super 🐱‍🐉',
    pact: 'Fire God 🐉'
}


// use magic with the object superPowers can be used as a magician object

function useMagic(magician: Magician):void {
    if(magician.firstName) {
        console.log(`${magician.firstName} ${magician.lastName} is a magician and uses ${magician.magicType} magic.`);
    }else {
        console.log(`No name is a magician and uses ${magician.magicType} magic.`);
    }
}

console.log(useMagic(superPowers));

