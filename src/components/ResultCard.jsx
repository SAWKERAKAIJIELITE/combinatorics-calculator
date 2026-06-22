export default function ResultCard({ result })
{
    return (
        <div>
            <h2>{result.type}</h2>

            <p>
                <strong>Formula:</strong>
            </p>
            <p>{result.formula}</p>

            <p>
                <strong>Substitute Values:</strong>
            </p>
            <p>{result.substitution}</p>

            <p>
                <strong>Expand Factorials:</strong>
            </p>
            <p>{result.expansion}</p>

            <p>
                <strong>Result:</strong>
            </p>
            <h3>{result.result}</h3>
        </div>
    );
}