// make the first letter of a string uppercase

const myString = 'developer';

let myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

// console.log(myNewString);

x = Math.sqrt(9);

x = Math.abs(-5);
x = Math.round(5.5);
x = Math.ceil(5.1);
x = Math.floor(6.9);
x = Math.pow(2, 5);
x = Math.min(4, 5, 3, 1);
x = Math.max(4, 5, 3, 1);
x = Math.floor(Math.random() * 10 + 1);

x = Math.floor(Math.random() * 100 + 1);
y = Math.floor(Math.random() * 50 + 1);

sumOutPut = x + y;
differenceOutPut = x - y;
productOutPut = x * y;
quotientOutPut = x / y;
rmOutPut = x % y;
rmOutPutNew = `${x} % ${y} = ${rmOutPut}`;

/* console.log(x);
console.log(y); */
/*
console.log(sumOutPut);
console.log(differenceOutPut); 
console.log(productOutPut); 
console.log(quotientOutPut); */
/* console.log(rmOutPutNew); */

d = new Date();
d = d.toString();

d = new Date(2021, 6, 10, 12, 30, 0);
d = new Date('2021-07-10 12:31:00');
d = d.getTime();

d = Math.floor(Date.now() / 1000);
console.log(d);
