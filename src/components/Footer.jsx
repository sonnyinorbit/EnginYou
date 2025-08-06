import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="flex items-center">
              <span className="text-xl font-bold text-primary-blue">E</span>
              <span className="text-xl font-bold text-primary-orange">Y</span>
            </div>
            <span className="text-lg font-semibold text-gray-800">EnginYou</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <Link to="/" className="hover:text-primary-blue transition-colors">
              Home
            </Link>
            <Link to="/challenges" className="hover:text-primary-blue transition-colors">
              Challenges
            </Link>
            <Link to="/portfolio-projects" className="hover:text-primary-blue transition-colors">
              Portfolio Projects
            </Link>
            <Link to="/about" className="hover:text-primary-blue transition-colors">
              About
            </Link>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4">
              <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                Student Project
              </span>
              <span className="text-xs text-gray-400">
                React + Python + Pyodide
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 