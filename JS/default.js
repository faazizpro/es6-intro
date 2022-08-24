// function add(first, second){
//     console.log(first, second);
//     second = second || 0;
//     // if(second === undefined){
//     //     second = 0;
//     // }
//     const total = first + second;
//     return total;
// }

function add(first, second = 10){
    const total = first + second;
    return total
}

const result = add(40, 50);
// console.log(result);

function fullName(first, last = 'abdul aziz'){
    const name = first + ' '+ last;
    return name;
}

const myName = fullName('fahad')
console.log(myName);

// function argument মানে যেগুলো আমি পাঠাবো। আর parameter মানে হলো যেগুলো আমি ডিক্লেয়ার করবো।