import { buildCombinationSolution } from "../utils/ResultObject";

export const CombinationTool = {
    name: "combination",
    solve(problem)
    {
        return {
            error: false,
            data: buildCombinationSolution(problem.parameters.n, problem.parameters.r)
        }
    }
};