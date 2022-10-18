function rotate_matrix(M) {
    function swap(M, i1, j1, i2, j2) {
        const temp = M[i1][j1];
        M[i1][j1] = M[i2][j2];
        M[i2][j2] = temp;
    }
    
    const n = array_length(M);
    
    for (let i = 0; i < n; i = i + 1) {
        for (let j = i; j < n; j = j + 1) {
            swap(M, i, j, j, i);
        }
    }
    
    for (let i = 0; i < n; i = i + 1) {
        for (let j = 0; j < math_floor(n / 2); j = j + 1) {
            swap(M, i, j, i, n - j - 1);
        }
    }
}

const M = [[ 1, 2, 3, 4], [ 5, 6, 7, 8], [ 9, 10, 11, 12], [13, 14, 15, 16]];
rotate_matrix(M);
display(M);