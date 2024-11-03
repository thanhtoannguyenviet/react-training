// Const: Biến không thể overwritten

// Let: khác với var, không cho phép declare lại, có phạm vi ảnh hưởng ở block scope (var phạm vi ảnh hưởng toàn cục)

var topic = "JavaScript"
if(topic){
    var topic = "React"
    console.log("block",topic) // React
}
console.log("global", topic) //React

var topic = "JavaScript"
if(topic){
    let topic = "React"
    console.log("block",topic) //React
}
console.log("global", topic) //JavaScript

// Template Strings

const name = " Nguyen Viet Thanh Toan";
const greeting = `Hi ${name}, how are u today?`;
console.log(greeting)