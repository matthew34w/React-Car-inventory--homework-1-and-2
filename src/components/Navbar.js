import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">
          <Link to="/" className="hover:text-gray-300">Dashboard</Link>
        </div>
        <div className="flex gap-4">
          <Link to="/cars" className="hover:text-gray-300">View Cars</Link>
          <Link to="/cars/add" className="hover:text-gray-300">Add Car</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

