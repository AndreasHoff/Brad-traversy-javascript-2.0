function sayHello() {
    console.log("Hello!");
}

sayHello();

function add(num1, num2) {
    console.log(num1 + num2);
}

add(5, 10);

function subtract(num1, num2) {
    return num1 - num2;

    console.log("This will never run");
}

const result = subtract(10, 2);

console.log(result, subtract(22, 7));