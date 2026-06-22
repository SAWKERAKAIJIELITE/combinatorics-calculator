import { analyzeProblem } from "./problemAnalyzer";
import { isConfident } from "./ConfidenceEvaluator";
// import { buildClarification } from "./ClarificationEngine";
import { toolRegistry } from "../tools/toolRegistry";
import { parseSemantically } from "../ai/SemanticParser";

export async function solveProblem(question)
{
    let problem = analyzeProblem(question);
    // console.log(problem);
    if (!isConfident(problem))
    {
        console.log(problem);
        problem = await parseSemantically(question);
        // return buildClarification(problem);
    }
    const tool = toolRegistry[problem.type];

    if (!tool)
    {
        throw new Error(
            `Tool '${problem.type}' is not implemented yet.`
        );
    }

    return tool.solve(problem);
    // switch (problem.operation)
    // {
    //     case "combination":
    //         return CombinationTool.solve(problem.n, problem.r);

    //     case "permutation":
    //         return PermutationTool.solve(problem.n, problem.r);

    //     default:
    //         throw new Error("Unsupported operation");
    // }
}