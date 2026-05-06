function greet(name, callback) {
    console.log("Hello " + name);

    callback();
}

function sayBye() {
    console.log("How are you");
}

greet("Harshita", sayBye);