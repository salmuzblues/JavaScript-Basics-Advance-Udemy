///////////////////////////////////////
// Lecture: Hoisting

// // Functions Declaring 
// function calculateAge(year) {
//     console.log(2016 - year);
// }
// calculateAge(1965);

// // function expression only works after the code 
// // you can not executed before the code.
// // but function declarations it can works before or after making 
// // the function
// // it does not work before, you can not executed here retirement(1965);
// var retirement = function(year) {
//         console.log(65 - (2016 - year));
//     }
//     // here it is ok; 
// retirement(1965); this is a function expressions 
// // variables 
// // console.log(age); it will not work! 
// // we will obtain undefined.  
// var age = 23; // this is declare on Global context 
// console.log(age); // here it works!

// function foo() {
//     //console.log(age); // WRONG! 
//     var age = 65;
//     console.log(age); // here is local variable; 
// }
// foo();
// console.log(age); // here is the global variable 


// ///////////////////////////////////////
// // Lecture: Scoping


// // First scoping example


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }
// // Example to show the differece between execution stack and scope chain

// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third()
//     }
// }
// // it will not work because b and c they are not global variable 
// // so we will get that they are not defined. 
// function third() {
//     var d = 'John';
//     console.log(a + b + c + d);
// }

///////////////////////////////////////
// Lecture: The this keyword
/**  Regular function call  */
// the this keyword points at global object (the window object, in the browser); 
/** method call */
//the this variable points to the object that is calling the method. 
// the this keyword  is not  assigned  a value  until a function where
// it is defined is actually called 
// function calculateAge(year) {
//     console.log(2016 - year);
//     console.log(this);// this only work with window 
// }

// calculateAge(1989);

var jhon = {
    name: 'jhon',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this); // with "this" keyword we call all 
        // the properties the object jhon. 
        console.log(2016 - this.yearOfBirth);

        // function innerFunction() {
        //     console.log(this);
        // }
        // innerFunction(); // inside for another function "this" work
        // // the window and not the object  
    }
}

console.log(jhon.calculateAge());

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};
// we can use a function for another object
// using  this statement.  
mike.calculateAge = jhon.calculateAge;
mike.calculateAge();