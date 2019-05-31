
// javascript Object 

 var john = {
    name: 'jhon', 
    yearOfBirth: 1990,
    job: 'teacher' 
 }; 

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
  /* END PTOTOTYPE  */

  var Mike = new Person('Mike', 1985, 'Designer'); 
  var Rosa = new Person('Rosa', 1982, 'translater'); 

  Mike.calculateAge(); 
  Rosa.calculateAge(); 
  console.log(Mike.name + ' loves ' + Mike.hobby); 
  console.log(Rosa.name + ' loves ' + Rosa.hobby); 
  