function hof_example(n, initial, f) {
    // f is an operation done on n and n - 1
    return n === 0
           ? initial
           : f(n, hof_example(n - 1, initial, f));
}

const x = (x, y) => x * y; 
const y = (x, y) => x + y; 

display(hof_example(5, 1, x)); // factorial
display(hof_example(5, 0, y));

function iterative_factorial(n) {
    function compute(n, x) {
        return n === 1
            ? x
            : compute(n - 1, n * x);
    }
    return compute(n, 1);
}

display(iterative_factorial(5));

function recursive_factorial(n) {
    return n === 1
           ? 1
           : n * recursive_factorial(n - 1);
}

display(recursive_factorial(5));