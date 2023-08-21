function sortByName(users) {
    users.sort((a, b) => {
        let nameOne = a.name.toLowerCase();
        let nameTwo = b.name.toLowerCase();
        if (nameOne > nameTwo) return 1;
        if (nameOne == nameTwo) return 0;
        if (nameOne < nameTwo) return -1;
    });
    return users;
};

let john = { name: 'John', age: 25 };
let adam = { name: 'Adam', age: 30 };
let mary = { name: 'Mary', age: 28};
let barry = { name: 'Barry', age: 23};
let arr = [john, adam, mary, barry];
console.log(sortByName(arr));