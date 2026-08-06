import { CloudSun, LogOut } from "lucide-react";
import { useAuth } from "../../context/AuthContext.jsx";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="border-b border-night-border bg-night-soft/60 backdrop-blur">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CloudSun className="text-amber" size={22} />
          <span className="font-display font-semibold tracking-tight text-lg">
            Weatherline
          </span>
        </div>

        <div className="flex items-center gap-4">
          {user && (
            <span className="text-sm text-ink-muted hidden sm:inline">
              {user.name}
            </span>
          )}
          <button
            onClick={logout}
            className="flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink transition-colors"
          >
            <LogOut size={16} />
            Log out
          </button>
        </div>
      </div>
    </header>
  );
}