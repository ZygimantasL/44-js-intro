console.clear()

function numberLength(number){
    if (typeof number !== 'number' || !isFinite(number)){
        return 'pateikta netinkamo tipo reiksme.';
    }
    //number = Math.abs(number) // abu tinkami
    //number = number < 0? -number: number;
    const numberAsString ='' + number;
    let count = numberAsString.length;
        if (number % 1 !== 0) {
        count --;
    }
        if (number < 0){
        count --;
    } 
  return count;
}

console.log(numberLength(5),'-->',1);
console.log(numberLength(781),'-->',3);
console.log(numberLength(53706056124),'-->',11);
console.log(numberLength(true));
console.log(numberLength('asd'));
console.log(numberLength(NaN));

console.log(numberLength([]));
console.log(numberLength({}));
console.log(numberLength(Infinity));
console.log(numberLength(3.14), '-->', 3);
console.log(numberLength(-3.14), '-->', 3);