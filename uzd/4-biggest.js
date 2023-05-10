console.clear();

function biggest (list){
    let result = -Infinity;
    // tikriname tipa turi buti array
    if (Array.isArray(list)){
    //jeigu ne array  error
        result = 'Pateikta netinkamo tipo reikšmė.';
    }
    //turiu array
    // jeigu tuscias - return error
    if (!list.length){
        result = 'Pateiktas sąrašas negali būti tuščias.'; 
    }

    // su ciklu einame per array
    //let result = -Infinity;
    for(let i=0; i < list.length; i++){
        // tikriname ar array narys yra realus skaicius
        if (typeof(list[i]!=='number' || !isFinite(list[i]))) {
            //jei ne
            //einam prie sekancio
            continue;
        }
        //jeigu taip (yra skaiciaus tipas
        //lyginame su pries tai zinoma didziausia reiksme
        //jeigu nauja reiksme didesne -owerwrite

        if (list[i]> result)
        {   result = list[i]; }
        } 
        // jeigu didziausias skaicius vis dar -infinity
        if (result=== -Infinity){
            result = 'Nera teisingu skaiciu'
        }
        //jeigu yra normalus skaicius
        

    return result;
}

console.log(biggest([1]), '->', '1');
console.log(biggest([ -5, 78, 14, 0, 18 ]), '->', '78');
console.log(biggest([ 69, 69, 69, 69, 66]), '->', '69');
console.log(biggest([ -1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);
console.log(biggest('pomidoras'), '->',  'Pateikta netinkamo tipo reikšmė.');
console.log(biggest([]), '->', 'Pateiktas sąrašas negali būti tuščias.');
