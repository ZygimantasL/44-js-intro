console.clear();

function multiply(a,b) {
    if (typeof a !== 'number') {
        return 'ERROR: pirmas sandaugos narys yra ne skaicius'    
    }
    if (Math.abs(a) === Infinity) {
        return 'ERROR: pirmas sandaugos narys negali but begalybe'    
    }
    if (isNaN(a)){
        return 'ERROR: pirmas sandaugos narys negali but NaN'
    }
    if (typeof b !== 'number') {
        return 'ERROR: antras sandaugos narys yra ne skaicius'
    }
    if (b === Infinity || a=== -Infinity) {
        return 'ERROR: antras sandaugos narys negali but begalybe'    
    }
    if (''+b === 'NaN'){
        return 'ERROR: pirmas sandaugos narys negali but NaN'
    }
    const result = a * b;
    return result;
    }


console.log(multiply(7,5));
console.log(multiply(-7, (-5)));
console.log(multiply(7, -5));

console.log(multiply('labas', 'rytas'));
console.log(multiply('labas', -5));
console.log(multiply(7, Infinity));

console.log(multiply(NaN, 5));
console.log(multiply(7, NaN));
console.log(multiply(NaN, NaN));
