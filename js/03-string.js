console.clear();
/*
STRING - tekstas

inicijavimo budai
-dviguba kabutė("")
-vienguba kabutė('')
-backtick(`)

*/
const empty = "";
const space = "          "; 
const username = 'Vardenis';
const nickname = "Pravardenis";

console.log(nickname);
console.log(empty);
console.log(username);
console.log(username, space, nickname); 

//vienguba kabutė
const kabute1= "Vienguba kabute (').";
console.log(kabute1);

//Dviguba kabutė
const kabute2= 'Dviguba kabute (").';
console.log(kabute2);

//Vienguba ir dviguba kabutė

const kabute12_1= "Vienguba kabute ('), Dviguba kabute (\").";
const kabute12_2= 'Vienguba kabute (\'), Dviguba kabute (").';
const kabute12_3= 'Vienguba kabute (\'), Dviguba kabute (\").';
console.log(kabute12_1);
console.log(kabute12_2);
console.log(kabute12_3);

//backslash 
const backslash ='\\';
const backslash2 = "\\";
console.log(backslash);
console.log(backslash2);

//
const user1 = 'Petras';
const user2 = 'Maryte';
const user3 = 'Jonas';
const user4 = 'Onė';

// Sveiki, <Vardas>!
const hi1 = 'Sveiki, ' + user1 + '!';
console.log(hi1);

console.log('---------------------');
const color =`red`;
console.log(color);

// ${} į teksta iterpia kintamajį. 