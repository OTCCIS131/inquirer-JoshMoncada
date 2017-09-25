var inquirer = require("inquirer");
var chalk = require("chalk");


console.log('Hello and welcome to my pizza shop!');

//array function for questions and answers
var order = [
    
    {
      name: 'size',
      message: 'What size pizza would you like?',
      choices: ['Small', 'Large', 'Medium' ],
      default: 'Large',
    },

    {
        type: 'confirm',
        name: 'cheese',
        message: 'Would you like extra cheese?',
        default: true,
        filter: function (extra){
            if(value == false){
                return false;
            }
        }
    },
  ];
  
inquirer.prompt(order).then(function (answers) {
console.log('\nYou ordered:');
console.log(JSON.stringify(answers, null, '  '));
});

inquirer.prompt('Is this order correct?').then(function(confirm) {
if(value == true){
    console.log('Wonder! Thank you for your order!');
    console.log('Your pizza is on its way!');
} else if(val == false){
    console.log('Oh no! We are sorry for the inconvenience! Have a nice day!');
}
});
