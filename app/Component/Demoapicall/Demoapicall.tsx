import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
}

interface Video {
  id: string;
  key: string;
  type: string;
  site: string;
}

export default function MovieApp() {
  const accessToken = process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN;
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [trailerUrl, setTrailerUrl] = useState<string | null>(null);
  const [showTrailer, setShowTrailer] = useState(false);

  // Fetch popular movies
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
          {
            headers: {
              'Authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch movies: ${response.status}`);
        }

        const data = await response.json();
        setMovies(data.results);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch movies');
        console.error('Error fetching movies:', err);
      } finally {
        setLoading(false);
      }
    };

    if (accessToken) {
      fetchMovies();
    } else {
      setError('TMDB access token is missing');
      setLoading(false);
    }
  }, [accessToken]);

  // Fetch trailer for selected movie
  const fetchTrailer = async (movieId: number) => {
    try {
      setLoading(true);
      setError(null);
      setTrailerUrl(null);
      setShowTrailer(false);

      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch trailer: ${response.status}`);
      }

      const data = await response.json();
      const trailers = data.results.filter(
        (video: Video) => video.type === 'Trailer' && video.site === 'YouTube'
      );

      if (trailers.length > 0) {
        setTrailerUrl(`https://www.youtube.com/embed/${trailers[0].key}`);
        setShowTrailer(true);
      } else {
        setError('No trailer available for this movie');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch trailer');
      console.error('Error fetching trailer:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
    fetchTrailer(movie.id);
  };

  const closeTrailer = () => {
    setShowTrailer(false);
    setTrailerUrl(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Popular Movies</h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {movies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => handleMovieClick(movie)}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
            >
              <Image width={500} height={750}
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : '/no-image.jpg'
                }
                alt={movie.title}
                className="w-full h-64 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/no-image.jpg';
                }}
              />
              <div className="p-3">
                <h3 className="font-semibold text-gray-800 truncate">{movie.title}</h3>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-gray-600 ml-1">{movie.vote_average.toFixed(1)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showTrailer && trailerUrl && selectedMovie && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
            <div className="w-full max-w-4xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-white">
                  {selectedMovie.title} - Trailer
                </h2>
                <button
                  onClick={closeTrailer}
                  className="text-white hover:text-gray-300"
                >
                  ✕
                </button>
              </div>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={trailerUrl}
                  title={`${selectedMovie.title} Trailer`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-96 rounded-lg"
                ></iframe>
              </div>
              <div className="mt-4 text-white">
                <h3 className="font-bold mb-2">Overview:</h3>
                <p>{selectedMovie.overview}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}