// //Function Declaration
// function add(first, second = 10){
//     const total = first + second;
//     return total
// }



// //Function Expression
// const add1 = function add1 (first, second){
//     const total = first + second;
//     return total;
// }
// //Function Expression
// const add1 = function add1 (first, second){
//     const total = first + second;
//     return total;
// }
// //Function Expression
// const add1 = function add1 (first, second = 10){
//     const total = first + second;
//     return total;
// }

//Function Expression with aninymous function
const add2 = function (first, second = 10){
    const total = first + second;
    return total;
}

function add(first, second){
    const total = first + second;
    return total;
}

function add4(first, second){
    return first + second;
}

// Arrow Function
const add5 = (first, second) => first + second;

const num = add5(40, 30);
console.log(num);