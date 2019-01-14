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

// var firstName = 'Jhon';
// var age = 22;
// // if it is true, print before ? === if block   and : === else block 
// age >= 18 ? console.log(`${ firstName } drinks beer`) :
//     console.log(`${ firstName } drinks juice`);
// // another way 
// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);
// if (age > 18) {
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }
// console.log('He can drink ' + drink);
// // switch statement 

// var job = 'teacher';
// switch (job) {
//     case 'teacher':
//         console.log(firstName + ' teaches kids how to code');
//         break;
//     case 'driver':
//         console.log(firstName + 'drives an uber in callao');
//         break;
//     case 'designer':
//         console.log(firstName + 'designs websites');
//         break;
//     default:
//         console.log(firstName + 'does something else');
// }
// // this is a way to bring a true result, it will compare with the case 
// age = 17;
// switch (true) {

//     case age < 13:
//         console.log('He is a boy');
//         break;
//     case age >= 13 && age <= 20:
//         console.log('He is a teenager');
//         break;
//     case age > 20 && age < 30:
//         console.log('He is a young man, indeed.');
//         break;
//     default:
//         console.log('He is a man.');
// }
/** Truthy and Falsy values and equality operators  */
//Falsy  values: undefined, null, 0, '', NaN (this is for number);
// truthy values: NOT falsy values
// var height;
// height = 0; // it is a falsy value, 
// // but we can fixy it usuing  operator ||
// if (height || height === 0) { // if the variable just only declared, the if statement brings FALSE
//     console.log('Variable is defined');
// } else {
//     console.log('Variable has not been defined');
// }
// height = 23;
// // Equality operators
// // this is going to be true because this == changes the string to number 
// // but this === compares two variables then they do not match, because one is a number
// // variable and the other is a String. 
// if (height == '23') {
//     console.log('the == operator does type coercion');
// }

// var JhonTeamScroreAverage;
// var MikeTeamScroreAverage;

// JhonTeamScroreAverage = (89 + 120 + 103) / 3;
// MikeTeamScroreAverage = (116 + 94 + 123) / 3;

// if (JhonTeamScroreAverage > MikeTeamScroreAverage) {
//     console.log('The winner is Jhon Teams,and its results is ' + JhonTeamScroreAverage);
// } else if (MikeTeamScroreAverage > JhonTeamScroreAverage) {
//     console.log('The winner is Mike Teams and its results is ' + MikeTeamScroreAverage);
// } else {
//     console.log('there is a draw ');
// }
// //question 3 
// JhonTeamScroreAverage = 222;
// console.log('Question number 3');
// if (JhonTeamScroreAverage > MikeTeamScroreAverage) {
//     console.log('The winner is Jhon Teams,and its results is ' + JhonTeamScroreAverage);
// } else {
//     console.log('The winner is Mike Teams and its results is ' + MikeTeamScroreAverage);
// }
// JhonTeamScroreAverage = (89 + 120 + 103) / 3;
// MariaTeamScroreAverage = (97 + 134 + 105) / 3;
// console.log(JhonTeamScroreAverage);
// console.log(MikeTeamScroreAverage);
// console.log(MariaTeamScroreAverage);
// if (JhonTeamScroreAverage > MikeTeamScroreAverage && JhonTeamScroreAverage > MariaTeamScroreAverage) {
//     console.log(`The winner is Jhon with value  ${ JhonTeamScroreAverage }`);
// } else if (MikeTeamScroreAverage > JhonTeamScroreAverage && MikeTeamScroreAverage > MariaTeamScroreAverage) {
//     console.log(`The winner is Mike with value ${ MikeTeamScroreAverage }`);
// } else {
//     console.log(`The winner is Maria with value ${ MariaTeamScroreAverage }`);
// }
// JhonTeamScroreAverage = 124;
// MikeTeamScroreAverage = 115;
// MariaTeamScroreAverag = 112;
// if (JhonTeamScroreAverage > MikeTeamScroreAverage && JhonTeamScroreAverage > MariaTeamScroreAverage) {
//     console.log(`The winner is Jhon with value  ${ JhonTeamScroreAverage }`);
// } else if (MikeTeamScroreAverage > JhonTeamScroreAverage && MikeTeamScroreAverage > MariaTeamScroreAverage) {
//     console.log(`The winner is Mike with value ${ MikeTeamScroreAverage }`);
// } else if (MariaTeamScroreAverag > JhonTeamScroreAverage && MariaTeamScroreAverag > MikeTeamScroreAverage) {
//     console.log(`The winner is Maria with value ${ MariaTeamScroreAverage }`);
// } else {
//     console.log('there is a draw');
// }
/** FUNCTIONS */

// function calculateAge(birthYear) {
//     return 2019 - birthYear;
// }
// // calling functions 
// var ageJhon = calculateAge(1982);
// var ageMarelin = calculateAge(1990);
// var ageRichard = calculateAge(1994);

