export default function Input({ label, id, className = "", ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm text-ink-muted">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`bg-night-soft border border-night-border rounded-xl px-3.5 py-2.5
          text-ink placeholder:text-ink-faint outline-none
          focus:border-amber/60 transition-colors ${className}`}
        {...props}
      />
    </div>
  );
}