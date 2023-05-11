console.clear();


// FOR

const marksFor =[10, 2, 4, 6, 8];
let marksForSum = 0;

for (let i=0; i<marksFor.length; i++) {
    const mark = marksFor[i];
    marksForSum += mark;
}


console.log(`For vidurkis: ${marksForSum/marksFor.length}`);

//FOR-OF
const marksForOf =[10, 2, 4, 6, 8];
let marksForOfSum = 0;
// mark laikinasis kintamasis einant per kiekviena masyvo nari
for (const mark of marksForOf) {
    marksForOfSum += mark;
}


console.log(`For OF vidurkis: ${marksForOfSum/marksForOf.length}`);

//FOR-2 iskelti parametrai

const marksFor2 =[10, 2, 4, 6, 8];
let marksFor2Sum = 0;
let i=0;

for (;i<marksFor2.length; i++) {
    const mark = marksFor2[i];
    marksFor2Sum += mark; 
}


console.log(`For-2 vidurkis: ${marksFor2Sum/marksForOf.length}`);

// FOR-3    daug parametru

const marksFor3 =[10, 2, 4, 6, 8];
let marksForSum3 = 0;

for (let i=0, j=marksFor3.length; i<marksFor3.length & j>=3; i++, j--) {
    const mark = marksFor3[i];
    //console.log(i, j, mark);
    marksForSum3 += mark;
}
console.log(`For-3 vidurkis: ${marksForSum3/marksFor3.length}`);

// FOR-4    klausimo iskelimas

const marksFor4 =[10, 2, 4, 6, 8];
let marksForSum4 = 0;

const marksFor4If =(index)=> index < marksFor4.length;

for (let i=0; marksFor4If(i); i++) {
    const mark = marksFor4[i];
    marksForSum4 += mark;
}
console.log(`For-4 vidurkis: ${marksForSum4/marksFor4.length}`);

// FOR-5    kintamuju atnaujinimo iskelimas

const marksFor5 =[10, 2, 4, 6, 8];
let marksForSum5 = 0;


for (let i=0; i<marksFor5.length;) {
    if (i===5){
        i+=3;
    }
    const mark = marksFor5[i];
    marksForSum5 += mark;
    i++;
}
console.log(`For-5 vidurkis: ${marksForSum5/marksFor5.length}`);

// FOR-6    kintamuju atnaujinimo iskelimas

const marksFor6 =[10, 2, 4, 6, 8];
let marksForSum6 = 0;


for (let i=0; i<marksFor6.length;) {
    if (i===5){
        i+=3;
    }
    const mark = marksFor5[i];
    marksForSum6 += mark;
    i++;
}
console.log(`For-6 vidurkis: ${marksForSum6/marksFor6.length}`);


//WHILE 

const marksWhile =[10, 2, 4, 6, 8];
let marksWhileSum = 0;
let i4=0;

while (i4 < marksWhile.length) {
    const mark = marksWhile[i4];
    marksWhileSum += mark;
    i4++;
}
console.log(`While vidurkis: ${marksWhileSum/marksWhile.length}`);

// DO-WHILE

const marksDoWhile =[10, 2, 4, 6, 8];
let marksDoWhileSum = 0;
let i5=0;

do{
    const mark = marksDoWhile[i5];
    marksDoWhileSum += mark;
    i5++;
} while(i5 < marksDoWhile.length)

console.log(`DoWhile vidurkis: ${marksDoWhileSum/marksDoWhile.length}`);

//FOR-IN
const user ={
    name: 'Petras',
    age: 99,
    isMarried: true,
};
//SVARBU
const userKeys = Object.keys(user);
console.log(userKeys);

for (const key of userKeys) {
    console.log(key, `=`, user[key]);
    
}
//FORIN METODAS 
for (const key in user){
    console.log(key, `=`, user[key]);
}

//METODAI

// FOREACH
//[].forEach();
//MAP
//SORT
//FILTER
//REDUCE