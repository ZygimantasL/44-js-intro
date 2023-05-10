console.clear();
/*
išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
gražina rezultatą
 */

function isrinktiRaides(zodis, kasKelintas) {
    if (typeof zodis !== `string`){
        return 'Pirmasis kintamasis yra netinkamo tipo.';
    }
    if (zodis.length >= 100 || zodis.length === 0){
        return 'Pirmojo kintamojo reikšmė yra netinkamo dydžio.';
    }
    if (typeof kasKelintas !==`number`){
        return `Antrasis kintamasis yra netinkamo tipo.`;
    }
    if (kasKelintas <= 0){
        return `Antrasis kintamasis turi būti didesnis už nulį.`;
    }
    if (zodis.length < kasKelintas){
        return `Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.`;
    }
    let atsakymas= '';
    for (let i = kasKelintas-1; i < zodis.length; i = i + kasKelintas) {
        atsakymas = atsakymas + zodis[i];  
    }
console.log(atsakymas); 
    
  return atsakymas;
}
console.log('bdf', `-->`,isrinktiRaides('abcdefg', 2 ) );
console.log('cfil', `-->`, isrinktiRaides('abcdefghijkl', 3 ) );
console.log('Antrasis kintamasis turi būti didesnis už nulį.', '--->', isrinktiRaides('abc', 0 ));
console.log('Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.', '-->', isrinktiRaides('abc', 4 ) );
console.log('Pirmasis kintamasis yra netinkamo tipo.', '--->', isrinktiRaides( 1561, 2 ) );
console.log('Pirmojo kintamojo reikšmė yra netinkamo dydžio.', `-->`,isrinktiRaides('', 2 ) );
console.log('Antrasis kintamasis yra netinkamo tipo.', `-->`,isrinktiRaides('asdsadas', 'assa' ) );