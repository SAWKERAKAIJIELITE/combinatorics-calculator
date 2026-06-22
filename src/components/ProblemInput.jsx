import { useState } from "react";

export default function ProblemInput({ onSolve })
{
    const [problem, setProblem] = useState("");

    function handleSubmit(e)
    {
        e.preventDefault();
        if (!problem.trim())
        {
            return;
        }
        onSolve(problem);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="problem">
                Enter your combinatorics problem:
            </label>
            <textarea
                id="problem"
                rows="4"
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                placeholder="Example: Choose 3 students from 10 students"
            />
            <button type="submit">
                Solve
            </button>
        </form>
    );
}