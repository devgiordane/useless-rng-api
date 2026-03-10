export default function Home() {
    return (
        <main>
            <h1>useless-rng-api</h1>
            <p>
                Simple random number generator API built for automation tools like <strong>n8n</strong> and <strong>Make</strong>.
            </p>

            <h2>Endpoint Usage</h2>
            <div className="endpoint">
                <code>GET https://useless-rng-api.vercel.app/api/rng?min=1&max=100</code>
                <br /><br />
                <code>GET https://useless-rng-api.vercel.app/api/rng?min=1&max=100&amount=5</code>
            </div>

            <h2>Example Request</h2>
            <pre>
                <code>
                    curl "https://useless-rng-api.vercel.app/api/rng?min=1&max=100&amount=5"
                </code>
            </pre>

            <h2>Example JSON Response</h2>
            <pre>
                <code>
                    {`{
  "min": 1,
  "max": 100,
  "amount": 5,
  "numbers": [42, 7, 89, 23, 100]
}`}
                </code>
            </pre>

        </main>
    );
}
