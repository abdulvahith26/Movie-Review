// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-700 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold ">
          Movie Review
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-blue-200">Home</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
