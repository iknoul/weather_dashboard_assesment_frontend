import { MapPin, X } from "lucide-react";

export default function FavoriteCard({ favorite, onRemove, onSelect }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-night-border px-4 py-3 hover:border-ink-faint/60 transition-colors">
      <button
        onClick={() => onSelect(favorite.cityName)}
        className="flex items-center gap-2 text-left"
      >
        <MapPin size={15} className="text-aurora" />
        <span className="text-sm">
          {favorite.cityName}
          {favorite.country && (
            <span className="text-ink-muted">, {favorite.country}</span>
          )}
        </span>
      </button>

      <button
        onClick={() => onRemove(favorite._id)}
        aria-label={`Remove ${favorite.cityName} from favorites`}
        className="p-1 rounded-full text-ink-faint hover:text-red-400 hover:bg-red-400/10 transition-colors"
      >
        <X size={16} />
      </button>
    </div>
  );
}