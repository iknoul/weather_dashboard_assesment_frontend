import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CloudSun } from "lucide-react";
import { useAuth } from "../context/AuthContext.jsx";
import Input from "../components/ui/Input.jsx";
import Button from "../components/ui/Button.jsx";
import ErrorMessage from "../components/ui/ErrorMessage.jsx";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dusk flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="flex items-center gap-2 justify-center mb-8">
          <CloudSun className="text-amber" size={26} />
          <span className="font-display font-semibold text-xl">Weatherline</span>
        </div>

        <form onSubmit={handleSubmit} className="card-surface p-6 flex flex-col gap-4">
          <h1 className="font-display font-semibold text-lg">Welcome back</h1>

          <Input
            id="email"
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
          <Input
            id="password"
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />

          <ErrorMessage>{error}</ErrorMessage>

          <Button type="submit" loading={loading} className="w-full mt-2">
            Log in
          </Button>

          <p className="text-sm text-ink-muted text-center">
            No account?{" "}
            <Link to="/register" className="text-amber hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}