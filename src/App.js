import './App.css';
import React from 'react';
import FrontPage from './components/RegistrationPage/FrontPage.jsx';
import  CategoriesPage from './components/CategoriesPage/CategoriesPage.jsx';
import BrowsePage from './components/BrowsePage/BrowseMain.jsx';
import { Route, Routes } from 'react-router-dom';
import MoviesPage from './components/SelectedGenres/MoviesSection.jsx';


function App() {

  return (
    <div>
      
      <Routes>
        <Route path="/" element={<FrontPage />} /> 
        <Route path="/categoriespage" element={<CategoriesPage />} />  
        <Route path="/browsepage" element={<BrowsePage/>}/> 
        <Route path="/moviespage" element={<MoviesPage/>}/> 
      </Routes>


    </div>
  );
}

export default App;
