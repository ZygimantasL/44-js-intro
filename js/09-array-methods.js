console.clear();

const marks = [];
console.log(marks);

//iterpia elementus array gale
marks.push(10);
marks.push(8);
marks.push(2);
marks.push(5);
marks.push(7);
console.log(marks);

//iterpia elementus pries array
marks.unshift(9);
marks.unshift(8);
marks.unshift(10);
marks.unshift(4);
console.log(marks);

//panaikina pirma nari
marks.shift();
console.log(marks);

//panaikina paskutini elementa
marks.pop();
console.log(marks);

//paskutinio elemento atvaizdavimas kintamam masyve

const PaskutinePozicija = marks.length- 1;
console.log(marks[PaskutinePozicija]);
console.log(marks.at(PaskutinePozicija)); 
//marks ziurek nuo galo "-" reiskia nuo galines pozicijos
console.log(marks.at(-1));

//ar yra elementas array

console.log(marks.includes());

//indexof sugrazina pozicija kurioje yra elementas 
console.clear();
console.log('INDEXOF ----------------------');
console.log(marks);
// 6 nurodo pozicija array
console.log(marks.indexOf(5));
// -1 nurodo elemento nebuvima array
console.log(marks.indexOf(4));

// JOIN sujungia visa array i text stringa Vykdo tik tekstines funkcijas
console.log('JOIN ----------------------');
const visiPazymiai = marks.join();
console.log(visiPazymiai);

const visiPazymiai2 = marks.join('-==-');
console.log(visiPazymiai2);

// REVERSE apvercia masyva (VISAM LAIKUI)
console.log('REVERSE ----------------------');
const skaiciai =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(skaiciai);
console.log(skaiciai.reverse());
console.log(skaiciai);

//Slice 
console.log('SLICE ----------------------');
console.log(skaiciai);
//pirmus du nukerpa kitus palieka
console.log(skaiciai.slice(2));
//pjauna nuo galo palieka paskutinius tris
console.log(skaiciai.slice(-3));
// ispjauna nuo pozicijos iki pozicijos galima naudoti su pirmais ir paskutiniais 
console.log(skaiciai.slice(3, -3));

//Splice istato i array viduri elementus, istrina arba 
console.clear();
console.log('SPLICE ----------------------');
console.log(skaiciai);
//splice (pozicija kurioje pradedam keisti array, kiek elementu istrint, ka irasyti vietoje jo)
console.log(skaiciai.splice(2,0, 'X'));
console.log(skaiciai);

console.log(skaiciai.splice(3,1));
console.log(skaiciai);
//istrinami paskutiniai el..
console.log(skaiciai.splice(-2,2));
console.log(skaiciai);

