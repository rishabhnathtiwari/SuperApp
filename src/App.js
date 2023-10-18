import './App.css';
import React from 'react';
import FrontPage from './components/RegistrationPage/FrontPage.jsx';
import  CategoriesPage from './components/CategoriesPage/CategoriesPage.jsx';
import BrowsePage from './components/BrowsePage/BrowseMain.jsx';
import Movies from './components/Movies/Movies.jsx';
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div>
      
      <Routes>
        <Route path="/" element={<FrontPage />} /> 
        <Route path="/categoriespage" element={<CategoriesPage />} />  
        <Route path="/browsepage" element={<BrowsePage/>}/> 
        <Route path="/movies" element={<Movies/>}/>
        

      </Routes>


    </div>
  );
}

export default App;
