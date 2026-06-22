import { buildPermutationSolution } from "../utils/ResultObject";

export const PermutationTool = {
    name: "permutation",
    solve(problem)
    {
        return {
            error: false,
            data: buildPermutationSolution(problem.parameters.n, problem.parameters.r)
        };
    }
};