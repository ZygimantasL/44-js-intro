console.clear();
/*
 setInterval/clearInterval
 setTimeout/clearTimeout
*/

console.log('Start');

setTimeout(()=>{
    console.log('Labas');
}, 0);

console.log('End');

// pirma procesai kurie sinchroniski o po to isvykdo timeout interval funkcijas

let i= 0;
const timer = setInterval(() =>{
    console.log('KA tu?...', i++);
    if (i >= 100){
        clearInterval(timer);
    }
}, 0);

