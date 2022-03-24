// calculate your born date based on your age


interface Person {
    _name: string;
    _age: number;
}


class person implements Person {

    // dummy method to show the interface

    _name = "";
    _age = 0;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    // setters

    setAge(_age: number): void {
        this._age = _age + 1;
    }

    setName(_name: string): void {
        this._name = _name;
    }

    calculateBornDate(): void {
        console.log(`${this._name} was born in ${new Date().getFullYear() - this._age}`);
    }
}


const pesona5 = new person("Juan", 25);
pesona5.setName("Juan");
pesona5.setAge(19);
pesona5.calculateBornDate(); // 2022 - 25 = 1996
console.log(pesona5);
