function popUp(){
    let greeting = prompt('Greetings! Whats your name?');
    let greet;

    if (greeting != '') {
        greet = `Hello ${greeting}! Welcome to the website.`;
        alert(greet);
    } else{
        prompt("I didn't get that, please type your name?");
    }
    
}
popUp();