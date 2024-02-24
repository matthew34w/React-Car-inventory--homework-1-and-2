import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard';
import CarDetails from './components/CarDetails';
import CarList from './components/CarList';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cars/:id" element={<CarDetails />} />
        <Route path = '/cars/list' element = {<CarList />} />
      </Routes>
    </Router>
  );
}



export default App;