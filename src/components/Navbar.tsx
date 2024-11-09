import React from 'react';
import { Link } from 'react-router-dom';
import { Tooth } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Tooth className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">DentalCare Pro</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-blue-600">
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}