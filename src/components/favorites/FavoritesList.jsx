import { Star } from "lucide-react";
import FavoriteCard from "./FavoriteCard.jsx";

export default function FavoritesList({ favorites, loading, onRemove, onSelect }) {
  return (
    <div className="card-surface p-5">
      <div className="flex items-center gap-2 mb-4">
        <Star size={16} className="text-amber" />
        <h3 className="font-display font-semibold text-sm">Favorite cities</h3>
      </div>

      {loading && <p className="text-sm text-ink-faint">Loading...</p>}

      {!loading && favorites.length === 0 && (
        <p className="text-sm text-ink-faint">
          No favorites yet — save a city after searching for it.
        </p>
      )}

      <div className="flex flex-col gap-2">
        {favorites.map((fav) => (
          <FavoriteCard
            key={fav._id}
            favorite={fav}
            onRemove={onRemove}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}