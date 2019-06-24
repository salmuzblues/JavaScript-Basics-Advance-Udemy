
// javascript Object 

/*  var john = {
    name: 'jhon', 
    yearOfBirth: 1990,
    job: 'teacher' 
 }; 
 */
//Function constructor 
// this is like a create a class with its constructor.
// Person is the class function as constructor
  var Person = function( name, yearOfBirth, job ){
    this.name = name; 
    this.yearOfBirth = yearOfBirth; 
    this.job = job; /* 
    this.calculateAge = function() {
        console.log(2019 - this.yearOfBirth); 
    } */
  }

  // Also we can use Prototype to create function for soecifci clase 

  Person.prototype.calculateAge = function() {
     console.log(2019 - this.yearOfBirth); 
  }; 
  
  Person.prototype.hobby = "Listening music"; 
  // END PTOTOTYPE  

  var Mike = new Person('Mike', 1985, 'Designer'); 
  var Rosa = new Person('Rosa', 1982, 'translater'); 

/*   Mike.calculateAge(); 
  Rosa.calculateAge(); 
  console.log(Mike.name + ' loves ' + Mike.hobby); 
  console.log(Rosa.name + ' loves ' + Rosa.hobby);  */

  // Object.creat takes personProp Object and you can use for many object 
  //that you can create 
 var personProp = {
    calculateAge: function(){
        console.log(2019 - this.yearOfBirth); 
    }
 }

  // Object.create   there is one way
  var Jhon = Object.create(personProp); 

  Jhon.name = 'Jhon'; 
  Jhon.lastName = 'Smith'; 
  Jhon.yearOfBirth = 1982; 
  //Jhon.calculateAge(); 

  // Object.create   there is another way

  var Rosario = Object.create(personProp, 
    {
        name: { value: 'Rosario' },
        yearOfBirth: { value: 1969 }, 
        job: { value: 'Designer'}    
    }); 


    // Primitives  
    var a = 23; 
    var b = a; 
    a = 46; 
    console.log(a); 
    console.log(b); 

    //Objects

    var obj1 = {
        name: 'Jhon',
        age: 24
    }; 
    var obj2 = obj1; 

    console.log(obj1.age); 
    console.log(obj2.age); 
    //Functions 
    var age = 27; 
    var obj = {
      name:'Jonas',
      city: 'Lisbon'
    }; 

    function change( a, b ){
      //console.log(a); 
      a = 30;   
      b.city ='San Francisco'; 
    } 
    //When you pass a primitive variable on fuction, if you 
    // do not use variable it does not change   
    /* change(age, obj); 

    console.log(age); 
    console.log(obj.city); */
 // Objects  
 /* Functions are also objects  in Javascript */
 // A function  is an instance  of the object Type; 
 // Function behaves like any other object; 
 // We can store functions in a variable; 
 // We can pass a function  as an argument  to another function; 
 // We can return a function from a function; 


 /* Passing functions as arguments */

 /* var years = [1990, 1982, 1937, 2005, 1998]; 


// main function for storing the results into a new array
  function arrayCalc (arr, fn ){
    var arrRes = []; 
     for( var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i])); 
     } 
     return arrRes; 
  }

  // Create a  functions to calculate the age
  function calculateAge(el){ 
    return 2019 - el;  
  }
  function isFullAge(el){
     return el >= 18; 
  } 
  function maxHeartRate(el){

    if(el >= 18 && el <= 81){
      return Math.round(206.9 - (0.67 * el)); 
    }else {
      return -1; 
    }
  }

  var ages = arrayCalc(years, calculateAge); 
  var fullAges = arrayCalc(ages, isFullAge);
  var rates = arrayCalc(ages, maxHeartRate);  
  console.log("array of ages: " + ages);
  console.log("Array fullAges more than 18: " + fullAges); 
  console.log("RATES HEART: " + rates); 
 */

  /* Functions returning functions */
  function interviewQuestion(job){
    if (job === 'designer'){
      return function (name){
        console.log( name + ', can you please explain what UX design is?'); 
      }
    }else if(job === 'teacher'){
      return function(name){
        console.log('What subject do you teach, ' + name + '?')}
    }else{
      return function(name){
        console.log('Hello ' + name + ', what do you do? ')
      }
    }
  }

  var teacherQuestion = interviewQuestion('teacher');
  var designerQuestion = interviewQuestion('designer');  
  teacherQuestion('Jhon');
  teacherQuestion('Maria');
  teacherQuestion('Miguel'); 
  designerQuestion('Rosa'); 
  designerQuestion('Milagros'); 
  // Other way , the another parenthesis  is for then anonimous function
  interviewQuestion('teacher')('Yonatan'); 

