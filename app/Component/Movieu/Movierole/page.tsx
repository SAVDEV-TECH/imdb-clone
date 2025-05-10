//  'use client'

 
// import React, { useEffect, useState } from 'react'
 
//  import Image from 'next/image'

// interface Movie {
//   id: number;
//   title: string;
//   poster_path: string;
// }
// interface Video {
//   id: string;
//   key: string;
//   type: string;
//   site: string;
// }
// function MovieRole() {
//   const accessToken = process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN;
//   const [results, setResults] = useState<Movie[]>([]);
//   const [trailerUrl, setTrailerUrl] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

//   // Fetch movies from TMDB API
//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         const res = await fetch(
//           `https://api.themoviedb.org/3/movie/popular?api_key=${accessToken}`,
//           {
//             headers: {
//               Authorization: `Bearer ${accessToken}`,
//               'Content-Type': 'application/json',
//               Accept: 'application/json',
//             },
//           }
//         );

//         if (!res.ok) {
//           throw new Error(`Error: ${res.status}`);
//         }

//         const data = await res.json();
//         setResults(data.results || []);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Failed to fetch movies');
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (accessToken) {
//       fetchMovies();
//     } else {
//       console.error('Access token is not found');
//       setError('API configuration error');
//     }
//   }, [accessToken]);

//   const fetchTrailer = async (movieId: number) => {
//     try {
//       setLoading(true);
//       setError(null);
//       const trailerRes = await fetch(
//         `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//             'Content-Type': 'application/json',
//             Accept: 'application/json',
//           },
//         }
//       );

//       if (!trailerRes.ok) {
//         throw new Error(`Not found: ${trailerRes.status}`);
//       }

//       const data = await trailerRes.json();
//       const trailers = data.results.filter(
//         (video: Video) => video.type === "Trailer" && video.site === 'YouTube'
//       );

//       if (trailers.length > 0) {
//         setTrailerUrl(`https://www.youtube.com/embed/${trailers[0].key}`);
//       } else {
//         setError('No trailer found for this movie');
//         setTrailerUrl(null);
//       }
//     } catch (error) {
//       setError(error instanceof Error ? error.message : 'Failed to fetch trailer');
//       console.error('Error fetching trailer:', error);
//       setTrailerUrl(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleMovieClick = (movie: Movie) => {
//     setSelectedMovie(movie);
//     fetchTrailer(movie.id);
//   };

//   return (
//     <div className='mt-5'>
//       <div className="flex flex-col md:flex-row gap-5 w-[95%] h-[500px] mx-auto">
//         {/* Main Movie Display */}
//         <div className="w-[70%] rounded-md bg-red-200">
//           {loading && <div className="text-white">Loading...</div>}
//           {error && <div className="text-red-500">{error}</div>}
          
//           {trailerUrl && selectedMovie ? (
//             <div className="aspect-w-16 relative aspect-h-12 ">
//               <iframe
//                 src={trailerUrl}
//                 title={`${selectedMovie.title} Trailer`}
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 className="w-full md:h-[500px] rounded-lg"
//               ></iframe>
//             </div>
//           ) : (
//             <div className="text-white flex items-center justify-center h-full">
//               {selectedMovie 
//                 ? "No trailer available for this movie" 
//                 : "Select a movie to view trailer"}
//             </div>
//           )}
//         </div>

//         {/* Up Next Section */}
//         <div className="rounded-md w-[25%]">
//           <h2 className='text-yellow-500'>Up Next</h2>
//           <div className="w-full h-[95%]  overflow-auto">
//             {loading && !selectedMovie ? (
//               <p className="text-white">Loading movies...</p>
//             ) : results.length > 0 ? (
//               results.map((movie) => (
//                 <div 
//                   onClick={() => handleMovieClick(movie)} 
//                   key={movie.id} 
//                   className={`p-2  hover:group cursor-pointer shadow ${
//                     selectedMovie?.id === movie.id ? 'bg-blue-200' : ''
//                   }`}
//                 >
//                   <div className="flex items-center gap-8 w-full">
                  
//                   <Image   src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  alt={movie.title}
//                     className="w-[100px] h-[200px] object-scale rounded-[30px]"
//                   />
//                   <div className="">
//                   <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"    viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M10.803 15.932l4.688-3.513a.498.498 0 0 0 0-.803l-4.688-3.514a.502.502 0 0 0-.803.402v7.026c0 .412.472.653.803.402z"></path><path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-1c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"></path></svg>
//                   <h3 className="text-white">{movie.title}</h3>
//                   <p className='text-white'>watch the trailer</p>
//                   </div>
                  
//                   </div>
                  
//                 </div>
//               ))
//             ) : (
//               <p className="text-white">No movies found.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MovieRole;

