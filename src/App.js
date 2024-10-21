// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import Error from './components/error';


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<IndexPage />} />
          <Route  path="*" element={<Error />} />
        </Routes>
    </Router>
  );
}

export default App;


