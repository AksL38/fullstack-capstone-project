import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';

const RedirectToHome = () => {
  window.location.href = '/home.html';
  return <></>;
};

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* the final code will not pass the products to every page, but each page will call the server API */}
        <Route path="/" element={<MainPage />} />
        <Route path="/app" element={<MainPage />} />
        <Route path="/home.html" element={<RedirectToHome />} />
      </Routes>
    </>
  );
}

export default App;
