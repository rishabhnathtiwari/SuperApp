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

      }
    };
  });
  
  return (
    <>
    <img className='profile_picture' src={Profile} alt='Profile_Picture'/>
    <h1 className='MainHeader'> Super App</h1>
    <h2 className='MainTxt'> Entertainment according to your choice </h2>
      

    </>
    
  )

}

export default MoviesSection;
