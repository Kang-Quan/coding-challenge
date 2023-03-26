var sum_to_n_a = function(n) {
    // your code here
    // ap sum of n terms. 
    // n/2 (a + l) O(1) solution
    if (n === 0) {
        return 0;
    }
    return (n / 2) * (1 + n);
};

var sum_to_n_b = function(n) {
    // your code here
    // naive solution O(n)
    if (n === 0) {
        return 0;
    }
    sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};

var sum_to_n_c = function(n) {
    // your code here
    // naive recursion O(n)
    if (n === 0) {
        return 0;
    } 
    return n + sum_to_n_c(n - 1);
};


console.log(sum_to_n_a(1000))
console.log(sum_to_n_b(1000))
console.log(sum_to_n_c(1000))