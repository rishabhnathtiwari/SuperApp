import './App.css';
import React from 'react';
import Front from './components/Home/FrontPage.jsx';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Front />} />     
      </Routes>
    </div>
  );
}

export default App;
