const dog = {
    age : 2,
};

console.log(dog);
console.log(dog.age);

const dog2 = {
    age: 2,
    name: 'toto',
    walk: ()=>{
        console.log('dog is walking');
    },
    address: {
        si: 'seoul',
        gu: 'gangnam',
        dong: 'sangam',
    }
}

console.log(dog2.address.dong)