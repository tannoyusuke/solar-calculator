export function TryfundsLogo({ className = "h-8", variant = "light" }: { className?: string; variant?: "light" | "dark" }) {
    // We use the official logo provided in the public folder to guarantee fidelity.
    // If a dark variant is needed and the SVG supports it via CSS, we can pass a class,
    // but typically an image tag is the safest for exact brand representation.
    return (
        <img
            src="/logo.svg"
            alt="TRYFUNDS"
            className={`object-contain ${className}`}
            style={{ width: "auto" }}
        />
    );
}
