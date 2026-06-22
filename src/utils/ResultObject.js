import { permutation, combination } from "./math";

function factorialString(n)
{
    if (n <= 1) return "1";

    let arr = [];

    for (let i = n; i >= 1; i--)
    {
        arr.push(i);
    }

    return arr.join(" × ");
}

export function buildCombinationSolution(n, r)
{
    const result = combination(n, r);
    return {
        type: "Combination",
        formula: "C(n,r) = n! / (r!(n-r)!)",
        substitution: `C(${n},${r}) = ${n}! / (${r}!(${n - r})!)`,
        expansion: `(${factorialString(n)}) / ((${factorialString(r)})(${factorialString(n - r)}))`,
        result
    };
}

export function buildPermutationSolution(n, r)
{
    const result = permutation(n, r);
    return {
        type: "Permutation",
        formula:"P(n,r) = n! / (n-r)!",
        substitution:`P(${n},${r}) = ${n}! / (${n - r})!`,
        expansion:`(${factorialString(n)}) / (${factorialString(n - r)})`,
        result
    };
}