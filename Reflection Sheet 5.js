function flatten_list(lst) {
    if(is_null(lst)) {
        return list();
    }
    else {
        if(is_list(head(lst))) {
            return append(flatten_list(head(lst)), flatten_list(tail(lst)));
        }
        else {
            return append(list(head(lst)), flatten_list(tail(lst)));
        }
    }
}

const LoL = list(list(1, 2), list(3, 4, 5, 6), null, list(7, 8, 9));
flatten_list(LoL);

function tree_sum(tree) {
    if(is_null(tree)) {
        return 0;
    }
    else {
        if(is_list(head(tree))) {
            return tree_sum(head(tree)) + tree_sum(tail(tree));
        }
        else {
            return head(tree) + tree_sum(tail(tree));
        }
    }
}

const my_tree = list(1, list(2, list(3, 4), 5), list(6, 7));
tree_sum(my_tree);

function accumulate_tree(f, op, initial, tree) {
    return accumulate((x, y) => op(f(x), f(y)) , initial, tree);
}