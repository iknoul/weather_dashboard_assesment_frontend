import { useNavigate, Link } from "react-router-dom";
import { Compass, Home, ArrowLeft } from "lucide-react";
import Button from "../components/ui/Button.jsx";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Animated Visual / Icon */}
        <div className="relative inline-flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl animate-pulse" />
          <div className="relative bg-slate-800 border border-slate-700/60 p-6 rounded-3xl shadow-2xl">
            <Compass className="w-16 h-16 text-blue-400 animate-spin-slow" />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-3">
          <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">
            404 Error
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-white">
            Page not found
          </h1>
          <p className="text-slate-400 text-base leading-relaxed">
            Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 border-slate-700 hover:bg-slate-800 text-slate-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>

          <Link to="/" className="w-full sm:w-auto">
            <Button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20">
              <Home className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}