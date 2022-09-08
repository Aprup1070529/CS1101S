function flatten_list(lst) {
    return is_null(lst)
        ? list()
        : is_list(head(lst))
        ? append(flatten_list(head(lst)), flatten_list(tail(lst)))
        : append(list(head(lst)), flatten_list(tail(lst)));
}

const LoL = list(list(1, 2), list(3, 4, 5, 6), null, list(7, 8, 9));
flatten_list(LoL);

function tree_sum(tree) {
    return is_null(tree)
        ? 0
        : is_list(head(tree))
        ? tree_sum(head(tree)) + tree_sum(tail(tree))
        : head(tree) + tree_sum(tail(tree));
}

const my_tree = list(1, list(2, list(3, 4), 5), list(6, 7));
tree_sum(my_tree);

function accumulate_tree(f, op, initial, tree) {
    return accumulate((x, y) => op(f(x), f(y)) , initial, tree);
}

const LoN = list(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
map(x => x % 2 === 0 ? x - 1 : x, LoN);
accumulate((x, y) => x % 2 === 0 ? y : x + y ,0, LoN);