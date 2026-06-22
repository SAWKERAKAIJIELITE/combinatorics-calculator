export default function ErrorCard({
    title = "Calculation Error",
    message
})
{
    return (
        <div className="error-card">

            <h2>{title}</h2>

            <p>{message}</p>

            <small>
                Please verify your inputs and try again.
            </small>

        </div>
    );
}