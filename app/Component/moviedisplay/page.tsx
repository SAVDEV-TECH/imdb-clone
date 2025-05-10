 


'use client';

import { useEffect, useState } from 'react';

export default function movie() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  const [loading, setisloading] = useState(false);

  const searchMovies = async (query: string) => {
    if(!query) return;
     setisloading(true)
    try{
    const res = await fetch('/api/search/',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    
    });

    const data = await res.json();
   
    setResults(data.results || []);
  }catch (err) {
    console.error('Fetch error:', err);
    alert('Search failed');
  }
  }

  useEffect(()=>{
   const timo=setTimeout(() => {
    searchMovies(query)
   }, 100);
   return ()=>clearTimeout(timo)
  },[query])
  const getTrailer = async (movieId: number) => {
    const res = await fetch('/api/trailer', {
      method: 'POST',
      body: JSON.stringify({ movieId }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    if (data.trailerUrl) {
      setTrailerUrl(data.trailerUrl);
    } else {
      alert('Trailer not found');
    }
  } 
  
  return (
    <div className="p-4 max-w-4xl mx-auto">
      

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="p-2 border rounded w-full"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
       
      </div>
      {loading && <p>Loading...</p>}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {results.map((movie: any) => (
          <div
            key={movie.id}
            className="cursor-pointer hover:scale-105 transition"
            onClick={() => getTrailer(movie.id)}
          >
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : '/no-image.jpg'
              }
              alt={movie.title}
              className="rounded"
            />
            <p className="mt-2 text-center text-sm">{movie.title}</p>
          </div>
        ))}
      </div>

      {trailerUrl && (
        <div className="mt-6">
          <iframe
            width="100%"
            height="400"
            src={trailerUrl.replace('watch?v=', 'embed/')}
            title="YouTube trailer"
            frameBorder="0"
            allowFullScreen
            className="rounded-xl shadow-lg"
          ></iframe>
        </div>
      )}
    </div>
  );
}
