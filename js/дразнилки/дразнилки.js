// Спрашиваем, хочет ли он дразнилку
r = confirm('Хочешь дразнилку?'); 
// Если нет
if(r == false) {
	alert('Ну и ладно(')
}
// Если да
else {
// Просим ввести своё имя
let name = prompt('Введи своё имя!');
// Если он его не ввёл
if(name == '') {
	alert('Ты не ввёл своё имя')
}
// Если нажал отмена
else if(name == null) {
	alert('Ну ладно')
}
// Если ввёл и нажал ок  
else {
// слова к дразнилкам
let randAnimals = ['свиньи', 'собаки', 'жирафа', 'бегемота', 'макаки', 'слона', 'кота', 'носорога'];
let randPril = ['кривой', 'тупой', 'большой', 'вонючий', 'страшный', 'уродливый', 'маленький', 'ленивый'];
let randBody = ['нос', 'могз', 'рот', 'лоб', 'череп', 'зуб', 'затылок', 'глаз'];
let randBodyA = ['хвост', 'рог', 'лапа', 'хобот', 'шея', 'глаз', 'волос', 'нос'];
// // делаем дразнилку
let randA = Math.floor(Math.random()*randAnimals.length);
let randP = Math.floor(Math.random()*randPril.length);
let randB = Math.floor(Math.random()*randBody.length);
let randBA = Math.floor(Math.random()*randBodyA.length);
let str = name + ', у тебя ' + randBody[randB] + ' ещё более ' + randPril[randP] + ' , чем ' + randBodyA[randBA] + ' у ' + randAnimals[randA];
// выводим дразнилку
alert(str)
// спрашиваем, хочешь ещё дразнилку
q = confirm('Хочешь ещё дразнилку?');
if(q == false) {
alert('Ну как хочешь(')
}
// если человек хочет, выводим ещё дразнилку
while(q == true) {
let randA = Math.floor(Math.random()*randAnimals.length);
let randP = Math.floor(Math.random()*randPril.length);
let randB = Math.floor(Math.random()*randBody.length);
let randBAs = Math.floor(Math.random()*randBodyA.length);
let str = name + ', у тебя ' + randBody[randB] + ' ещё более ' + randPril[randP] + ' , чем ' + randBodyA[randBAs] + ' у ' + randAnimals[randA];
alert(str)
q = confirm('Хочешь ещё дразнилку?');
if(q == false) {
alert('Ну как хочешь(')
}
}
}
}