export function analyzeProblem(text)
{
    const matches = text.match(/\d+/g);
    const numbers = !matches || matches.length < 2 ? [] : matches.map(Number);
    // console.log(numbers.length == 0);
    if (numbers.length == 0)
        return null;
    const r = numbers[0];
    const n = numbers[1];

    const lower = text.toLowerCase();

    for (const [type, keywords] of Object.entries(keywordDictionary))
    {
        const matched = keywords.some(keyword =>
            lower.includes(keyword)
        );
        if (matched)
        {
            return {
                type,
                parameters: { n, r },
                confidence: 95
            };
        }
    }

    return null;

    // throw new Error(
    //     "Unable to determine the required operation."
    // );
}

export const keywordDictionary = {

    combination: [
        "choose",
        "select",
        "committee",
        "pick"
    ],

    permutation: [
        "arrange",
        "order",
        "seat",
        "rank"
    ],

    circularPermutation: [
        "round table",
        "circle",
        "circular"
    ],

    starsAndBars: [
        "distribute",
        "share",
        "allocate"
    ],

    catalan: [
        "balanced parentheses",
        "binary trees"
    ],

    probability: [
        "probability",
        "chance"
    ]

};