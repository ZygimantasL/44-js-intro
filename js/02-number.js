console.clear();
/*
NUMBERS

NORMALUS:
-sveikieji
-desimtainiai

MISTINIAI:
-Infinity / -Infinity
- NaN (Not a Number)

MATEMATINIAI VEIKSMAI (operatoriai)
ARITMETINIAI OPERATORIAI:
+, -, /, *, **(kelimas laipsniu)
PRISKIRIMO OPERATORIAI:
=, +=, -=, /=, *=, **=

KINTAMUJU INICIAVIMO BUDAI:
-const (pastovus)
-let (kintamas)
*/

// Sveikasis
console.log(12551);
console.log(-12551);

// Desimtainis

console.log(12.551);
console.log(-12.551);
console.log(3/4);
console.log(1/3);
console.log(0.1+0.2);
console.log(2 + 2 * 2);

//begalybės
console.log(Infinity);
console.log(-Infinity);

//NaN
console.log(NaN);

//Veiksmai
console.log(7+5);
console.log(7-5);
console.log(7*5);
console.log(7/5);
console.log(7**5);

//kintamieji ir ju atvaizdavimas
const a = 7;
console.log(a);
let pi = 3.14;
console.log(pi);
pi = 3;
console.log(pi);

let suma2 = 0;
console.log(suma2);
suma2 = suma2 + 10;         // vienas variantas
console.log(suma2);
suma2 += 15                 // tas pats kas rašyt suma2=suma2 + 15
console.log(suma2);


console.clear();

let i =0;
console.log(i);
i += 1;
console.log(i);
i++;
console.log(i);
++i;
console.log(i);
i -= 1;
console.log(i); 
i --;
console.log(i);
--i;
console.log(i);