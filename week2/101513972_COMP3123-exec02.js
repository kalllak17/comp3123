//   #  |  Full Name	        | ID
//   ---|-----------------------|---------
//   1  |  Arkadii Akopian	    | 101513972

//Ex1
function greeter(myArray) {
    let greetText = 'Hello';
    for (const greetTextElement of myArray) {
        console.log(greetText + ' ' + greetTextElement);
    }
}

//Ex2
function capitalizeFirstLetter(string) {
    if (!string) return '';
    const [firstLetter, ...lastLetter] = string;
    return firstLetter.toUpperCase() + lastLetter.join('').toLowerCase();
}

//Ex3
function capitalizedColors(arr) {
    if (arr.length === 0) return [];
    return arr.map(capitalizeFirstLetter);
}

//Ex4
function filterLessThan20(arr) {
    if (arr.length === 0) return [];
    return arr.filter(elem => elem < 20)
}

//Ex5
function calculateSum(arr) {
    if (arr.length === 0) return 0;
    return arr.reduce((total, curVal) => total + curVal, 0);
}

function calculateProd(arr) {
    if (arr.length === 0) return 0;
    return arr.reduce((total, curVal) => total * curVal, 1);
}

//Ex6
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details() {
        return `Model: ${this.model}, Year - ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }

    info() {
        return `${this.model} has a balance of ${this.balance}`;
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////

//Ex1
console.log('Ex1');
greeter(['Randy Savage', 'Rick Flair', 'Hulk Hogan'], 3);
//Ex2
console.log('Ex2');
console.log('fooBar - ' + capitalizeFirstLetter('fooBar'));
console.log('nodeJs - ' + capitalizeFirstLetter('nodeJs'));
//Ex3
console.log('Ex3');
console.log(['red', 'green', 'blue'] + ' = ' + capitalizedColors(['red', 'green', 'blue']));
//Ex4
console.log('Ex4');
console.log(filterLessThan20([1, 60, 34, 30, 20, 5]));
//Ex5
console.log('Ex5');
console.log('Sum of [1, 2, 3, 4] = ' + calculateSum([1, 2, 3, 4]));
console.log('Product of [1, 2, 3, 4] = ' + calculateProd([1, 2, 3, 4]));
//Ex6
console.log('Ex6');
const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());
const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());