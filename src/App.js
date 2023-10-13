import './App.css';
import React from 'react';
import FrontPage from './components/RegistrationPage/FrontPage.jsx';
import  CategoriesPage from './components/CategoriesPage/CategoriesPage.jsx';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<FrontPage />} /> 
        <Route path="/categoriespage" element={<CategoriesPage />} />   

      </Routes>
    </div>
  );
}

export default App;
