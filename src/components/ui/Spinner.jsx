export default function Spinner({ size = 24 }) {
  return (
    <div
      role="status"
      aria-label="Loading"
      style={{ width: size, height: size }}
      className="animate-spin rounded-full border-2 border-night-border border-t-amber"
    />
  );
}