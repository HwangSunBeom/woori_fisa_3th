// const fruits = ['apple', 'banana', 'cherry'];
// const others = ['melon', 'orange', 'kiwi', ...fruits];
// const allFruits = fruits.concat(others);
// const allFruits2 = [...fruits, ...others];
// console.log(others); // ['melon', 'orange', 'kiwi', 'apple', 'banana', 'cherry']
// console.log(allFruits); // ['apple', 'banana', 'cherry', 'melon', 'orange', 'kiwi', 'apple', 'banana', 'cherry']
// console.log(allFruits2); // apple,banana,cherrymelon,orange,kiwi,apple,banana,cherry


const users = [
    { id: 1, name: 'Lee' },
    { id: 2, name: 'Kim' },
    { id: 3, name: 'Choi' }
];
const newUser = { id: 4, name: 'Park' };

const allUsers = [...users, newUser];
console.log(allUsers); // [ { id: 1, name: 'Lee' }, { id: 2, name: 'Kim' }, { id: 3, name: 'Choi' }, { id: 4, name: 'Park' } ]

allUsers.push(newUser);
users.pop()
users.pop()

console.log(users); // [ { id: 1, name: 'Lee' }, { id: 2, name: 'Kim' }, { id: 3, name: 'Choi' } ]  
console.log(allUsers); // [ { id: 1, name: 'Lee' }, { id: 2, name: 'Kim' }, { id: 3, name: 'Choi' }, { id: 4, name: 'Park' } ]