console.clear();
/*
IF - palyginimas

Kodo sablonai
if (){}
if (){} else {}

Palyginimo operatoriai:
visi >, <, >=, <=, ==, ===, !=, !==
naudotini: >, <, >=, <=, ===, !==
nenaudotini: ==, !=

Loginiai operatoriai
&& (and) ||(or) | (not)
*/

if (4>2){
    console.log('taip')
};

if (7<10){
    console.log('7<10');
} else {
    console.log('7 ne < uz 1');
};

const diena =1;
//      =  yra priskyrimas
//      == yra patikslinimas
///     === grieztas lygu

if (diena === 1 ){
    console.log('Pirmadienis');
} else if (diena === 2) {
    console.log('Antradienis');
} else {
    console.log('Treciadienis');
}


//kodo nestinimas
console.log('_________________________________');
const arSvieciaSaule= true;
const arLyja = false;

let kaDaryt = 'nezinau';

if (arSvieciaSaule){
    kaDaryt='eisim i kiema';
    if (arLyja) {
        kaDaryt= 'ziurim i vaivorykste :O';
    } else{
        kaDaryt= 'Deginsimes pleziuke';
    }
} else {
    kaDaryt='kodinsim... ;-(';
}

console.log(kaDaryt);
console.clear();

const siandien = 12;

const DienuPavadinimai =[
    'Pirmadienis',
    'Antradienis',
    'Treciadienis',
    'Ketvirtadienis',
    'Penktadienis',
    'Sestadienis',
    'Sekmadienis'
]
const savaitesDiena = DienuPavadinimai[siandien-1];
if (savaitesDiena === undefined){
    console.log('>>>', 'Tokios dienos nera');
} else{
    console.log('>>>', savaitesDiena);
}

console.log('--------------------');

// SAUKTUKAS VIETOJE TEIGIAMO PADARO NEIGIAMA
if (777 !== 777){
    console.log('NElygu');
} else{
    console.log('lygu');
}
// triguba lygybe draudzia skirtingu duomenu tipus naudot

if ('888' === 888){
    console.log('taip');
} else{
    console.log('ne');
}

console.log('labas' * 12);
console.log('12' * 12);
console.log('12,3' * 12);

// Loginiai operatoriai
// AND kartu dvi salygos
if (4>2){
    if (8<20){
        console.log('>>> and 1');
    }
}

if (4>2 && 8< 20) {
    console.log('>>>> and 2');   
}

//Arba dalis (bent viena salyga tenkinama)
if (1<0 || 2<4 ){
    console.log('<<< arba');
}

// Mix
// 1 lygu 1 IR 2= 3 (netenkintina salyga) ARBA  4=4tenkintina salyga
if(1===1 && 2 === 3 || 4=== 4){
    console.log('mix');
}

// ne
const a = true;

if (!a){
    console.log('ir ne');
} else {
    console.log('taip');
}

//pvxz

const error = true;
//vertimas
// JEIGU (nera-error)... 
if (!error) {
    console.log('all good');
} else{
    console.log('ERROR');
}

// visi skaiciai - TRUE, isskyrus 0 ir NaN
// undefined - FALSE
// tuscias tekstas '' - FALSE 
// null - FALSE
// visos function - TRUE
// visi array - TRUE
// visi object -TRUE

if (21){
    console.log('kazkas');
} else{
    console.log('ne kazkas');
}

//konvertuojama isvestis i boolean t.y. ar true ar false
const negative = !!error;
console.log(negative);
console.clear();
let month = 6
if (month ===4 || 5)
