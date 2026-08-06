import { Droplets, Heart, Wind } from "lucide-react";

export default function WeatherCard({ data, isFavorite, onToggleFavorite, savingFavorite }) {
  if (!data) return null;

  const {
    city,
    country,
    temperature,
    feelsLike,
    humidity,
    windSpeed,
    condition,
    description,
    icon,
  } = data;

  return (
    <div className="card-surface p-6 sm:p-8 bg-horizon/[0.06] relative overflow-hidden">
      <div className="absolute inset-0 bg-horizon opacity-10 pointer-events-none" />

      <div className="relative flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-display font-semibold">
            {city}
            {country && <span className="text-ink-muted">, {country}</span>}
          </h2>
          <p className="text-ink-muted capitalize mt-1">
            {description || condition}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {icon && (
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt={condition}
              className="w-14 h-14"
            />
          )}
          <button
            onClick={onToggleFavorite}
            disabled={savingFavorite}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            className="p-2 rounded-full hover:bg-night-border/60 transition-colors disabled:opacity-50"
          >
            <Heart
              size={22}
              className={isFavorite ? "fill-amber text-amber" : "text-ink-muted"}
            />
          </button>
        </div>
      </div>

      <div className="relative mt-6 flex items-end gap-8">
        <div className="text-5xl font-display font-semibold">
          {Math.round(temperature)}°C
        </div>
        <div className="text-sm text-ink-muted pb-1">
          Feels like {Math.round(feelsLike)}°C
        </div>
      </div>

      <div className="relative mt-6 flex gap-6 text-sm text-ink-muted">
        <div className="flex items-center gap-2">
          <Droplets size={16} className="text-aurora" />
          Humidity {humidity}%
        </div>
        <div className="flex items-center gap-2">
          <Wind size={16} className="text-aurora" />
          Wind {windSpeed} m/s
        </div>
      </div>
    </div>
  );
}