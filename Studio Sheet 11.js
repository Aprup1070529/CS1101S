function add_streams(s1, s2) {
    return is_null(s1)
        ? s2
        : is_null(s2)
        ? s1
        : pair(head(s1) + head(s2),
               () => add_streams(stream_tail(s1), stream_tail(s2)));
}

function scale_stream(c, stream) {
    return stream_map(x => c * x, stream);
}

const add_series = add_streams;

const scale_series = scale_stream;

function negate_series(s) {
    return scale_series(-1, s);
}

function subtract_series(s1, s2) {
    return add_series(s1, negate_series(s2));
}

function coeffs_to_series(list_of_coeffs) {
    const zeros = pair(0, () => zeros);
    
    function iter(list) {
        return is_null(list)
            ? zeros
            : pair(head(list), () => iter(tail(list)));
    }
    return iter(list_of_coeffs);
}

const non_neg_integers = integers_from(0);

function fun_to_series(fun) {
    return stream_map(fun, non_neg_integers);
}

const alt_ones = pair(1, () => negate_series(alt_ones));

const zeros = add_series(alt_ones, stream_tail(alt_ones));

const S1 = fun_to_series(x => 1);

const S2 = fun_to_series(x => x + 1);

function stream_interweave(s1, s2) {
    function weave(s1, s2, p) {
        if(p === 1) {
            p = 2;
            return pair(head(s1), () => weave(stream_tail(s1), s2, 2));
        }
        else {
            const temp = s2();
            p = 1;
            return pair(head(temp), () => weave(s1, tail(temp), 1));
        }
    }
    return weave(s1, s2, 1);
}

function stream_pairs3(s) {
    return is_null(s)
        ? null
        : stream_interweave(
            stream_map(sn => pair(head(s), sn), stream_tail(s)),
            () => stream_pairs3(stream_tail(s)));
}

const integers = integers_from(1);
const s3 = stream_pairs3(integers);