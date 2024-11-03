// Hoisting

hello();

function hello(){
    console.log("Hello")
}
// Function expressions
// hi();
const hi = function (){
    console.log("Hi")
}
hi();
// Passing arguments, Default Parameter, return function

const greeting = function(name = "Bae"){
    return `Hi ${name}, you are so beautiful`
}

// Arrow function
const greeting1 = (name, land) =>{
    if (!name) {
        throw new Error("A firstName is required to lordify");
    }
    if (!land) {
        throw new Error("A lord must have a land");
    }
    return `My name is ${name}. I come from ${land}`;
};
console.log(greeting1("Toan"))
//// ADVANCE
const tahoe = {
    mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
    print: function(delay = 1000) {
        setTimeout(function() {
            console.log(this.mountains.join(", "));
        }, delay);
    }
};
tahoe.print(); // Uncaught TypeError: Cannot read property 'join' of undefined

const tahoe = {
    mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
    print: function(delay = 1000) {
        setTimeout(() => {
            console.log(this.mountains.join(", "));
        }, delay);
    }
};
tahoe.print(); // Freel, Rose, Tallac, Rubicon, Silver

//HOW ABOUT IT?
const tahoe = {
    mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
    print: (delay = 1000) => {
        setTimeout(() => {
            console.log(this.mountains.join(", "));
        }, delay);
    }
};
tahoe.print();