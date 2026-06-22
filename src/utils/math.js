function factorial(n)
{
    if (n < 0) throw new Error("Negative numbers not allowed");

    let result = 1;

    for (let i = 2; i <= n; i++)
    {
        result *= i;
    }

    return result;
}

// function checkNBiggerThanR(n,r) {
//     if (n < 0 || r < 0) throw new Error("Negative numbers not allowed");
//     if (r > n) throw new Error("r cannot be greater than n");
// }

function permutation(n, r)
{
    if (r > n)
    {
        throw new Error(
            "Permutation is impossible because r cannot be greater than n. You cannot arrange more objects than exist."
        );
    }

    return factorial(n) / factorial(n - r);
}

function combination(n, r)
{
    if (r > n)
    {
        throw new Error(
            "Combination is impossible because r cannot be greater than n. You cannot choose more objects than are available."
        );
    }

    return permutation(n, r) / factorial(r);
}

export { combination, permutation }