// any type - can be anything - can be a string, number, boolean, etc. - can be null or undefined - can be an array, object, etc.
// when we use any type, we can assign any type to a variable, and we can assign any type to a function parameter.

let magicianName:any = 'Elder';

console.log(magicianName);


// we can assign any type to a variable, and we can assign any type to a function parameter.

function magician(name:any):void {
    console.log(name);
}

console.log(magician('Elder'));

const magicianInformation: any = {
    firstName: 'Elder',
    lastName: 'Elton',
    magicType: 'Fire ☠',
    magicPower: 1500,
    magicLevel: 'Super 🐱‍🐉',
    pact: 'Fire God 🐉'
}

// if you want to use the generic type <T>, you must pass the type T to the function useMagic

function useMagic<T>(magician: T):T {
    console.log(magician);
}

console.table(useMagic(magicianInformation));

// generic classes


class magician<T> {
    name: T;
    magicType: T;
    magicPower: T;
    magicLevel: T;
    pact: T;

    constructor(name: T, magicType: T, magicPower: T, magicLevel: T, pact: T) {
        this.name = name;
        this.magicType = magicType;
        this.magicPower = magicPower;
        this.magicLevel = magicLevel;
        this.pact = pact;
    }
}

let elder = new magician<string>('Elder', 'Fire', 1500, 'Super', 'Fire God');

console.table(elder);