/*  IIFE  pattern (immediately Invoke Function Expressions) */
// Declaration function 

/* function game () {
  var score = Math.random() * 10;  // 0 - 9 
  console.log(score >= 5); 
}
 game();  */

 // statment functions (sentencia) 
 // this function works without calling  
 (function(goodLuck){
  var score = Math.random() * 10;  // 0 - 9 
  console.log(score >= 5 - goodLuck);
 })(4); 
  
 /* CONCEPTS CLOSURES  */

 /* An inner function has always access to the variables and parameters of its outer function,
 even after the outer  function has return  */

 function retirement(retAge){
   var a = ' years left until retirement.'; 
   return function (yearOfBirth) {
     var age = 2019 - yearOfBirth; 
     console.log((retAge - age) + a); 
   }
 }

  var retirementUs = retirement(66); 
  var retirementGerm = retirement(65); 
  var retirementIceland = retirement(67); 

  // Results  insert years of person 
  retirementUs(1982); 
  retirementGerm(1990); 
  retirementIceland(1986); 
  //retirement(66)(1985); 


 /*  function interviewQuestion(job){
    if (job === 'designer'){
      return function (name){
        console.log( name + ', can you please explain what UX design is?'); 
      }
    }else if(job === 'teacher'){
      return function(name){
        console.log('What subject do you teach, ' + name + '?')}
    }else{
      return function(name){
        console.log('Hello ' + name + ', what do you do? ')
      }
    }
  } */
    
/*   function interviewQuestionClosures(job){

    return function(name){
       if(job === 'designer'){
        var a = ', can you please explain what UX design is?'; 
        console.log(name + a);   
      }else if( job === 'teacher'){
        var b = 'What subject do you teach ' + name + '?'
         console.log(b); 
      }else {
        console.log('Hello ' + name + ', what do you do'); 
      }
    }
        
  }

  var respDesigner = interviewQuestionClosures('designer'); 
  respDesigner('Yonatan'); 
  interviewQuestion('teacher')('Richard');  */

  /* BIND, CALL  AND APPLY  */

  var jhon = {
    name: 'Jhon', 
    age: 26, 
    job: 'teacher', 
    presentation: function(style, timeOfDay){
      if(style === 'formal'){
      console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + 
                    this.name + ', I\'m a'+
                    this.job + ' and I\'m '+
                    this.age + ' years old.');  
      }else if(style === 'friendly'){
        console.log('Hey! What\'s up? I\'m ' +
                    this.name + ', I\'m a '+
                    this.job + ' and I\'m '+
                    this.age + ' years old. Have a nice ' +
                    timeOfDay + '.');  
      }
    }
  }

  jhon.presentation('formal', 'morning'); 

  var emily = {
    name: 'Emily', 
    age: 35, 
    job: 'designer'
  }; 

  // Using Jhon's function presentation in Emily´s Object
  // this call() borrows the function 
  jhon.presentation.call(emily, 'friendly', 'afternoon'); 
  // apply() works with array arguments.  
  /* jhon.presentation.apply(emily, [], []);  */
  
  /* Bind is very similar to the call method as well, so it is also to allow us to set  this variable ixplicity 
      THE BIND doesn't immediately call the function but instead it generates  a copy of the function. so tha we can store it somewhere */
  var jhonFriendly = jhon.presentation.bind(jhon, 'friendly'); 

   jhonFriendly('morning'); 
   jhonFriendly('night'); 

   var emilyFormal = jhon.presentation.bind(emily, 'formal'); 

   emilyFormal('afternoon');   



   var years = [1990, 1982, 1937, 2005, 1998]; 

   // main function for storing the results into a new array
     function arrayCalc (arr, fn ){
       var arrRes = []; 
        for( var i = 0; i < arr.length; i++){
           arrRes.push(fn(arr[i])); 
        } 
        return arrRes; 
     }
   
     // Create a  functions to calculate the age
     function calculateAge(el){ 
       return 2019 - el;  
     }
     function isFullAge(limit, el){
        return el >= limit; 
     }

     var ages = arrayCalc(years, calculateAge); 
     var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20)); 
     console.log(ages); 
     console.log(fullJapan); 
