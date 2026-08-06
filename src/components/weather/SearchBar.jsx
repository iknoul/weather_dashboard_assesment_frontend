import { useState } from "react";
import { Search } from "lucide-react";
import Button from "../ui/Button.jsx";

export default function SearchBar({ onSearch, loading }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <div className="relative flex-1">
        <Search
          size={18}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-faint"
        />
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search a city, e.g. Lisbon"
          className="w-full bg-night-soft border border-night-border rounded-xl
            pl-10 pr-3.5 py-3 text-ink placeholder:text-ink-faint outline-none
            focus:border-amber/60 transition-colors"
        />
      </div>
      <Button type="submit" loading={loading} disabled={!city.trim()}>
        Search
      </Button>
    </form>
  );
}