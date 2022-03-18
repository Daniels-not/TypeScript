// function 1

function sumTwoNumbers(a:number, b:number):number {
    return a + b;
}

const result = sumTwoNumbers(1, 2);
console.log(result);


// function with optional parameters

function sumTwoNumbers2(a:number, b:number, c?:number):number {
    if(c) {
        return a + b + c;
    } else {
        return a + b;
    }
}

console.log(sumTwoNumbers2(1, 2));


// function with default parameters


function sumTwoNumbers3(a:number, b:number, c:number = 0):number {
    return a + b + c;
}

console.log(sumTwoNumbers3(1, 2));


// function with rest parameters

function sumAllNumbers(...numbers:number[]):number{
    return numbers.reduce((a,b) => a + b);
}

console.log(sumAllNumbers(1, 2, 3, 4, 5, 10, 10, 60));