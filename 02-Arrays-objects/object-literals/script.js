let x;

const person = {
    name: 'John',
    age: 34,
    isAdmin: true,
    address: {
        street: 'Main St',
        city: 'Boston',
        state: 'MA'
    },
    hobbies: ['music', 'movies', 'sports'],
};

x = person.name;
x = person['age'];
x = person.address.city;
x = person.hobbies[1];
person.isAdmin = false;

delete person.age;

person.hasChilren = true;
person.greet = function () {
    console.log(`hello my name is ${this.name}`);
}

person.greet();

const person2 = {
    'first name': 'Andreas',
    'last name': 'Njord',
}

x = person2[`first name`];


console.log(x);