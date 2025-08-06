import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Challenges from './pages/Challenges';
import ChallengePage from './pages/ChallengePage';
import PortfolioProjects from './pages/PortfolioProjects';
import About from './pages/About';
import { ProgressProvider } from './contexts/ProgressContext';

function App() {
  return (
    <ProgressProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/challenges" element={<Challenges />} />
              <Route path="/challenges/:id" element={<ChallengePage />} />
              <Route path="/portfolio-projects" element={<PortfolioProjects />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </motion.div>
          <Footer />
        </div>
      </Router>
    </ProgressProvider>
  );
}

export default App; 