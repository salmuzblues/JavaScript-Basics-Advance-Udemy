// //console.log('Hello Alex !!!!!');
// /* variable Mutation and type coercion */
// var name = 'Juan';
// console.log(`His name is ${ name }`);
// var lastName = 'Carranza';
// var age = 36;
// var fullAge = true;
// console.log(`He is ${ age } years old and is ${ fullAge }`);
// // Anoter way to decalre a variable 
// var job, ismarried;
// job = 'Musician';
// ismarried = false;
// // this is show a  short windows for message. alert();
// alert(`Joe is a ${ job } and he is not married ${ ismarried }`);
// // prompt is like a input .
// var lastName = prompt('What is his lastname');
// console.log(name + ' ' + lastName);

// // Basic Operators 
// var now, yearJhon, yearMark;
// now = 2018;
// yearJhon = now - 28;
// yearMark = now - 33;
// console.log(yearJhon);
// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);

// //logical operators 
// var jhonOlder = yearJhon > yearMark; // here it is going to bring a false o true statement 
// console.log(` yearJhon = ${ yearJhon }`);
// console.log(` yearMark = ${ yearMark }`);
// console.log(jhonOlder);
// // typeof operator
// console.log(typeof jhonOlder); // it is bringing the type of operator.
// console.log(typeof yearJhon);
// console.log(typeof 'Mark is older that Jhon');
// var x;
// console.log(typeof x);

// Operator precedents

var now = 2018;
var yearJhon = 1989;
var fullAge = 18;

var isFullAge = (now - yearJhon) >= fullAge;
console.log(now - yearJhon + ' years old');
console.log(isFullAge);

// Grouping 
var ageJhon = now - yearJhon;
var ageMark = 35;
var average = (ageJhon + ageJhon) / 2;
console.log(average);
// Multiple assigments 
var x, y;
x = y = (3 + 5) * 4 - 6; // 32 - 6 = 26; 
console.log(x, y);
// More operators
x = x * 2; /* They are both the same */
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);