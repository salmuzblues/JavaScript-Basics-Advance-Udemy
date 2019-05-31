
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

 // Objects  

