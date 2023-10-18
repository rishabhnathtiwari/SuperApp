import React, { useEffect, useState } from 'react'
import './Movies.css';
import Profile from '../../imagefolder/profilepicture.png'


const MoviesSection = () => {

  const [MoviesGenre,setMoviesGenre]=useState({});
  const storedSelectedGenre =JSON.parse(localStorage.getItem('selectedGenre')) ||[];
  

  
  useEffect(()=>{
    const fetchMoviesByGenre = async () => {
      const moviesData = {};

      const getGenreIdByName = async (genreName) => {
        const url = `https://api.themoviedb.org/3/genre/movie/list?language=en-US`;

        try {
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWM4OGFhMjM0MDRlMWMzODI3Y2RmZTNmZDI3NjRhMiIsInN1YiI6IjY0ZWU0OGU1Y2FhNTA4MDEyYjA1MzlmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0gm5P_jLnDSjQKsJDk7SSFxF46uHk77jE4Ldd_kF6Ng', // Replace with your actual API key
            },

          });
          if (response.ok) {
            const data = await response.json();
            const genre = data.genres.find((genre) => genre.name === genreName);
            return genre ? genre.id : null;
          } else {
            console.error(`Failed to fetch genre ID for ${genreName}`);
            return null;
          }
        } catch (error) {
          console.error(error);
          return null;
        }
      };

      for (const genre of storedSelectedGenre) {
        const genreId = await getGenreIdByName(genre);

        if (genreId !== null) {
          const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&language=en-US&year=2023`;

          try {
            const response = await fetch(url, {
              method: 'GET',
              headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWM4OGFhMjM0MDRlMWMzODI3Y2RmZTNmZDI3NjRhMiIsInN1YiI6IjY0ZWU0OGU1Y2FhNTA4MDEyYjA1MzlmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0gm5P_jLnDSjQKsJDk7SSFxF46uHk77jE4Ldd_kF6Ng', // Replace with your actual API key
              },
            });
            if (response.ok) {
              const data = await response.json();
              moviesData[genre] = data.results.slice(0, 4);
            } else {
              console.error(`Failed to fetch movies for genre ${genre}`);
            }
          } catch (error) {
            console.error(error);
          }
        }
      }

      setMoviesGenre(moviesData);

    };
    

    if (storedSelectedGenre.length > 0) {
      fetchMoviesByGenre();
    }
  }, [storedSelectedGenre]);

  return (
    <>
    <img className='profile_picture' src={Profile} alt='Profile_Picture'/>
    <h1 className='MainHeader'> Super App</h1>
    <h2 className='MainTxt'> Entertainment according to your choice </h2>
    {Object.keys(MoviesGenre).map((genre) => (
        <div key={genre}>
          <h3 className='genreHeadTitle'>{genre}</h3>
          <div className="movies_posters">
            {MoviesGenre[genre].map((movie) => (
              <img
                className='genreimg'
                key={movie.id}
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={movie.title}
              />
            ))}
          </div>
        </div>
      ))}
    </>
    
  )
}

export default MoviesSection;
