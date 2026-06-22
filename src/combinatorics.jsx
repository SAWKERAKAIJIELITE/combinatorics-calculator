import React, { useState } from 'react';

function factorial(n)
{
    if (n < 0) return null;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    const steps = [];
    for (let i = 2; i <= n; i++)
    {
        result *= i;
        steps.push(`${i - 1} × ${i} = ${result}`);
    }
    return { value: result, steps };
}

function permutation(n, r)
{
    if (r > n || n < 0 || r < 0) return null;
    const nFact = factorial(n);
    const nrFact = factorial(n - r);
    if (!nFact || !nrFact) return null;

    const value = Math.floor(nFact.value / nrFact.value);
    return {
        value,
        steps: [
            `P(${n}, ${r}) = ${n}! / (${n - r})!`,
            ...nFact.steps.map(s => `n! step: ${s}`),
            ...nrFact.steps.map(s => `(${n - r})! step: ${s}`),
            `Final: ${nFact.value} / ${nrFact.value} = ${value}`
        ]
    };
}

function combination(n, r)
{
    if (r > n || n < 0 || r < 0) return null;
    const nFact = factorial(n);
    const rFact = factorial(r);
    const nrFact = factorial(n - r);
    if (!nFact || !rFact || !nrFact) return null;

    const value = Math.floor(nFact.value / (rFact.value * nrFact.value));
    return {
        value,
        steps: [
            `C(${n}, ${r}) = ${n}! / (${r}! × (${n - r})!)`,
            ...nFact.steps.map(s => `n! step: ${s}`),
            ...rFact.steps.map(s => `r! step: ${s}`),
            ...nrFact.steps.map(s => `(${n - r})! step: ${s}`),
            `Denominator: ${rFact.value} × ${nrFact.value} = ${rFact.value * nrFact.value}`,
            `Final: ${nFact.value} / ${rFact.value * nrFact.value} = ${value}`
        ]
    };
}

function App()
{
    const [problemType, setProblemType] = useState('permutation');
    const [n, setN] = useState(5);
    const [r, setR] = useState(3);
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const calculate = () =>
    {
        setError('');
        let res = null;

        if (problemType === 'permutation')
        {
            res = permutation(n, r);
        } else if (problemType === 'combination')
        {
            res = combination(n, r);
        } else if (problemType === 'factorial')
        {
            res = factorial(n);
            if (res)
            {
                res = { value: res.value, steps: [`${n}! = ${res.value}`, ...res.steps] };
            }
        }

        if (!res)
        {
            setError('Invalid input. Ensure n ≥ r ≥ 0 and n is not too large.');
            setResult(null);
        } else
        {
            setResult(res);
        }
    };

    return (
        <div style={{
            maxWidth: '800px',
            margin: '40px auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            background: '#f9f9f9',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
            <h1 style={{ textAlign: 'center', color: '#333' }}>
                Combinatorics & Permutations Calculator
            </h1>

            <div style={{ marginBottom: '20px' }}>
                <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Problem Type:</label>
                <select
                    value={problemType}
                    onChange={(e) => setProblemType(e.target.value)}
                    style={{ padding: '8px', fontSize: '16px' }}
                >
                    <option value="permutation">Permutation P(n, r)</option>
                    <option value="combination">Combination C(n, r)</option>
                    <option value="factorial">Factorial n!</option>
                </select>
            </div>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '5px' }}>n (total items):</label>
                    <input
                        type="number"
                        value={n}
                        onChange={(e) => setN(parseInt(e.target.value) || 0)}
                        min="0"
                        style={{ padding: '8px', width: '120px', fontSize: '16px' }}
                    />
                </div>

                {(problemType === 'permutation' || problemType === 'combination') && (
                    <div>
                        <label style={{ display: 'block', marginBottom: '5px' }}>r (selected items):</label>
                        <input
                            type="number"
                            value={r}
                            onChange={(e) => setR(parseInt(e.target.value) || 0)}
                            min="0"
                            style={{ padding: '8px', width: '120px', fontSize: '16px' }}
                        />
                    </div>
                )}
            </div>

            <button
                onClick={calculate}
                style={{
                    padding: '12px 24px',
                    fontSize: '18px',
                    background: '#0066cc',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer'
                }}
            >
                Calculate
            </button>

            {error && <p style={{ color: 'red', marginTop: '15px' }}>{error}</p>}

            {result && (
                <div style={{
                    marginTop: '30px',
                    padding: '20px',
                    background: 'white',
                    borderRadius: '8px',
                    border: '1px solid #ddd'
                }}>
                    <h2>Result: <span style={{ color: '#0066cc' }}>{result.value}</span></h2>

                    <h3>Step-by-Step Calculation:</h3>
                    <div style={{
                        background: '#f4f4f4',
                        padding: '15px',
                        borderRadius: '6px',
                        lineHeight: '1.6',
                        fontFamily: 'monospace'
                    }}>
                        {result.steps.map((step, index) => (
                            <div key={index} style={{ marginBottom: '8px' }}>{step}</div>
                        ))}
                    </div>
                </div>
            )}

            <div style={{ marginTop: '40px', fontSize: '14px', color: '#666', borderTop: '1px solid #ddd', paddingTop: '20px' }}>
                <h4>Supported Features:</h4>
                <ul>
                    <li>Permutations P(n,r) — order matters</li>
                    <li>Combinations C(n,r) — order doesn't matter</li>
                    <li>Factorials</li>
                    <li>Detailed step-by-step breakdown</li>
                </ul>
                <p><strong>Note:</strong> Large values of n may cause precision issues in JavaScript. For very large n, consider using a backend with BigInteger support.</p>
            </div>
        </div>
    );
}

export default App;