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

// var now = 2018;
// var yearJhon = 1989;
// var fullAge = 18;

// var isFullAge = (now - yearJhon) >= fullAge;
// console.log(now - yearJhon + ' years old');
// console.log(isFullAge);

// // Grouping 
// var ageJhon = now - yearJhon;
// var ageMark = 35;
// var average = (ageJhon + ageJhon) / 2;
// console.log(average);
// // Multiple assigments 
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 32 - 6 = 26; 
// console.log(x, y);
// // More operators
// x = x * 2; /* They are both the same */
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x++;
// console.log(x);
// x--;
// console.log(x);
// BMI (body mass Index)
/* 
 FIRST CODING CHALLENGE 
*/
// var BMIjhon, BMImark;
// var JhonMass, MarkMass;
// var JhonHeight, MarkHeight;
// // Formule 
// //BMI = mass / (height ^ 2);

// JhonMass = 85;
// MarkMass = 90;
// JhonHeight = 1.70;
// MarkHeight = 1.75;

// BMIjhon = JhonMass / (JhonHeight ^ 2);
// console.log(` Jhon has a  BMI ${ BMIjhon }`);
// BMImark = MarkMass / (MarkHeight ^ 2);
// console.log(` Marck has a BMI ${ BMImark }`);
// var BMIHeigher = BMIjhon > BMImark;
// console.log(`Is Jhon's BMI higher than Mark's ? ${ BMIHeigher }`);


// if (BMIHeigher) {
//     console.log(`JhonBMI is heigher than MarkBMI`);
// } else {
//     console.log(`MarkBMI is heigher than JhonBMI`);
// }

// /** If / else statements */
// var firstName = 'Jhon';
// var civilStatus = 'single';
// if (civilStatus === 'married') {
//     console.log(firstName + ' is married.');
// } else {
//     console.log(firstName + ' will hopefully marry soon');
// }
// var isMarried = true;
// if (isMarried) {
//     console.log(firstName + ' is married.');
// } else {
//     console.log(firstName + ' will hopefully marry soon');
// }

// BOOLEAN LOGIC 
// !() inverts true  into false or false into true, change the stamment 
// which is inside of parentheses 
// var firstName = 'Jhon';
// var age = 22;
// if (age < 13)
//     console.log('He is a boy');
// else if (age >= 13 && age <= 20) // this is bettewn 13 and 20
//     console.log('He is a teenager');
// else if (age > 20 && age < 30)
//     console.log('He is a young man, indeed.')
// else
//     console.log('He is a man.');
/**  THE TERNERY OPERATOR and SWITCH STATEMENTS */

var firstName = 'Jhon';
var age = 22;
// if it is true, print before ? === if block   and : === else block 
age >= 18 ? console.log(`${ firstName } drinks beer`) :
    console.log(`${ firstName } drinks juice`);
// another way 
var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
if (age > 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}
console.log('He can drink ' + drink);
// switch statement 

var job = 'teacher';
switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code');
        break;
    case 'driver':
        console.log(firstName + 'drives an uber in callao');
        break;
    case 'designer':
        console.log(firstName + 'designs websites');
        break;
    default:
        console.log(firstName + 'does something else');
}
// this is a way to bring a true result, it will compare with the case 
age = 17;
switch (true) {

    case age < 13:
        console.log('He is a boy');
        break;
    case age >= 13 && age <= 20:
        console.log('He is a teenager');
        break;
    case age > 20 && age < 30:
        console.log('He is a young man, indeed.');
        break;
    default:
        console.log('He is a man.');
}