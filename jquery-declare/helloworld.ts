declare var $;

function sayHello(name) {
    return "Hello World! I'm " + name;
}

let user = "Mario Romano";

$('body').html(sayHello(user));
