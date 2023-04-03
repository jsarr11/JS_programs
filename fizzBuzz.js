var output = ["go!"];

for (let i = 1; i <= 30; i++){
    fizzBuzz();
}

function fizzBuzz() {
    if (output.length % 3 === 0){
        if (output.length % 5 === 0){
            output.push("FizzBuzz");
            console.log(output);
        } else {
            output.push("Fizz");
            console.log(output);
        }
        
    } else if (output.length % 5 === 0){
            output.push("Buzz");
            console.log(output);
    } else {
        output.push(output.length);
        console.log(output);
    }
}
