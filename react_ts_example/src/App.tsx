import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PostBoard from './pages/PostBoard';

const App = () => {
  return (
    // 리액트 라우트 지정 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/board" element={<PostBoard />} />
    </Routes>
  );
};

export default App;