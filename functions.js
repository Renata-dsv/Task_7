function findSum(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

function subtractNumbers(a, b) {
    return a - b;
}

function multiplyNumbers(a, b) {
    return a * b;
}

function divideNumbers(a, b) {
    if (b === 0) {
        return 'Error: Division by zero';
    }
    return a / b;
}

let numbersArray = [8, 4, 2];

let sum = findSum(numbersArray);
console.log(`Sum of the array: ${sum}`); 

let difference = subtractNumbers(numbersArray[0], numbersArray[1]);
console.log(`Difference between the first and second number: ${difference}`); // Output: Difference between the first and second number: 4

let product = multiplyNumbers(numbersArray[2], numbersArray[0]);
console.log(`Product of the third and first number: ${product}`); // Output: Product of the third and first number: 16

let quotient = divideNumbers(sum, numbersArray[2]);
console.log(`Quotient of the sum and the third number: ${quotient}`); // Output: Quotient of the sum and the third number: 7