// console.log(` Juans'age ${ ageJhon }`);
// console.log(` Marelins'age ${ ageMarelin }`);
// console.log(` Richards'age ${ ageRichard }`);

// // method to obtain the retirement 
// function yearsUntilRetirement(year, firstname) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(firstname + ' retires in ' + retirement + ' years.');
//     } else {
//         console.log(firstname + ' is already retired.');
//     }
// }

// yearsUntilRetirement(1982, 'Juan');
// yearsUntilRetirement(1990, 'Marelin');
// yearsUntilRetirement(1940, 'Richard');

/*** Function Statementss and Expresions */
// Function declaration 
// function (whatDoYouDo(job, firstname)){}; 
/** Function  Expression*/
// var whatDoYouDo = function(job, firstname) {
//     switch (job) {
//         case 'teacher':
//             // return finishes the function so we do not need Break statement. 
//             return firstname + ' teaches kids how to code';
//         case 'driver':
//             return firstname + ' drives a cab in Callao';
//         case 'designer':
//             return firstname + ' designs beautiful websites';
//         default:
//             return firstname + ' does somethisng else';
//     }
// }
// console.log(whatDoYouDo('teacher', 'jhon'));
// console.log(whatDoYouDo('designer', 'jane'));
// console.log(whatDoYouDo('retire', 'Marelin'));

/** ARRAYS */
// initialize new array
// var names = ['jhon', 'Mark', 'Jane'];
// var years = new Array(1990, 1978, 1967);
// console.log(names[2]);
// console.log(names.length);

// // mutate array data 
// names[1] = 'Ben';
// names[names.length] = 'Mary';
// console.log(names);
// //different data Types 
// var jhon = ['Jhon', 'Smith', 1990, 'teacher', false];
// // the push() function adds the element at the end of element 
// jhon.push('blue');
// // unshift  adds the element at the beginning of the arrays. 
// jhon.unshift('MR.');
// // to remove the last element of the array.
// jhon.pop();
// // to remove the first element of the array.
// jhon.shift();
// console.log(jhon);
// // indexOf() it will bring the positions of original array. 
// console.log(jhon.indexOf(1990));

// // checking if arrys has a value 'designer'
// var isDesigner = jhon.indexOf('designer') === -1 ? 'jhon is not a  designer' :
//     'Jhon is a designer';
// console.log(isDesigner);
/*** CODING CHALLENGE 3  */

// var billsRest1 = 124;
// var billsRest2 = 48;
// var billsRest3 = 268;
// var JhonTips = [];
// var JhonAmounts = [];
// var tip = function(paidmentBill, name) {
//         var tip;
//         if (paidmentBill < 50) {
//             tip = paidmentBill * 0.2;
//             console.log(name + ' the tip 20% is ' + tip);
//             return tip;
//         } else if (paidmentBill > 50 && paidmentBill < 200) {
//             tip = paidmentBill * 0.15;
//             console.log(name + ' the tip  15 % is ' + tip);
//             return tip;
//         } else if (paidmentBill > 200) {
//             tip = paidmentBill * 0.1;
//             console.log(name + ' the tip 10% is ' + tip);
//             return tip;
//         } else {
//             console.log(name + ', there is not a tip');
//         }
//     }
//     //console.log(tip(billsRest1, 'juan '));
// JhonTips.push(tip(billsRest1, 'juan'));
// console.log(JhonTips);
// JhonTips.push(tip(billsRest2, 'juan'));
// console.log(JhonTips);
// JhonTips.push(tip(billsRest3, 'juan'));
// console.log(JhonTips);
// JhonAmounts.push(JhonTips[0] + billsRest1);
// JhonAmounts.push(JhonTips[1] + billsRest2);
// JhonAmounts.push(JhonTips[2] + billsRest3);
// console.log(JhonAmounts);
/** Objects and Properties */
// create an Object 
// object literal 
// var john = {
//         firstName: 'Jhon',
//         lastName: 'smith',
//         birthYear: 1990,
//         family: ['Jane', 'Mark', 'Bob', 'Emily'],
//         job: 'Teacher',
//         isMarried: false
//     }
//     // How to show of properties 
// console.log(john.firstName);
// // another way to show values of properties
// console.log(john['lastName']);
// // inserting a value the name.
// var x = 'birthYear';
// console.log(john[x]);
// // Mutate some properties, changing properties.
// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);
// // new Object syntax 
// // Another way to create an OBJECT 
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);

/*** OBJECTS AND METHODS  */
// //object literal 
// var john = {
//     firstName: 'Jhon',
//     lastName: 'smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'Teacher',
//     isMarried: false,
//     calcAge: function() {
//         //  return 2019 - this.birthYear; OR 
//         // this.age is going to create a property  age for jhon object
//         this.age = 2019 - this.birthYear;
//     }
// };
// // var age = john.calcAge();
// // john.age = age;
// // just calling method 
// john.calcAge();
// console.log(john);

