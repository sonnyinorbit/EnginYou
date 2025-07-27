import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Trophy, Star, Code } from 'lucide-react';
import { getChallengeById } from '../data/challenges';
import { useProgress } from '../contexts/ProgressContext';
import PythonIDE from '../components/PythonIDE';
import confetti from 'canvas-confetti';

const ChallengePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isChallengeCompleted } = useProgress();
  const [challenge, setChallenge] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const foundChallenge = getChallengeById(id);
    if (!foundChallenge) {
      navigate('/challenges');
      return;
    }
    setChallenge(foundChallenge);
  }, [id, navigate]);

  const handleComplete = () => {
    setShowConfetti(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    
    setTimeout(() => {
      setShowConfetti(false);
    }, 3000);
  };

  if (!challenge) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-blue"></div>
      </div>
    );
  }

  const isCompleted = isChallengeCompleted(challenge.id);

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/challenges"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary-blue transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Challenges</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            {/* Challenge Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: 3 }, (_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < challenge.difficulty ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">Difficulty</span>
                  {isCompleted && (
                    <div className="flex items-center space-x-1 text-green-600">
                      <Trophy className="w-4 h-4" />
                      <span className="text-sm font-medium">Completed</span>
                    </div>
                  )}
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-2">{challenge.title}</h1>
                <p className="text-gray-600 mb-4">{challenge.description}</p>

                {/* Category and Module Info */}
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Code className="w-4 h-4" />
                    <span>{challenge.categoryTitle}</span>
                  </div>
                  <span>•</span>
                                        <span>{challenge.moduleTitle}</span>
                      <span>•</span>
                      <span className="text-primary-blue font-medium">+{challenge.reward} EP</span>
                </div>
              </div>
            </div>

            {/* Solution Explanation */}
            {isCompleted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6"
              >
                <h3 className="text-sm font-medium text-blue-800 mb-2">Solution Explanation</h3>
                <p className="text-sm text-blue-700">{challenge.solutionExplanation}</p>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Python IDE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <PythonIDE challenge={challenge} onComplete={handleComplete} />
        </motion.div>

        {/* Confetti Effect */}
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {/* Confetti will be rendered by the confetti library */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChallengePage; 