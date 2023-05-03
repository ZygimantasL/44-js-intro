console.clear();
/*
OJECT -objektas
ARRAY - supaprastintas objectas
STRING - supaprastintas array

*/
//          [VARDAS,    METAI,  VED. STATUSAS].
const petras = ['Petras', 99, true];
const maryte = ['Maryte', 88, false];

// Sveiki, mano vardas VARDAS ir man TIEK metu.

const s1 =`Sveiki, mano vardas ${petras[0]} ir man ${petras[1]} metu.`;
console.log(s1);

const s2 =`Sveiki, mano vardas ${maryte[0]} ir man ${maryte[1]} metu.`;
console.log(s2);

// Object aprasymas 

const jonas= {
    name:'Jonas',
    age: 77,
    isMarried: true,
};

const ona= {
    name:'Ona',
    isMarried: false,
    age: 66,
};

console.log(ona);
console.log(jonas);

const s3 =`Sveiki, mano vardas ${ona['name']} ir man ${ona['age']} metu.`;
console.log(s3);

// arba

const age = 'age';
const name = 'name';
const im= 'isMarried';

const s4 =`Sveiki, mano vardas ${jonas[name]} ir man ${jonas[age]} metu. ir as esu vedes? ${im}`;
console.log(s4);

 ///
console.clear();

const random ={
    tekstas: 'Tekstas',
    skaicius: 777,
    arTiesa: true,
    kitas_variantas: 'mhm...',
    'su tarpu':'ups...',
};

console.log(random['tekstas']);
console.log(random['skaicius']);
console.log(random["arTiesa"]);
console.log(random['kitas_variantas']);
console.log(random['su tarpu']);

const student ={
    name: 'Chuck norris',
    age: Infinity,
    movies: [{
        title: 'Walker: Texas Ranger',
        year: 2000,
        actors:[
            'Chuck Norris',
            'Chuck Norris',
            'Chuck Norris',
            'Chuck Norris',
            'Chuck Norris',
            'Others'
        ],
    },
    {
        title: 'Before me',
        year: -3000,
        actors:[
            'Chuck Norris',
            'Chuck Norris'
        ],
    },
    {
        title: 'Hell riser',
        year: 2000,
        actors:[
            'Chuck Norris',
            'Chuck Norris',
        ]
    }
    ]
}
console.log(student['name']);
console.log(student.movies.length); 

// Variantai isspausdinti info is objecto pvz:

console.log(student.movies[0].title);
console.log(student.movies[0]['title']);
console.log('__________________________');
console.log(student.movies[0].title);
console.log(student.movies[1].title);
console.log(student.movies[2].title);


console.clear();

const auto = {
    marke: 'Audi',
};
console.log(auto);
// ovveride individualia reiksme 
auto.marke = 'Audine';
console.log(auto);

auto.kaina = 1000;
console.log(auto.kaina);

auto.color = 'red';
console.log(auto);

//atributo naikinimas
delete auto.color;
console.log(auto);

//CRUD Create / repair/ update /delete.

auto.savininkai = [];
console.log(auto);

