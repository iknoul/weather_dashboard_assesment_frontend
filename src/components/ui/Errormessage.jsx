export default function ErrorMessage({ children }) {
  if (!children) return null;
  return (
    <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2">
      {children}
    </p>
  );
}