console.clear();
/*
ARRAY -(slang), sarasas, listas (slang), matrica, masyvas.

Masyvas prasideda index = 0; 
array.length - masyve esanciu reiksmiu kiekis;

*/


const empty = [];
console.log(empty);

const pazymiai = [2, 4, 6, 8];
console.log(pazymiai);

//              VENGTI  tokiu
const random = [1, 'antras', 3, '4', 3.14, 'assasas']
//

const vardai = ['Jonas', 'Ona', 'Ina', 'Ele']
console.log(vardai);

const vardas1 = vardai[0];
console.log(vardas1);

console.log('------------------');

const marks= [2, 4, 6, 8];
console.log(marks);
console.log(marks[0]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[1]);

console.clear();
const marks1 = [10, 9, 8];
const marks2 = [6, 7, 8];
const marks3 = [5, 5, 5];

function average (marks){
   let sum = 0;
   sum += marks [0];
   sum += marks [1];
   sum += marks [2];

    return sum / marks.length;

    // Marks.length kiekis skaitmenu masyve!!!
}
console.log('Vidurkis 1', marks1, '=', average(marks1));
console.log('Vidurkis 2', marks2, '=', average(marks2));
console.log('Vidurkis 3', marks3, '=', average(marks3));

console.clear();

const dict1= ['pirmas', 'zodis','labas'];
const dict2= ['Labas', 'Rytas','Lietuva'];
const dict3=['Labas', 'rytas','Suraitytas'];

// zodynas: a, b, c.

function dictionary(wordList) {
    console.log(wordList);
    //Variantas NR1
    // let result = 'Zodynas: ';
    // result += wordList [0] + ', ';
    // result += wordList [1] + ', ';
    // result += wordList [2] + '.';
    // return result;  
    // Variantas NR.2
    return `Zodynas: ${wordList[0]}, ${wordList[1]}, ${wordList[2]}.`;
}
console.log(dictionary(dict1));
console.log(dictionary(dict2));
console.log(dictionary(dict3));

console.clear();

const text ='Labas rytas';
console.log(text);
console.log(text[0]);
console.log(text[1]);
console.log(text[10]);
console.log(text[11]);
console.log(text.length);