console.clear();
const x = 7;
const y = 5;

// function declaration
function sum(a, b) {
    return a + b;
}
console.log(`${x} + ${y} = ${sum(x, y)}`);

// anonymous funcion

const diff = function(a, b) {
    return a - b;
}
console.log(`${x} - ${y} = ${diff(x, y)}`);

// arrow function
const multi = (a, b) => {
    return a * b;
}
console.log(`${x} * ${y} = ${multi(x, y)}`);

// arrow function
//jeigu yra tik 1 procedura (26 eilute)
//tai galima nerasyti {return}
const div = (a, b) =>  a / b;
console.log(`${x} / ${y} = ${div(x, y)}`);

// arrow function
//jeigu yra tik 1 parametras 
//tai galima nerasyti ()
const sqr = a =>  a**2 ;
console.log(`${x}^2 = ${sqr(x, y)}`);

console.log('-----------------');

const firstLetter = (str) => str[0];
//const firstLetter = str => str[0];

console.log('Labas', '-->', firstLetter('Labas'));
 const isOld = age => age >= 18? 'old' : 'young';
console.log(50, '-->', isOld(50));
console.log(5, '-->', isOld(5));

// function doINeedUmbrella(temp) {
//     if (temp>0){
//         return false;
//     }
//     return true;
// }
    const doINeedUmbrella = temp => temp <= 0 ;
console.log(18, doINeedUmbrella(18));
console.log(18, doINeedUmbrella(-18));

function shouldIPush(list, number) {
    if(number % 2 ===0){
        list.push(number);
    }
    return (list);
}

console.log([], 4, shouldIPush([],4));
console.log([4], 3, shouldIPush([4],3));
console.log([10, 20], 14, shouldIPush([10, 20],14));

console.clear();

// Uzdavinys

function calc(n1, operation, n2) {
    if (operation === '+'){
    return n1+n2;}
    if (operation === '-'){
    return n1-n2;}
    if (operation === '*'){
    return n1*n2;}
    if (operation === '/'){
    return n1/n2;}
    if (operation === '**'){
        return n1**n2;}
}

console.log(`7 + 5 = ${calc(7, '+', 5)}`);
console.log(`7 - 5 = ${calc(7, '-', 5)}`);
console.log(`7 * 5 = ${calc(7, '*', 5)}`);
console.log(`7 / 5 = ${calc(7, '/', 5)}`);
console.log(`7 ** 5 = ${calc(7, '**', 5)}`);

// antras variantas

function calcs(n1, operation, n2) {
    const functs ={
        '+': (a, b)=>a+b,
        '-': (a, b)=>a-b,
        '*': (a, b)=>a*b,
        '/': (a, b)=>a/b,
        '**': (a, b)=>a**b,
        }
    return functs[operation](n1, n2);
}
console.log(`7 + 5 = ${calcs(7, '+', 5)}`);
console.log(`7 - 5 = ${calcs(7, '-', 5)}`);
console.log(`7 * 5 = ${calcs(7, '*', 5)}`);
console.log(`7 / 5 = ${calcs(7, '/', 5)}`);
console.log(`7 ** 5 = ${calcs(7, '**', 5)}`);