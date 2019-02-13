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

let miArray = ['pepe', 2, 'evaristo', 4, 'eva'];
let newArray = [];
for (let i=0; i<miArray.length; i++) {
    if (typeof miArray[i] === 'number') {
       newArray.push(miArray[i]);
    }
}

let sumNumArray = newArray.reduce((function(acum, num) {return acum + num}), 0);

console.log(sumNumArray);

// 5 Contar el numero de elementos que son string en el siguiente array (reduce):

let miArray = ['pepe', 2, 'evaristo', 4, 'eva'];
let newArray = [];
for (let i=0; i<miArray.length; i++) {
    if (typeof miArray[i] === 'string') {
       newArray.push(1);
    }
}

let sumNumArray = newArray.reduce((function(acum, num) {return acum + num}), 0);

console.log(sumNumArray);





// 6 Ejercicio Modificar array usando push.

const arrayOriginal = ['Manzanas', 'Peras', 'Castañas']; 

let newArray = arrayOriginal.push('Nueces');
console.log(arrayOriginal);

// 7 Ejercicio Modificar array usando concat.

const arrayOriginal = ['Manzanas', 'Peras', 'Castañas']; 

const array = ['Nueces'];

let result = arrayOriginal.concat(array);

console.log(result);

// 8 Ejercicio Modificar array usando splice.

const arrayOriginal = ['Manzanas', 'Peras', 'Castañas']; a

const arrayOriginal = ['Manzanas', 'Peras', 'Castañas'];

arrayOriginal.splice(2,1, 'Nueces');

console.log(arrayOriginal);

// 9 Ejercicio Añadir elemento a un array usando splice

const arrayOriginal = ['Manzanas', 'Peras', 'Castañas'];

arrayOriginal.splice(3,1, 'Nueces');
console.log(arrayOriginal);





//--------------------------SET-----------------------

//Ejercicio ConStruye un conjunto con tres frutas: Pera, Manzana y Naranja

let fruits = new Set(['Pera', 'Manzana', 'Naranja']);

console.log(fruits);


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
let myArray = ['Pera', 'Manzana', 'Naranja'];
console.log(myArray.sort();)

//Ejercicio Borra la manzana.

let fruits = new Set(['Pera', 'Manzana', 'Naranja']);
console.log(fruits.delete('Manzana'));





//----------------------MAP-------------------------

//Ejercicio Construye una guia telefonica con los compañeros de clase. Toma como clave el numero de teléfono y como valor el nombre del compañero.
//Ejercicio Crea una función que compruebe que un número está dentro de la guía.
//Ejercicio Crea una función que dado un nombre compruebe que la guia contiene algún nombre que contenga el nombre pasado por parámetro.
let phoneGuide = new Map([[612889966, 'Lucho'], [677332266, 'Edu'], [655889834, 'Álvaro'], [651234533, 'Javi'], [654443322, 'Irene']]);
function checkName(name) {
    let checked = false;
    phoneGuide.forEach(value => {
        if(value === name) {
            checked = true;
        }
    })
    return checked;
}
checkName('Lucho');


//Ejercicio Añade un nuevo compañero ficticio con tu número de telefono. ¿Qué pasa?

phoneGuide.set(657223399, 'Luis');

//Ejercio Crea un array ordenado por nombre con valores { nombre, telefono } a partir de la guía.

let phoneGuide = new Map([[612889966, 'Lucho'], [677332266, 'Edu'], [655889834, 'Álvaro'], [651234533, 'Javi'], [654443322, 'Irene']]);

let phoneGuideArray = [];

phoneGuide.forEach((value, key) => (phoneGuideArray.push([value, key])));

phoneGuideArray.sort((a, b) => {
    if(a[0] < b[0]) {
        return -1;
    } else if(a[0] > b[0]) {
        return 1;
    } else {
        return 0;
    }
});

console.log(phoneGuideArray);
