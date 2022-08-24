// Breakup with var
//No more use of var
//let: let it to reassign
//const: do not allow it to reassign
//let and const are block scope

let money = 100;
money= 50;
console.log(money);

const bird = 'jaan pakhi'
// bird = 'moyna pakhi'
console.log(bird);

const numbers = [10, 20, 30];
// numbers = [40, 50];
numbers.push(40, 50)
console.log(numbers);