

const Stack = require("./stack");

const stack = new Stack();


const text = "Hello world";

for (let i = 0; i < text.length; i++) {
    stack.push(text.charAt(i));
}


let reversed = "";

while (!stack.isEmpty()) {
    reversed += stack.pop();
}

console.log(reversed);

