import { useState } from "react";
import SearchBar from "../components/weather/SearchBar.jsx";
import WeatherCard from "../components/weather/WeatherCard.jsx";
import SearchHistoryList from "../components/weather/SearchHistoryList.jsx";
import FavoritesList from "../components/favorites/FavoritesList.jsx";
import ErrorMessage from "../components/ui/ErrorMessage.jsx";
import Spinner from "../components/ui/Spinner.jsx";
import { useWeatherSearch } from "../hooks/useWeatherSearch.js";
import { useFavorites } from "../hooks/useFavorites.js";
import { useSearchHistory } from "../hooks/useSearchHistory.js";

export default function Dashboard() {
  const { result, loading, error, search } = useWeatherSearch();
  const { favorites, loading: favLoading, addFavorite, removeFavorite, isFavorite } =
    useFavorites();
  const [historyRefreshKey, setHistoryRefreshKey] = useState(0);
  const { history, loading: historyLoading } = useSearchHistory(historyRefreshKey);
  const [savingFavorite, setSavingFavorite] = useState(false);
  const [favoriteError, setFavoriteError] = useState("");

  const handleSearch = async (city) => {
    await search(city);
    setHistoryRefreshKey((k) => k + 1); // backend logs every search, so refresh history
  };

  const handleToggleFavorite = async () => {
    if (!result) return;
    setFavoriteError("");

    const alreadyFavorite = isFavorite(result.city);
    if (alreadyFavorite) {
      const existing = favorites.find(
        (f) => f.cityName.toLowerCase() === result.city.toLowerCase()
      );
      if (existing) await removeFavorite(existing._id);
      return;
    }

    setSavingFavorite(true);
    const res = await addFavorite({
      city: result.city,
      country: result.country,
      lat: result.lat,
      lon: result.lon,
    });
    setSavingFavorite(false);
    if (!res.ok) setFavoriteError(res.message);
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl font-semibold mb-1">
          Check the sky, anywhere
        </h1>
        <p className="text-ink-muted text-sm mb-5">
          Search a city to see current conditions, and save the ones you check often.
        </p>
        <SearchBar onSearch={handleSearch} loading={loading} />
      </div>

      <ErrorMessage>{error || favoriteError}</ErrorMessage>

      {loading && (
        <div className="flex justify-center py-10">
          <Spinner size={28} />
        </div>
      )}

      {!loading && result && (
        <WeatherCard
          data={result}
          isFavorite={isFavorite(result.city)}
          onToggleFavorite={handleToggleFavorite}
          savingFavorite={savingFavorite}
        />
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        <FavoritesList
          favorites={favorites}
          loading={favLoading}
          onRemove={removeFavorite}
          onSelect={handleSearch}
        />
        <SearchHistoryList
          history={history}
          loading={historyLoading}
          onSelect={handleSearch}
        />
      </div>
    </div>
  );
}