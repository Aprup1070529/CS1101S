function my_map(f, xs) {
    return accumulate((x, y) => pair(f(x), y), null, xs);
}

// my_map(x => x + 1, list(1, 2, 3));

/*
function remove_duplicates(lst) {
    return is_null(lst)
        ? null
        : pair(head(lst), filter(x => x !== head(lst), 
                                                remove_duplicates(tail(lst))));
}

remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2));
// Result: list(1, 2, 3, 4)

remove_duplicates(list("a", "x", "b", "c", "c", "b", "d"));
// Result: list("a", "x", "b", "c", "d")
*/

function makeup_amount(x, coins) {
    if (x === 0) {
        return list(null);
    } 
    else if (x < 0 || is_null(coins)) {
        return null;
    } 
    else {
        // Combinations that do not use the head coin.
        const combi_A = makeup_amount(x, tail(coins));
        // Combinations that do not use the head coin for the remaining amount.
        const combi_B = makeup_amount(x - head(coins), tail(coins));
        // Combinations that use the head coin.
        const combi_C = map(x => pair(head(coins), x), combi_B);
        return append(combi_A, combi_C);
    }
}

makeup_amount(22, list(1, 10, 5, 20, 1, 5, 1, 50));
// Result: list(list(20, 1, 1), list(10, 5, 1, 5, 1), list(1, 20, 1),
//                  list(1, 20, 1), list(1, 10, 5, 5, 1), list(1, 10, 5, 1, 5))

function remove_duplicates(lst) {
    return accumulate((x, y) => pair(x, remove_all(x, y)), null, lst);
}

remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2));
// Result: list(1, 2, 3, 4)

remove_duplicates(list("a", "x", "b", "c", "c", "b", "d"));
// Result: list("a", "x", "b", "c", "d")

function subsets(xs) {
    return is_null(xs)
        ? list(null)
        : append(map(x => pair(head(xs), x), subsets(tail(xs))), 
                                                            subsets(tail(xs)));
}

subsets(list(1, 2, 3));
// Result: list(list(), list(1), list(2), list(3),
// list(1,2), list(1,3), list(2,3), list(1,2,3))

function permutations(a) {
    
}

permutations(list(1, 2, 3));
// Result: list(list(1,2,3), list(1,3,2), 
// list(2,1,3), list(2,3,1), list(3,1,2), list(3,2,1))