const VARIANTS = {
  primary:
    "bg-amber text-night font-semibold hover:bg-amber-soft shadow-glow",
  ghost:
    "bg-transparent text-ink border border-night-border hover:border-ink-muted",
  danger: "bg-transparent text-red-400 hover:bg-red-400/10",
};

export default function Button({
  children,
  variant = "primary",
  loading = false,
  disabled,
  className = "",
  ...props
}) {
  return (
    <button
      disabled={disabled || loading}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm
        transition-colors disabled:opacity-50 disabled:cursor-not-allowed
        ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {loading ? "..." : children}
    </button>
  );
}