import { History } from "lucide-react";

export default function SearchHistoryList({ history, loading, onSelect }) {
  return (
    <div className="card-surface p-5">
      <div className="flex items-center gap-2 mb-4">
        <History size={16} className="text-ink-muted" />
        <h3 className="font-display font-semibold text-sm">Recent searches</h3>
      </div>

      {loading && <p className="text-sm text-ink-faint">Loading...</p>}

      {!loading && history.length === 0 && (
        <p className="text-sm text-ink-faint">
          Nothing searched yet — try a city above.
        </p>
      )}

      <ul className="flex flex-col gap-1">
        {history.map((entry) => (
          <li key={entry._id}>
            <button
              onClick={() => onSelect(entry.cityName)}
              className="w-full text-left text-sm text-ink-muted hover:text-ink
                hover:bg-night-border/40 rounded-lg px-2.5 py-2 transition-colors"
            >
              {entry.cityName}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}