 


export async function POST(req: Request) {
    const { movieId } = await req.json();
    const apiKey = process.env.TMDB_API_TOKEN;
  
    const videoRes = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`
    );
    const videoData = await videoRes.json();
  
    const trailer = videoData.results.find(
      (video: any) => video.type === 'Trailer' && video.site === 'YouTube'
    );
  
    if (!trailer) {
      return new Response(JSON.stringify({ error: 'Trailer not found' }), { status: 404 });
    }
  
    return new Response(
      JSON.stringify({ trailerUrl: `https://www.youtube.com/watch?v=${trailer.key}` }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }
  


 