function every_second(items) {
    return (is_null(items) || is_null(tail(items)))
        ? null
        : pair(head(tail(items)), every_second(tail(tail(items))));
}

function sums(items) {
    function compute(items, n, even, odd) {
        return is_null(items)
            ? list(even, odd)
            : n === 0
            ? compute(tail(items), n + 1, even, odd + head(items))
            : compute(tail(items), n - 1, even + head(items), odd);
    }
    return compute(items, 0, 0, 0);
}

draw_data(every_second(list(1, 2, 3, 4, 5)));
draw_data(every_second(list(1, 2, 3, 4, 5, 6)));
draw_data(sums(list(1, 2, 3)));
draw_data(sums(list(1, 2, 3, 4)));