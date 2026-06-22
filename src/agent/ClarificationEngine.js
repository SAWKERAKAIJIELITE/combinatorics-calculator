export function buildClarification(problem)
{
    if (!problem)
    {
        throw new Error(
            "I could not understand the problem."
        );
        // return {
        //     requiresClarification: true,
        //     question: "I could not understand the problem."
        // };
    }

    return {
        requiresClarification: false
    };
}