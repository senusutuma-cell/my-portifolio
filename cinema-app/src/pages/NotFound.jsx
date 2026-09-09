
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-4">
      <h1 className="font-display text-7xl font-bold text-cinema-accent">404</h1>
      <p className="text-cinema-muted text-lg">
        This scene doesn't exist in our script.
      </p>
      <Link
        to="/"
        className="mt-4 px-6 py-2 rounded-full bg-cinema-accent text-white font-semibold hover:bg-red-700 transition-colors duration-200"
      >
        Back to Home
      </Link>
    </div>
  );
}
export default NotFound;