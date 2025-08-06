import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { challenges } from '../data/challenges';
import { getProjectIdeas } from '../utils/projectIdeas';
import { Star, ChevronRight, Clock, Rocket, Target, TrendingUp, Zap } from 'lucide-react';
import ProjectIdeas from '../components/ProjectIdeas';

const PortfolioProjects = () => {
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [showPortfolioProjects, setShowPortfolioProjects] = useState(false);

  const getDifficultyStars = (difficulty) => {
    return Array.from({ length: 3 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${
          i < difficulty ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const getTrackIcon = (trackId) => {
    switch (trackId) {
      case 'mechanical':
        return <Target className="w-5 h-5" />;
      case 'computer':
        return <TrendingUp className="w-5 h-5" />;
      case 'bioengineering':
        return <Rocket className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  const getTrackColor = (trackId) => {
    switch (trackId) {
      case 'mechanical':
        return 'text-primary-orange';
      case 'computer':
        return 'text-primary-purple';
      case 'bioengineering':
        return 'text-primary-green';
      default:
        return 'text-gray-600';
    }
  };

  const openPortfolioProjects = (trackName) => {
    setSelectedTrack(trackName);
    setShowPortfolioProjects(true);
  };

  const closePortfolioProjects = () => {
    setShowPortfolioProjects(false);
    setSelectedTrack(null);
  };

  // Get engineering tracks only (excluding python_basics)
  const engineeringTracks = Object.entries(challenges).filter(([trackId]) => trackId !== 'python_basics');

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Portfolio Projects</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Build impressive engineering projects that showcase your skills
          </p>
        </motion.div>

        {/* Engineering Tracks */}
        <div className="space-y-8">
          {engineeringTracks.map(([trackId, track], trackIndex) => {
            const projects = getProjectIdeas(trackId);
            
            return (
              <motion.div
                key={trackId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: trackIndex * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => openPortfolioProjects(trackId)}
              >
                {/* Track Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-gray-100 ${getTrackColor(trackId)}`}>
                      {getTrackIcon(trackId)}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{track.title}</h2>
                      <p className="text-gray-600">{track.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Projects</div>
                      <div className="text-2xl font-bold text-primary-blue">
                        {projects.length}
                      </div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  </div>
                </div>

                {/* Projects Preview */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {projects.slice(0, 3).map((project, projectIndex) => (
                    <motion.div
                      key={projectIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: projectIndex * 0.1 }}
                      className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-1">
                          {getDifficultyStars(2)}
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>2-3w</span>
                        </div>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm">{project.title}</h3>
                      <p className="text-xs text-gray-600 line-clamp-2">{project.overview}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Portfolio Projects Modal */}
        <AnimatePresence>
          {showPortfolioProjects && selectedTrack && (
            <ProjectIdeas
              trackName={selectedTrack}
              onClose={closePortfolioProjects}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PortfolioProjects; 