var output = [];

fibonacciGenerator(16);
console.log(output);

function fibonacciGenerator (n) {
    var a = 0;
    var b = 1;    
    
    if (n === 0) {
        output.push(a);
        return output;
    } else if (n === 1) {
        output.push(a,b);
        return output;
    } else {
        output.push(a,b);

        for (let i = 2; i <= n; i++){
        var c = a + b;
        output.push(c);
        a = b;
        b = c;
        }
        return output;
    }
}
