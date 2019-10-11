// we have to create modules  wih IIFE and closure
/* First module Budget Controller */
// this module handles our buget data 
// this variable is going to be immediately invoked function expression that will 
// return an object. IIEF  is simply an anonymous function wrapped in parenthesis 
// with IIEF  you can make a private variables and functions 
var budgetController = (function(){
  // create class with its constructor
  var Expense = function (id, description, value){
    this.id = id; 
    this.description = description; 
    this.value = value; 
  }
  var Income = function (id, description, value){
    this.id = id; 
    this.description = description; 
    this.value = value; 
  }
  // we need to store all data, but we are going to do in an object 
  var data = {
      allItems:  {
        exp: [],
        inc: []
      }, 
      totals:{
          exp: 0,
          inc: 0
      }
  }

  return {
      addItem: function(type, des, val){
        var newItem, ID;
        // here we are going to take the last value inside of array, not from the index 
        //[1 2 3 4 5], next ID = 6 
        //[1 2 8 10], next ID = 11 
        // ID = last ID  + 1; 
        // create new ID 
        if(data.allItems[type].length > 0){
            // first it goes the object data then data.allItems goes into allItems Object, then if you want some variable, 
            // from this object we will write like this data.allItems[ exp or inc] then if you want to catch 
            // the index write like this data.allItems[exp][data.allItems[exp].length -1]
            // then if you require some variable from an pobject like this, exp[{id:0, des:"car"..}, {}]
            // write out like this data.allItems[exp][data.allItems[exp].length -1].id, as a result you will get 
            // the id for this case it is 0 (id:0); 
            ID = data.allItems[type][data.allItems[type].length - 1].id  + 1;
        }else {
            ID = 0; 
        }
        
        // create new item based on 'inc' or 'exp' type  
        if(type === 'exp'){
            newItem = new Expense(ID, des, val); 
        }else if(type === 'inc'){
            newItem = new Income(ID, des, val);  
        }
        // push it into our data structure 
        data.allItems[type].push(newItem); 
        // return element 
        return newItem; 
      },

      // this is only for testing console
      testing: function(){
        console.log(data); 
      }
  }

})(); // () this invokes the function  

/*  Second Module UI Controller */

var UIController = (function(){

    // here space all variables or functions are private
    var DOMstrings = {
        inputType: '.add__type',
        inputDesc: '.add__description', 
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    } 
    // retriving data all values from the button 
    // that is public, so we have to use a return object 
    return {
        getInput: function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value, // it will be either inc or exp 
                description: document.querySelector(DOMstrings.inputDesc).value, 
                value: document.querySelector(DOMstrings.inputValue).value
            }           
        },
        addListItem: function(obj, type){
            var html, newHtml; 
            // Create  HTML string with placeholder text 
            if(type === 'inc'){
            html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div>'+
                   '<div class="right clearfix"><div class="item__value">%value%</div>'+
                   '<div class="item__delete"><button class="item__delete--btn">'+
                   '<i class="ion-ios-close-outline"></i></button></div></div></div>';
            }else if(type === 'exp'){
            html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div>'+
                   '<div class="right clearfix"><div class="item__value">%value%</div>'+
                   '<div class="item__percentage">21%</div><div class="item__delete">'+
                   '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';    
            }
            //Replace the placeholder text with some actual data. 
            newHtml = html.replace()
            // insert the html into the DOM 
        },
        getDOMstrings: function(){
            return DOMstrings; 
        }
    } 

})(); 



/* Global  APP Conrtoller MAIN CONTROLLER */
var controller = (function(budgetCtrl, UICtrl){
   // Here in controller we will set up all functions 
   // validation Inputs 
    function validation(input){
        var val= false; 
        if(input.description === "" || input.description === undefined){
            return val; 
        } 
        if(input.value === "" || input.value === undefined){
            return val;  
        }
    
        return true; 
    }

    // Set up event Listeners 
    var setUpEventListners = function (){

        var DOM = UICtrl.getDOMstrings();

        // Listener this is for the click  button 
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);  

        // Keypress event 
        // this is an eventListener but global web key Enter  
        document.addEventListener('keypress', function(event){
        // event.which is used for older webs 
        if (event.keyCode === 13 || event.which === 13){
            console.log("Enter was pressed"); 
            ctrlAddItem(); 
        }
    }); 
    }
    

     
    // created a function 
    var ctrlAddItem = function(){
        // variables
        var input, newItem; 
         // 1. get the field input data 
            input = UICtrl.getInput();
            var checkInput = validation(input);  
            if(checkInput){
                console.log(input); 
            }else{
                alert("Please missing an input"); 
            }
        // 2. Add  the item  to the budget  controller 
            newItem = budgetController.addItem(input.type, input.description, input.value); 
        // 3. Add the item to the UI 

        // 4. calculate the budget 

        // 5. display the budget on the UI
    }

    // Create a public  initialization function 
    return {
        init: function (){
            console.log('Aplication has started.!'); 
            setUpEventListners(); 
        }
    }

})(budgetController, UIController); 

controller.init(); 
