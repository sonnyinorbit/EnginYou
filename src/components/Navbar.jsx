import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useProgress } from '../contexts/ProgressContext';


const Navbar = () => {
  const location = useLocation();
  const { totalPoints } = useProgress();

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary-blue">E</span>
              <span className="text-2xl font-bold text-primary-orange">Y</span>
            </div>
            <span className="text-xl font-semibold text-gray-800">EnginYou</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'text-primary-blue' 
                  : 'text-gray-600 hover:text-primary-blue'
              }`}
            >
              Home
            </Link>
            <Link
              to="/challenges"
              className={`text-sm font-medium transition-colors ${
                location.pathname.startsWith('/challenges') 
                  ? 'text-primary-blue' 
                  : 'text-gray-600 hover:text-primary-blue'
              }`}
            >
              Challenges
            </Link>
            <Link
              to="/portfolio-projects"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/portfolio-projects' 
                  ? 'text-primary-blue' 
                  : 'text-gray-600 hover:text-primary-blue'
              }`}
            >
              Portfolio Projects
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/about' 
                  ? 'text-primary-blue' 
                  : 'text-gray-600 hover:text-primary-blue'
              }`}
            >
              About
            </Link>
          </div>

          {/* Points Display */}
          <div className="flex items-center space-x-4">
            <motion.div
              className="flex items-center space-x-2 bg-primary-blue-light px-3 py-1 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-semibold text-primary-blue">{totalPoints}</span>
              <span className="text-xs text-primary-blue">EP</span>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 