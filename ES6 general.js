//El destructuring me permite extraer de manera rápida ciertos valores de un objeto. Veamoslo en un ejemplo.
//ejem Marvel Avengers
let marvelCharacter = {
	name: {
		heroName: 'Doctor Strange',
		humanName: 'Stephen Vincent Strange'
	},
	team: ['Avengers', 'Iluminati']
}

// Destructuring - Ex1
let { name, team } = marvelCharacter;

// Podemos acceder a las propiedades sin el marvelCharacter -> ya asignado.
console.log(name.heroName, name.humanName);
console.log(team[0], team[1]);

// Destructuring - Ex2
let { heroName, humanName } = marvelCharacter.name;

console.log(heroName);
console.log(humanName);

// Spread Operator in Parameters
function suma(a, b, c) {
	return a + b + c;
}

const numbers = [1, 2, 3];

suma(...numbers);

// Spread Operator in Strings
const myTeam = 'RAYO';
const characters = [ ...myTeam ];
// [ 'R', 'A', 'Y', 'O']

// Spread Operator in Object
const obj1 = { firstName: 'Foo', age: 22 };
const obj2 = { lastName: 'Bar', gender: 'M' };

const newObj = { ...obj1, ...obj2, planet: 'Earth' };

console.log(newObj);

// marvel X-men 
//El operador de propagación spread operator permite que una expresión **sea expandida** 
//en situaciones donde se esperan múltiples argumentos 
//(llamadas a funciones) o múltiples elementos (arrays literales).

let xmen = ['Ciclops', 'Beast', 'Angel', 'Marvel-girl'];
let newXmen = ['Wolverine', 'NightCrawler', 'Storm'];

// Antes se usaba el concat y ahora ...
let myMutants = [...xmen, ...newXmen];

// Se puede usar también para copiar un array
let xmenCopy = [...xmen];

// se usa para jugar con tu array sin modificarlo
let [lastMutant] = [...xmen].reverse();

// No se ha modificado
console.log(xmen);
console.log(lastMutant)

//foreach
let officersIds = [];

officers.forEach((officer) => {  
  officersIds.push(officer.id);
});

//map
const officersIds = officers.map(officer => officer.id);

console.log(officersIds) =officersIds.map(officer => officer.id);

//ejem Naruto

let arrnarutocharactermap = [{
    id: 1,
    name: 'Naruto',
    age: 50,
    power: 150,
  }, {
    id: 2,
    name: 'Tsunde',
  }]
  
  let result = narutocharaceter.map(person => ({ value: person.id, text: person.name }));
  
  console.log(result);

  //ejem Bill

  let arr = [{
    id: 1,
    name: 'bill'
  }, {
    id: 2,
    name: 'ted'
  }]
  
  let result = arr.map(person => ({ value: person.id, text: person.name }));
  
  console.log(result);

  // ejem STAR WARS

let pilots = [ 
{ id: 2, name: "Wedge Antilles", faction: "Rebels", }, 
{ id: 8, name: "Ciena Ree", faction: "Empire", }, 
{ id: 40, name: "Iden Versio", faction: "Empire", }, 
{ id: 66, name: "Thane Kyrell", faction: "Rebels", }];

let rebels = pilots.filter(function (pilot) {  
    return pilot.faction === "Rebels";});
    
    let empire = pilots.filter(function (pilot) {  
    return pilot.faction === "Empire";});
//¡Eso es! Y es aún más corto con las arrow functions:
    const rebels = pilots.filter(pilot => pilot.faction === "Rebels");

const empire = pilots.filter(pilot => pilot.faction === "Empire");

//array find El método find() 
//devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12

//array reduce

//Al igual que ***.map()***, ***.reduce()*** 
//también ejecuta una devolución de llamada para cada elemento de un ***array***. 
//Lo diferente aquí es que **reduce el resultado** de esta devolución de llamada (el acumulador) de un elemento del ***array*** a otro.

//El acumulador puede ser prácticamente cualquier cosa (entero, cadena, objeto, etc.)
// y debe instanciarse o pasarse al llamar a .reduce().
 //¡Hora de un ejemplo! Digamos que tienes una ***Array*** con estos pilotos y sus respectivos años de experiencia:

 let pilots = [ 
	{ id: 10, name: "Poe Dameron", years: 14, }, 
	{ id: 2, name: "Temmin 'Snap' Wexley", years: 30, }, 
	{ id: 41, name: "Tallissan Lintra", years: 16, }, 
	{ id: 99, name: "Ello Asty", years: 22, }
];

//Necesitamos conocer el total de años de experiencia de todos ellos. Con .reduce(), es bastante sencillo:

let totalYears = pilots.reduce(function (accumulator, pilot) { 
    return accumulator + pilot.years;}, 0);

    //Tenemos en cuenta que hemos establecido el **valor inicial en 0**. También podría haber usado una variable existente si fuera necesario.
    // Después de ejecutar la devolución de llamada para cada elemento del array, reduce devolverá el valor final de nuestro acumulador (en nuestro caso: 82).
    
const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);
