console.log('hi');
let me = 'imalex';
console.log(me);

let interestrate = 0.3;
interestrate = 1; 
console.log(interestrate); //changable variable

const hsfskfsh = 10; //not changable variable(const)

let person = {  //object
name: 'alex',
age: 15
};

console.log(person);

person.name = "xela"; //change value
console.log(person);

let colors = ['red', 'green']; //array
console.log(colors[1]); // show one item

colors[2] = 15; // add an item
console.log(colors);

function dosmt() {      //function
    console.log('hi world');
}

dosmt(); //call a function

function tellname(name, lastname) {      //function with a parameter
    console.log('hi ' + name + ' ' + lastname);
}

tellname('alex', 'vietrov'); //call a function with a argument

function square(number) {
    return number * number;
}
let numberr = square(4);
console.log(numberr); // or console.log(square(2));
