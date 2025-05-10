// import { NextResponse } from 'next/server';

// const TMDB_API_TOKEN = process.env.TMDB_API_TOKEN;

// export async function POST(request: Request) {
//   const { query } = await request.json();

//   if (!query) {
//     return NextResponse.json({ error: 'No search query provided' }, { status: 400 });
//   }

 
//     const res = await fetch(
//       `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`,
//       {
//         headers: {
//           Authorization: `Bearer ${TMDB_API_TOKEN}`,
//           accept: 'application/json',
//         },
//       }
//     );

//     const data = await res.json();

//     // Debug log
//     console.log('TMDB API response:', JSON.stringify(data, null, 2));

//     if (!data.results || data.results.length === 0) {
//       return NextResponse.json({ error: 'No results found' }, { status: 404 });
//     }

//     return NextResponse.json({ results: data.results });
 
//   }

 
  