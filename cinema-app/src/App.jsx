
function App() {
  return (
    <div className="min-h-screen bg-cinema-bg text-white font-body flex flex-col items-center justify-center gap-4">
      <h1 className="font-display text-5xl font-bold text-cinema-accent animate-fade-in">
        🎬 Cinema App
      </h1>
      <p className="text-cinema-muted">Powered by TMDB + Tailwind CSS</p>
      <span className="text-cinema-gold font-semibold">★★★★☆ 4.2</span>
    </div>
  );
}

export default App;