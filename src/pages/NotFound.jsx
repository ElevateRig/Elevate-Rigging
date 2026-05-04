import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-7xl font-bold text-lime-400 mb-4">404</h1>
        <p className="text-2xl text-white font-semibold mb-2">Page Not Found</p>
        <p className="text-zinc-400 mb-8">The page you are looking for does not exist.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-lime-500 to-green-500 text-black font-semibold px-6 py-3 rounded-full hover:from-lime-400 hover:to-green-400 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
