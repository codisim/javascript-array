
const greetFn = new Function(
    'name',
    'email',
    `
        console.log("Hello " + name + ". Is it your Email? " + email)
    `
);

greetFn("Alice", "alice@example.com")