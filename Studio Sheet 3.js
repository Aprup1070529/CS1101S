import {blank, square, circle, stack, beside, stack_frac, beside_frac, show, 
        heart, ribbon} from "rune";

function moony_1(bottom_right) {
    return stack(beside(circle, blank), beside(square, bottom_right));
}

function moony_2(n) {
	return n === 1
	    ? circle
	    : stack(beside(circle, blank), beside(square, moony_2(n-1)));
}

function moony(n) {
    return n === 0
        ? circle
        : stack_frac(1/n, beside_frac(1/n, circle, blank), 
                          beside_frac(1/n, square, moony(n-1)));    
}

show(moony_1(ribbon));

show(moony_2(5));

show(moony(5));

/* 4.
    Both are recursive processes
    O(n) time and space
    No. of deferred operations
    Assume that beside_frac, stack_frac, takes O(1) time
*/