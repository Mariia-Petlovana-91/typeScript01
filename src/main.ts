import { username, age, toggle, empty, callback } from './basic/1';
import { person } from './basic/2';
import { multi, FILTERS } from './basic/3';
import { showMessage, calc, customError } from './basic/4';
import { isWeekend, DayOfWeek } from './basic/5';
import { poly,mango } from './basic/6';


console.log(`Користувач ${username} будівельник.Йому років ${age}`);
console.log(`${toggle} і ${empty}`);
const result: number = callback(age);
console.log(result);

console.log(`Користувач ${person[0]} аніматор.Йому років ${person[1]}`);

function onClick(string: string) : string {
  if (string === FILTERS.DISABLE) {
    return `Ви клацнули ${FILTERS.DISABLE}!`
  } else if(string === FILTERS.ENABLE) {
    return `Ви клацнули ${FILTERS.ENABLE}!`
  } else {
    return `Опції "${string}" не існує!`
  }
}
console.log(multi);
console.log(onClick('enable'));
console.log(onClick('disable'));
console.log(onClick('Hello😁'));

function seyResult(number:number): void{
  if (number <= calc(4, 1)) {
    showMessage("Ви вказали правильне число");
  } else {
    console.log('Упссс Ви вказали неправильне число!Бай,бай🥺')
    customError();
  }
}
seyResult(2);
// seyResult(9);

console.log(isWeekend(DayOfWeek.Monday));
console.log(isWeekend(DayOfWeek.Saturday));


console.log(poly);
console.log(mango);







  

