var output = [];

fibonacciGenerator(16);
console.log(output);

function fibonacciGenerator (n) {
    var a = 0;
    var b = 1;    
    
    if (n === 0) {
        return output;
    } else if (n === 1){
        output.push(a);
        return output;
    } else if (n === 2){
        output.push(a,b);
        return output;
    } else if (n >= 3){
        output.push(a,b);

        for (let i = 3; i <= n; i++){
        var c = a + b;
        output.push(c);
        a = b;
        b = c;
        }
        return output;
    }
}
