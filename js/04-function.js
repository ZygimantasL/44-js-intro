console.clear();

function sum(a , b){
    console.log('>>>', a , b);
return a+b;
 

}

const s1 =sum(2, 2);
console.log(s1);

const s2 =sum(2, 7, 5);
console.log(s2);
 
const s3 =sum(-16/10, -15/10);
console.log(s3);

function hi(name){
console.log(name);
return `Hi, my name is ${name}!`;

}

console.log(hi('Petras'));
console.log(hi('Jonas'));
console.log(hi('Maryte'));
console.log(hi('Ona'));

function prisistatymas(name, age){
    console.log(name, age);
    return `Sveiki, mano vardas ${name}! Ir man ${age} metu.`;
}

console.log(prisistatymas('Petras',16));