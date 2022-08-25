/*

Q1. will return 4

Q2. and Q3.

function my_sum(n) {
    return n === 1
        ? 1 * 2
        : n * (n + 1) + my_sum(n-1);
}

recursive, theta(n) time and space

function my_sum(n) {
    function calc(sum, n) {
        return n === 0
            ? sum
            : calc(sum + n * (n + 1), n - 1);
    }
    return calc(0, n);
}

iterative, theta(n) time and theta(1) space

Q4. 

T1 : term, where

function term(a) {
    return a * (a + 1);
}

T2 : 1
T3 : next, where

function next(a) {
    return a + 1;
}

T4 : n

Q5.

function sum(term, a, next, b) {
    function calc(sum, term, a, next, b) {
        return a > b
            ? sum
            : calc(sum + term(a), term, next(a), next, b);
    }    
}