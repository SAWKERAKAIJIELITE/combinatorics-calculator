import { useState } from "react";

export default function CalculatorForm({ onCalculate })
{
    const [n, setN] = useState("");
    const [r, setR] = useState("");
    const [operation, setOperation] = useState("combination");

    function handleSubmit(e)
    {
        e.preventDefault();

        onCalculate({
            n: Number(n),
            r: Number(r),
            operation,
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>N:</label>
                <input
                    type="number"
                    value={n}
                    onChange={(e) => setN(e.target.value)}
                />
            </div>

            <div>
                <label>R:</label>
                <input
                    type="number"
                    value={r}
                    onChange={(e) => setR(e.target.value)}
                />
            </div>

            <div>
                <select
                    value={operation}
                    onChange={(e) => setOperation(e.target.value)}
                >
                    <option value="combination">Combination C(n,r)</option>
                    <option value="permutation">Permutation P(n,r)</option>
                </select>
            </div>

            <button type="submit">
                Calculate
            </button>
        </form>
    );
}