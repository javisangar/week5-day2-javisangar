//-----------------ARRAYS----------------------

//Construir mediante []:
//Ejercicio Crea un array de 3 enteros

let myArray = [4, 7, 8, 2, 9];

//Ejercicio Crea un array de 3 strings

let myFriends = ['Jose', 'Mario', 'Pepe'];

//Ejercicio Crea un array con 2 enteros y un string

let myArray = [2, 6, 'Madrid'];

//Construir mediante new:
//Ejercicio Crea un array de 3 enteros

miMatriz = new Array(3, 5, 6);

//Ejercicio Crea un array de 3 strings

miMatriz = new Array('Albacete', 'Madrid', 'Toledo');

//Ejercicio Crea un array con 2 enteros y un string

miMatriz = new Array(4, 6, 'Toledo');

//Ejercicio ¿ Qué diferencia hay entre let e = [3] y let f = new Array(3) ?
let e = [3] indica el array y let f = new Array(3) la posición en la que se encuentra.


// 1 Ejercicio Transformar el array de números

const numberArrays = [1, 2, 3, 4];

let multiply = numberArrays.map(num => num * 5);
console.log(multiply);

// 2 Ejercicio Buscar el primer elemento mayor que 4 en el siguiente array

const numberArrays = [1, 2, 3, 4, 5];

let higherNumber = numberArrays.find((num) => num >4);
console.log(higherNumber);

// 3 Ejercicio Buscar el primer elemento que empieze por eva en el array

const myArray = ['pepe', 2, 'evaristo', 4, 'eva'];

let searchPeople = myArray.find(word => word.toString().startsWith('eva'));
console.log(searchPeople);

// 4 Ejercicio Hacer el sumatorio de un array numérico ( reduce ):

let total = miArray.reduce((acum, num) => {
    if (typeof  num === 'Number') {
      return acum + num;
    }
    return acum;
  })

// 5 Contar el numero de elementos que son string en el siguiente array (reduce):

const miArray = ['pepe', 2, 'evaristo', 4, 'eva'];
const totalStrings = miArray.reduce((acum, el) => {
  if (isNaN(el)) {
    acum++;
  }
}, 0)


// 6 Ejercicio Modificar array usando push.

const arrayOriginal = ['Manzanas', 'Peras', 'Castañas']; 

arrayOriginal.push('Nueces');
console.log(arrayOriginal);

// 7 Ejercicio Modificar array usando concat.

const arrayOriginal = ['Manzanas', 'Peras', 'Castañas']; 

const result = arrayOriginal.concat(['Nueces']);

// 8 Ejercicio Modificar array usando splice.

const arrayOriginal = ['Manzanas', 'Peras', 'Castañas']; a

const arrayOriginal = ['Manzanas', 'Peras', 'Castañas'];

arrayOriginal.splice(2,1, 'Nueces');

console.log(arrayOriginal);

// 9 Ejercicio Añadir elemento a un array usando splice

const arrayOriginal = ['Manzanas', 'Peras', 'Castañas'];

arrayOriginal.splice(3, 0, 'Nueces');
console.log(arrayOriginal);





//--------------------------SET-----------------------

//Ejercicio ConStruye un conjunto con tres frutas: Pera, Manzana y Naranja

let fruits = new Set(['Pera', 'Manzana', 'Naranja']);


//Ejercicio Comprueba si Naranja esta dentro del conjunto que has creado antes.
let fruits = new Set(['Pera', 'Manzana', 'Naranja']);
console.log(fruits.has('Naranja'));

//Ejercicio Comprueba la longitud del conjunto.

let fruits = new Set(['Pera', 'Manzana', 'Naranja']);
console.log(fruits.size);

//Ejercicio Añade una Granada al conjunto.

let fruits = new Set(['Pera', 'Manzana', 'Naranja']);
console.log(fruits.add('Granada'));

//Ejercicio Crea un array con los elementos que hay en el conjunto y devuelvelo ordenados.

let fruits = new Set(['Pera', 'Manzana', 'Naranja']);
const array = Array.from(fruits);
array.sort();

//Ejercicio Borra la manzana.

let fruits = new Set(['Pera', 'Manzana', 'Naranja']);
console.log(fruits.delete('Manzana'));





//----------------------MAP-------------------------

//Ejercicio Construye una guia telefonica con los compañeros de clase. Toma como clave el numero de teléfono y como valor el nombre del compañero.

const agenda = new Map();
agenda.set(654323232, 'Pepe');

//Ejercicio Crea una función que compruebe que un número está dentro de la guía.

function checkNumber(number) {
	return agenda.has(number);
}
checkNumber(654323232);
//Ejercicio Crea una función que dado un nombre compruebe que la guia contiene algún nombre que contenga el nombre pasado por parámetro.
function checkName(name) {
	let checked = false;
	agenda.forEach(value =>{
  	if (value === name) {
    	checked = true;
    }
  })
  return checked;
}


//Ejercicio Añade un nuevo compañero ficticio con tu número de telefono. ¿Qué pasa?

agenda.set(654323232, 'Juan');

//Ejercio Crea un array ordenado por nombre con valores { nombre, telefono } a partir de la guía.

const data = [];
const dataArray = [];
agenda.forEach((value, key) => {
  data.push({
    name: value,
    phone: key
  })
  dataArray.push([value, key]);
})

dataArray.sort((a, b) => {
  if (a[0] < b[0]) {
    return -1;
  } else if (a[0] > b[0]) {
    return 1;
  }
  return 0;
})



//----------------------------Dates----------------------

// 1 Ejercicio Realiza un script que escriba en el documento la fecha y hora actual

// 2 Ejercicio Realiza un script que pida un nombre y dos apellidos e indique el tiempo que se tardó en introducir los datos. Para pedir los datos se puede utilizar la forma var nombre = prompt("Introduce el Nombre:"); que guardará en nombre el nombre sacando por pantalla una ventana donde introducirlos.

// 3 Ejercicio Realiza un script pida un mes y año e imprima los dias de ese mes de la forma 1(miércoles), 2(jueves), ...

const month = 1;
const year = 2019;

const date = new Date();
date.setMonth(month);
date.setFullYear(year);
date.setDate(1);

while(date.getMonth() === month) {
    switch(date.getDay()) {
     case 0:
       console.log(`${date.getDate()} (Domingo)` );
     break;
   case 1:
       console.log(`${date.getDate()} (Lunes)` );
     break;
   case 2:
       console.log(`${date.getDate()} (Martes)` );
     break;
   case 3:
       console.log(`${date.getDate()} (Miercoles)` );
     break;
   case 4:
       console.log(`${date.getDate()} (Jueves)` );
     break;
   case 5:
       console.log(`${date.getDate()} (Viernes)` );
     break;
   case 6:
       console.log(`${date.getDate()} (Sabado)` );
     break;
 }
  date.setDate(date.getDate() + 1);
}


// 4 Ejercicio Dada la siguiente fecha 05/02/1985 calcula el día sumandole 30, 90 y 180 días.

let date = new Date('05/02/1985');

date.setDate(date.getDate() +  30);
date =new Date('05/02/1985');

date.setDate(date.getDate() +  90);
date =new Date('05/02/1985');
date.setDate(date.getDate() +  180);