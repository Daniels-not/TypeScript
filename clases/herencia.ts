class human {
    name: string;
    age: number;
    skinColor: string;

    constructor(_name: string, _age: number, _skinColor: string) {
        this.name = _name;
        this.age = _age;
        this.skinColor = _skinColor;
    }

    walk(): void {
        console.log('The human is walking');
    }

    talk(): void {
        console.log('The human is talking');
    }

    printData(): void {
        console.log('---------------------');
        console.log('Human information 👨');
        console.log('---------------------');
        console.log('Name: ' + this.name);
        console.log('Age: ' + this.age);
    }
}

class magician extends human {
    magic: string;
    powerLevel: number;
    attribute: string;

    constructor(_name: string, _age: number, _skinColor: string, _magic: string, _powerLevel: number, _attribute: string) {
        super(_name, _age, _skinColor);
        this.magic = _magic;
        this.powerLevel = _powerLevel;
        this.attribute = _attribute;
    }

    printData(): void {
        super.printData();
        console.log('---------------------');
        console.log('Magician information 👨');
        console.log('---------------------');
        console.log('Magic: ' + this.magic);
        console.log('Power Level: ' + this.powerLevel);
        console.log('Attribute: ' + this.attribute);
    }
}

const darkSoul = new magician('Dark Soul', 30, 'Black', 'Fire', 100, 'Strength');

// modifier method are the same as the normal methods in java or c#