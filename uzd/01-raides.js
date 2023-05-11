console.clear();

//1. grazina pirma raide
//2. grazina paskutine raide
// grazina vidurine raide
// grazina teksto ilgi

// aboutStr('labas', 'first')
// aboutStr('labas', 'last')
// aboutStr('labas', 'mid')
// aboutStr('labas', 'size')
// aboutStr('labas', 'lowercase')
// aboutStr('labas', 'uppercase')
// aboutStr('labas', 'uppercaseCount')
// aboutStr('labas', 'lowercaseCount')

function raides(tekstas, kintamieji) {
    const funkcijos ={
        'first': (tekstas) => tekstas.at(0),
        'last': (tekstas) => tekstas.at(-1),
        'mid': (tekstas) => tekstas[Math.round(tekstas.length/2)-1],
        'size': (tekstas) => tekstas.length, 
        'lowercase': (tekstas) => tekstas.toLowerCase(),
        'uppercase': (tekstas) => tekstas.toUpperCase(),
        'uppercaseCount': (tekstas) => tekstas.upperCaseCount(tekstas),
        'lowercaseCount': (tekstas) => tekstas.lowerCaseCount(tekstas),
        }
    return funkcijos[kintamieji](tekstas);

}
console.log(raides('labas', 'first'));
console.log(raides('labas', 'last'));
console.log(raides('abrikosas', 'mid'));
console.log(raides('labas', 'size'));
console.log(raides('labas', 'lowercase'));
console.log(raides('labas', 'uppercase'));
console.log(raides('labas', 'uppercaseCount'));
console.log(raides('labas', 'lowercaseCount'));