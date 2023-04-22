const person = {
    address: {
        coords: {
            lat: 42.36,
            lng: -71.05
        }
    }
}

x = person.address.coords.lat;

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

const obj3 = {...obj1, obj2};

const obj4 = Object.assign({}, obj3);

const todos = [
    { id: 1, name: 'Buy milk'},
    { id: 2, name: 'Gå med njord'},
    { id: 3, name: 'Ud med skrald'},
]

x = todos[0];
console.log(x);