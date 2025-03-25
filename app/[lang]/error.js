"use client";

export default function Error({ error, reset }) {
    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h1>Oops! Something went wrong</h1>
            <button
                onClick={() => reset()}
                style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    background: "red",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                }}
            >
                Retry
            </button>
        </div>
    );
}
