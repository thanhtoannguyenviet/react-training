const sandwich = {
    bread: "dutch crunch",
    meat: "tuna",
    cheese: "swiss",
    toppings: ["lettuce", "tomato", "mustard"]
};
let { bread, meat } = sandwich;
bread = "garlic";
meat = "turkey";
console.log(bread); // garlic
console.log(meat); // turkey
console.log(sandwich.bread, sandwich.meat); // dutch crunch tuna


// Destructure
const lordify = regularPerson => {
    console.log(`${regularPerson.firstname} of Canterbury`);
};
const regularPerson = {
    firstname: "Bill",
    lastname: "Wilson"
};
lordify(regularPerson)

// Thông qua parameter
const lordify = ({ firstname }) => {
    console.log(`${firstname} of Canterbury`);
};
const regularPerson = {
    firstname: "Bill",
    lastname: "Wilson"
};
lordify(regularPerson);

// Deep parameter
const regularPerson = {
    firstname: "Bill",
    lastname: "Wilson",
    spouse: {
        firstname: "Phil",
        lastname: "Wilson"
    }
};

const lordify = ({ spouse: { firstname } }) => {
    console.log(`${firstname} of Canterbury`);
};
lordify(regularPerson); // Phil of Canterbury

// Destructuring Arrays
const [firstAnimal] = ["Horse", "Mouse", "Cat"]
console.log(firstAnimal); // Horse

const [, , thirdAnimal] = ["Horse", "Mouse", "Cat"];
console.log(thirdAnimal); // Cat


// Object Literal Enhancement
const name = "Toan";
const age = 25;
const greeting = function(){
    console.log(`My name is ${this.name}, I'm ${age} years old`)
}
const toanPerson = {name,age,greeting }
console.log(toanPerson)
toanPerson.greeting()