const fish = {
    name: 'King Hilsha',
    address: 'Chandpur',
    color: 'silver',
    phone: '01821177189',
    price: 4000
}

// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;

// const {age, name} = {name: 'Fahad Abdul Aziz', age: 22, profession: 'Digital Marketer'}
// console.log(age);

const {phone} = fish;
// console.log(phone);

//Array Destructuring
const [fishes, another] = [44, 99];
console.log(fishes, another);

function getNames(){
    return ['Alim', 'Halim'];
}

const [baba, chacha] = getNames();
console.log(baba, chacha);

function getSum(a, b=9){
    return a+b;} 

console.log(getSum(2, 7));
