import dotenv from 'dotenv';
dotenv.config();

const TMDB = {
  api_key: process.env.REACT_APP_TMDB_API_KEY,
  films: [
    {
      "id": 254375,
        "poster_path": "/tgjU6tYG6KSebqFX9VyUQD8mwkm.jpg"
    }
  ]
}

export default TMDB;