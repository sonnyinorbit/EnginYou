import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { challenges } from '../data/challenges';
import { useProgress } from '../contexts/ProgressContext';
import { CheckCircle, Lock, Star, Code } from 'lucide-react';

const Challenges = () => {
  const { isChallengeCompleted, getProgressPercentage } = useProgress();

  const getDifficultyStars = (difficulty) => {
    return Array.from({ length: 3 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < difficulty ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const getCategoryIcon = (categoryId) => {
    switch (categoryId) {
      case 'python_basics':
        return <Code className="w-6 h-6" />;
      case 'mechanical':
        return <Lock className="w-6 h-6" />;
      case 'computer':
        return <Lock className="w-6 h-6" />;
      case 'bioengineering':
        return <Lock className="w-6 h-6" />;
      default:
        return <Code className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (categoryId) => {
    switch (categoryId) {
      case 'python_basics':
        return 'bg-primary-blue';
      case 'mechanical':
        return 'bg-primary-orange';
      case 'computer':
        return 'bg-primary-purple';
      case 'bioengineering':
        return 'bg-primary-green';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Engineering Path
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start with Python fundamentals, then explore specialized engineering domains
          </p>
        </motion.div>

        {/* Challenge Categories */}
        <div className="space-y-12">
          {Object.entries(challenges).map(([categoryId, category], categoryIndex) => (
            <motion.div
              key={categoryId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl ${getCategoryColor(categoryId)} text-white`}>
                    {getCategoryIcon(categoryId)}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Progress</div>
                  <div className="text-2xl font-bold text-primary-blue">
                    {getProgressPercentage(categoryId)}%
                  </div>
                </div>
              </div>

              {/* Modules */}
              <div className="space-y-6">
                {category.modules.map((module, moduleIndex) => (
                  <div key={module.id} className="border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{module.title}</h3>
                    <p className="text-gray-600 mb-6">{module.description}</p>
                    
                    {/* Lessons Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                             {module.lessons.map((lesson, lessonIndex) => {
                         const isCompleted = isChallengeCompleted(lesson.id);
                         
                         return (
                          <motion.div
                            key={lesson.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: lessonIndex * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="relative"
                          >
                                                         <Link
                               to={`/challenges/${lesson.id}`}
                               className={`block p-6 rounded-xl border-2 transition-all duration-300 ${
                                 isCompleted
                                   ? 'border-green-200 bg-green-50'
                                   : 'border-gray-200 bg-white hover:border-primary-blue hover:shadow-md'
                               }`}
                             >
                              {/* Status Icon */}
                              <div className="flex items-center justify-between mb-3">
                                                                 <div className="flex items-center space-x-2">
                                   {isCompleted ? (
                                     <CheckCircle className="w-5 h-5 text-green-500" />
                                   ) : (
                                     <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                                   )}
                                  <span className="text-sm font-medium text-gray-500">
                                    Lesson {lessonIndex + 1}
                                  </span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  {getDifficultyStars(lesson.difficulty)}
                                </div>
                              </div>

                              {/* Lesson Title */}
                              <h4 className="font-semibold text-gray-900 mb-2">{lesson.title}</h4>
                              
                              {/* Lesson Description */}
                              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                {lesson.description}
                              </p>

                              {/* Reward */}
                              <div className="flex items-center justify-between">
                                                                    <div className="flex items-center space-x-2">
                                      <span className="text-sm font-medium text-primary-blue">
                                        +{lesson.reward} EP
                                      </span>
                                    </div>
                                
                              </div>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Challenges; 