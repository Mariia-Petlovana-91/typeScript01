import { username, age, toggle, empty, callback } from './basic/1';
import { person } from './basic/2';
import { multi, FILTER } from './basic/3';
import { showMessage,calc,customError } from './basic/4';

console.log(`Користувач ${username} будівельник.Йому років ${age}`);
console.log(`${toggle} і ${empty}`);
const result: number = callback(age);
console.log(result);

console.log(`Користувач ${person[0]} аніматор.Йому років ${person[1]}`);

function onClick(string: string) : string {
  if (string === FILTER.DISABLE) {
    return `Ви клацнули ${FILTER.DISABLE}!`
  } else if(string === FILTER.ENABLE) {
    return `Ви клацнули ${FILTER.ENABLE}!`
  } else {
    return `Опції "${string}" не існує!`
  }
}
console.log(multi);
console.log(onClick('enable'));
console.log(onClick('disable'));
console.log(onClick('Hello😁'));

function seyHello(number:number): void{
  if (number <= calc(4, 1)) {
    showMessage("Ви вказали правильне число");
  } else {
    console.log('Упссс Ви вказали неправильне число!Бай,бай🥺')
    customError();
  }
}
seyHello(2);
seyHello(9);






  

