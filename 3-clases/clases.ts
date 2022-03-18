class vehicles {

    brand: string;
    model: string;
    year: number;
    color: string;
    price: number;

    constructor(_brand:string, _model:string, _year:number, _color:string, _price:number) {
        this.brand = _brand;
        this.model = _model;
        this.year = _year;
        this.color = _color;
        this.price = _price;
    }

    speedUp():void {
        console.log('The vehicle is speeding up');
    }

    speedDown():void {
        console.log('The vehicle is slowing down');
    }

    printData():void {
        console.log('---------------------');
        console.log('Car information');
        console.log('---------------------');
        console.log('Brand: ' + this.brand);
        console.log('Model: ' + this.model);
        console.log('Year: ' + this.year);
        console.log('Color: ' + this.color);
        console.log('Price: ' + this.price);
        console.log('---------------------');
    }

}

const car = new vehicles('Toyota', 'Corolla', 2019, 'White', 15000);
car.printData();
car.speedUp();
car.speedDown();
