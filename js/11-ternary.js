console.clear();
/*
TERNARY

klausimas? teigiama reiksme: neigiama reiksme;

*/
// vienodas aprasymas
const leidimas = 10 >= 18? 'pilnametis':'nepilnametis';
console.log(leidimas);

let approve = '';
if (10>=18){
    approve='pilnametis';
} else{
    approve='nepilanmetis'
}
console.log(approve);

const a=1 ? 2 : 3;
console.log(a);