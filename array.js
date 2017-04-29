const numbers =  [1,2,3,4,5];
console.log('--------------------Filter---------------------------')

console.log(numbers.filter( (n) => n > 4 ));
console.log('--------------------Reduce---------------------------')

console.log(numbers.reduce((acum, current) => acum + current, 10));
console.log('--------------------Find-----------------------------')

console.log(numbers.find( (n) => n===2 ));

console.log('--------------------Set-----------------------------')

const s = new Set();

s.add(1);
s.add(3);
s.add(1);
s.add(2);
s.add(4).add(5).add(6);

console.log(s);
console.log(s.has(3));
console.log(s.has(55));
console.log(s.delete(2));
console.log(s);

console.log('--------------------Map-----------------------------')


const animais = new Map();
animais.set('cachorro',34);
animais.set('gato',3);

console.log(animais);
console.log(animais.has('coelho'));
console.log(animais.get('cachorro'));


