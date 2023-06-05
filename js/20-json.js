//JSON sutextinimas 
console.clear();

const n = 5;
const nJSON = JSON.stringify(n);

console.log(n);
console.log(nJSON);
// string gauna ""
const s = 'labas';
const sJSON = JSON.stringify(s);

console.log(s);
console.log(sJSON);
// boolean toks pats
const b = true;
const bJSON = JSON.stringify(b);

console.log(b);
console.log(bJSON);

const arr = [1, 2, 3, 4];
const arrJSON = JSON.stringify(arr);

console.log(arr);
console.log(arrJSON);


const arrString = ['labas', 'rytas', 'Lietuva'];
const arrStringJSON = JSON.stringify(arrString);

console.log(arrString);
console.log(arrStringJSON);



const obj = {
    name: 'Petras',
    age: 99,
    isMarried: true
};
const objJSON = JSON.stringify(obj);

console.log(obj);
console.log(objJSON);

console.clear();
console.log(nJSON);
console.log(sJSON);
console.log(bJSON);
console.log(arrJSON);
console.log(arrStringJSON);
console.log(objJSON);

const nRecieved = JSON.parse(nJSON);
console.log(nRecieved, typeof nRecieved);

const arrRecieved = JSON.parse(arrJSON);
console.log(arrRecieved, typeof arrRecieved);
console.log(arrRecieved [0]);
console.log(arrRecieved [1]);
console.log(arrRecieved [2]);

const objRecieved = JSON.parse(objJSON);
console.log(typeof objJSON, objJSON);
console.log(typeof objRecieved, objRecieved);
console.log(objRecieved.name);
console.log(objRecieved.age);
console.log(objRecieved.isMarried);