/**  CODING CHALLENGE 4  */
// JhonMass = 85;
// MarkMass = 90;
// JhonHeight = 1.70;
// MarkHeight = 1.75;
// var Jhon = {
//     fullName: 'Jhon Smith',
//     mass: 85,
//     height: 1.70,
//     calcBIMJhon: function() {
//         this.bmi = this.mass / (this.height ^ 2);
//         return this.bmi;
//     }
// };
// var Mark = {
//     fullName: 'Mark Smith',
//     mass: 90,
//     height: 1.75,
//     calcBIMark: function() {
//         this.bmi = this.mass / (this.height ^ 2);
//         return this.bmi;
//     }
// };


// if (Jhon.calcBIMJhon() > Mark.calcBIMark()) {
//     console.log(`The winner is ${ Jhon.fullName } whit value BMI: ${ Jhon.calcBIMJhon() }`);
// } else if (Mark.calcBIMark() > Jhon.calcBIMJhon()) {
//     console.log(`The winner is ${ Mark.fullName } whit value BMI: ${ Mark.calcBIMark() }`);
// } else {
//     console.log(`they have the same BMI, BMIJhon: ${ Jhon.calcBIMJhon() } BMIMark: ${ Mark.calcBIMark() }`);
// }

/** LOOPS AND ITERATION */
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }
// var jhon = ['jhon', 'smith', 1990, 'designer', false];
// jhon.push('blue');
// // for loop
// for (let i = 0; i < jhon.length; i++) {
//     console.log(jhon[i]);
// }
// //while loop
// var i = 0;
// while (i < jhon.length) {
//     console.log(jhon[i]);
//     i++;
// }
// var jhon = ['jhon', 'smith', 1990, 'designer', false];
// jhon.push('blue');
// for (let i = 0; i < jhon.length; i++) {
//     if (typeof jhon[i] !== 'string') continue;
//     console.log(jhon[i]);
// }
// console.log('with break');
// for (let i = 0; i < jhon.length; i++) {
//     if (typeof jhon[i] !== 'string') break;
//     console.log(jhon[i]);
// }
// // looping backwards
// for (var j = jhon.length - 1; j >= 0; j--) {
//     console.log(jhon[j]);
// }
/** CODING CHALLENGE 5  */
// var
var tips = [];
var total = [];
var jhon = {
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        var tip = [];
        for (var i = 0; i < this.bills.length; i++) {

            if (this.bills[i] < 50) {
                tip[i] = this.bills[i] * 0.2;
            } else if (this.bills[i] > 50 && this.bills[i] < 200) {
                tip[i] = this.bills[i] * 0.15;
            } else {
                tip[i] = this.bills[i] * 0.1;
            }
        }
        return tip;
    }
}

for (var i = 0; i < jhon.bills.length; i++) {
    this.tips[i] = jhon.calcTips()[i];
    this.total[i] = this.tips[i] + jhon.bills[i];
    console.log(`the tip for the restaurant ${ i + 1 } is ${ this.tips[i] }`);
    console.log(`Paid amounts for the restaurant ${ i + 1 } is ${ this.total[i] }`);
}
var Mark = {
    bills: [77, 375, 110, 45],
    calcTips: function() {
        var tip = [];
        for (var i = 0; i < this.bills.length; i++) {

            if (this.bills[i] < 100) {
                tip[i] = this.bills[i] * 0.2;
            } else if (this.bills[i] > 100 && this.bills[i] < 300) {
                tip[i] = this.bills[i] * 0.1;
            } else {
                tip[i] = this.bills[i] * 0.25;
            }
        }
        return tip;
    }
}

var tipsMark = [];
var totalMark = [];
for (var i = 0; i < Mark.bills.length; i++) {
    this.tipsMark[i] = Mark.calcTips()[i];
    this.totalMark[i] = this.tipsMark[i] + Mark.bills[i];
    console.log(`the tip for the restaurant ${ i + 1 } is ${ this.tipsMark[i] }`);
    console.log(`Paid amounts for the restaurant ${ i + 1 } is ${ this.totalMark[i] }`);
}
var averageTipsMArk = () => {
    let sum = 0;
    for (var i = 0; i < this.Mark.bills.length; i++) {
        sum += this.tipsMark[i];
    }
    return sum / this.Mark.bills.length;
}
var averageTipsJhon = () => {
    let sum = 0;
    for (var i = 0; i < this.jhon.bills.length; i++) {
        sum += this.tips[i];
    }
    return sum / this.jhon.bills.length;
}

if (averageTipsMArk() > averageTipsJhon()) {
    console.log(`Mark's family paid the highest average:  ${ averageTipsMArk() }`);
} else {
    console.log(`Jhon's family paid the highest average:  ${ averageTipsJhon() }`);
}