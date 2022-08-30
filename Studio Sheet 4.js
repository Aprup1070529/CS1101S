function pascal(row, position) {
    return position === 0 || position === row
        ? 1
        : pascal(row - 1, position - 1) + pascal(row - 1, position);
}

/*
    1. 1 
       1
    2. 2
    3. const thrice = f => repeated(f, 3);
       27
    4. a. 33
       b. compose
       c. 1
       d. 2 ^ 54
*/