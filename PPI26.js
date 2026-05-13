/* 
Programação a internet
*/
// Introdução ao JavaScript
console.log("Bem vindo a PPI!");

// Variáveis
let name = "João";
let age = 17;
let isStudent = true;
// O isStudent já vai indicar que é uma variável booleana

const PI = 3.14; // Não pode mudar de valor
console.log(PI);

// Operadores Aritméticos + - / * ** %
let x = 5 + 5; // Soma
let y = "5" + 5; // Concatenação
let z = "Hello" + 5;

console.log(x, y, z);
console.log(typeof x);

// Ativar o formatador Prettier
// ALL + SHIFT + F

// Operadores relacionais
console.log(x != 2); // Operador de diferença
console.log("5" == 5); // Compara tipo OU valor
console.log("5" === 5); // Compara tipo E valor

// Operadores de incremento
console.log(x++); // Incremento após o retorno do valor
console.log(x); 
console.log(++x);

// Operadores lógicos - && (AND), || (OR), ! (NOT)
let isExpression = true && 5 + 2 * 3 < 10 || false; 
console.log(isExpression);

/*if (condition) {
    // Se a condition === true

} else {
    // condition === false

} 
*/
// Template Strings
let text = `React é 'tudo de bom!' \\
"programar" é minha vida!
Eu amo o IFRN`;
console.log(text);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// Array - lista que organiza e armazena dados importantes
let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

console.log(fruits.length); // Tamanho

console.log(fruits[0]);

fruits.push('Kiwi'); // Insere elemento no final da fila
console.log(fruits);

console.log(fruits.pop()); // Remove e retorna o último elemento
console.log(fruits);

console.log(fruits.shift()); // Remove e retorna o primeiro elemento
console.log(fruits);

// Insere elemento no começo da lista
fruits.unshift('Lemon');
console.log(fruits);

// Argumento 1 - posição
// Argumento 2 - qts elementos serão removidos
// Argumento 3 - lista de elementos que serão inseridos

fruits.splice(2, 0, "Kiwi", "Blueberry");
console.log(fruits);

fruits.splice(2, 1);
console.log(fruits);

// Desafio - substituir 'Apple' por 'Kiwi'
fruits.splice(3, 1, "Kiwi");
console.log(fruits);

// Busca índice do elemento 'Kiwi'
let index = fruits.indexOf("Kiwi");
console.log(index);

fruits.splice(index, 1, "Apple");
console.log(fruits);

console.log("Sort/Reverse");
let fruitsSort = fruits.toSorted(); // Não altera array
console.log(fruits);
console.log(fruitsSort);

let fruitsReverse = fruits.toReversed(); // Não altera array
console.log(fruits);
console.log(fruitsReverse);

// Ordem crescente
fruits.sort();
console.log(fruits);

// Ordem decrescente
fruits.reverse();
console.log(fruits);

const numbers = [45, 4, 9, 16, 25];
console.log(numbers);

// DESAFIO
// Criar um array 'numbers2' que armazene os valores de 'numbers' * 2
// Output: [90, 8, 18, 32, 50]
const numbers2 = [];
for (let i = 0; i < numbers.length; i++) {
  numbers2.push(numbers[i] * 2);
}
console.log(numbers);
console.log(numbers2);

function myFunction(value, index, array) {
  return value * 2;
}

const numbersMap = numbers.map(myFunction);
console.log(numbersMap);

console.log(numbers.map((number) => number * 2));

console.log(numbers.toSorted((a, b) => a - b)); //C
console.log(numbers.toSorted((a, b) => b - a)); //D


numbers.sort((a, b) => a - b);
// Maior valor
console.log('Maior =', numbers[numbers.length-1]);
// Menor valor
console.log('Menor =', numbers[0]);

// Aula 13/05 - Funções, array destructuring, spread operator
console.log(fruits);

console.log(fruits2);
const fruits2= ['Kiwi', 'Avocado'];
console.log([...fruits2, 'Grape']);

// Spread - ...
const fruits3 = [...fruits, ...fruits2];
console.log(fruits3);

// DESAFIO - Exibir todas as frutas que comecem 
// com a letra "A"
const out = [];
const letra = 'a'
/*
for (let i = 0; < fruits3.lenght; i++) {
    const fruit = fruits3 [i];
    //toLowerCase - minúscula, toUpperCase - maiúscula
    if (fruit[0].toLowerCase() === letra) {
       out.push(fruit);
    }
} */

fruits3.map((fruit)
)
