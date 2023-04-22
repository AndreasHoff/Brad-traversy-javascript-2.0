const todo = {
    id: 1,
    title: 'ud med det skrald',
    user: {
        name: 'Njord',
        age: 2
    }
};

const { id: todoId, title, user: {name} } = todo;

console.log(todoId);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const [first, second, ...rest] = numbers

console.log(first, second, rest);