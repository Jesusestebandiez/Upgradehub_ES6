//ARROWS Ejer 1
 sum =(a =10, b=5) => a+b;
console.log(sum());
console.log(sum(20));
console.log(sum(20,30));

//destructuring ejer 1

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020} 
let (title, gender,year) = game;
console.log(title);
console.log(gender);
console.log(year);
//ejer 2
const fruits = ['Banana', 'Strawberry', 'Orange'];
let [fruti1,fruit2,fruit3]=fruits;
console.log(fruti1);
console.log(fruti2);
console.log(fruti3);

const animalFunction = (nameanimal) => {
let (nameanimal, race)=animalFunction;
return {name: 'Bengal Tiger', race: 'Tiger'}
};
console.log(animalFunction);


const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }
let (nameCar,itv) = car;
console.log(2020);
console.log(2015);
console.log(2011);