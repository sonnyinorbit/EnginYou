import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, BookOpen, Code, Target, Zap } from 'lucide-react';
import { getProjectIdeas, getRandomProjectIdea } from '../utils/projectIdeas';

const ProjectIdeas = ({ trackName, onClose }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projectIdeas = getProjectIdeas(trackName);

  const getTrackName = (track) => {
    switch (track) {
      case 'python_basics':
        return 'Python Fundamentals';
      case 'mechanical':
        return 'Mechanical Engineering';
      case 'computer':
        return 'Computer Engineering';
      case 'bioengineering':
        return 'Bioengineering';
      default:
        return 'Engineering';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Portfolio Projects</h2>
              <p className="text-gray-600 mt-1">{getTrackName(trackName)} • 5 project ideas</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {selectedProject ? (
            // Detailed Project View
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors text-sm mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to all projects</span>
              </button>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{selectedProject.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedProject.overview}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Target className="w-4 h-4 mr-2 text-blue-600" />
                        Why This Matters
                      </h4>
                      <p className="text-gray-700">{selectedProject.impressive}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Code className="w-4 h-4 mr-2 text-green-600" />
                        Skills You'll Use
                      </h4>
                      <p className="text-gray-700">{selectedProject.skills}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <BookOpen className="w-4 h-4 mr-2 text-purple-600" />
                        How to Start
                      </h4>
                      <p className="text-gray-700">{selectedProject.guidance}</p>
                    </div>

                                      <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-orange-600" />
                      Next Steps
                    </h4>
                    <p className="text-gray-700">{selectedProject.stretchGoals}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Code className="w-4 h-4 mr-2 text-purple-600" />
                  Resources You'll Need
                </h4>
                <p className="text-sm text-gray-700">{selectedProject.resources}</p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-center">
                  <button 
                    onClick={() => {
                      // Open a new tab with a Google search for the project
                      const searchQuery = encodeURIComponent(`${selectedProject.title} python tutorial github`);
                      window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank');
                    }}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm flex items-center space-x-2"
                  >
                    <span>Find Tutorials</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
              </div>
            </motion.div>
          ) : (
            // Project List
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose a project to build:</h3>
                <p className="text-gray-600">
                  These are real-world applications you can complete in 2-3 weeks. Pick one that interests you and start building.
                </p>
              </div>

              <div className="space-y-4">
                {projectIdeas.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.01 }}
                    className="border border-gray-200 rounded-lg p-5 hover:border-blue-300 hover:shadow-sm transition-all duration-200 cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">{project.title}</h4>
                        <p className="text-gray-600 mb-3">{project.overview}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>Skills: {project.skills.split(', ').slice(0, 2).join(', ')}</span>
                          <span>•</span>
                          <span>2-3 weeks</span>
                        </div>
                      </div>
                      <div className="text-gray-400 ml-4">
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-6 text-center">
                <button
                  onClick={() => setSelectedProject(getRandomProjectIdea(trackName))}
                  className="px-6 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors text-sm"
                >
                  Pick a random project
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectIdeas; 