import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Trophy, Star, Code, ArrowRight, CheckCircle } from 'lucide-react';
import { getChallengeById, getAllChallenges } from '../data/challenges';
import { useProgress } from '../contexts/ProgressContext';
import PythonIDE from '../components/PythonIDE';
import confetti from 'canvas-confetti';

const ChallengePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isChallengeCompleted } = useProgress();
  const [challenge, setChallenge] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [allChallenges, setAllChallenges] = useState([]);

  useEffect(() => {
    const foundChallenge = getChallengeById(id);
    if (!foundChallenge) {
      navigate('/challenges');
      return;
    }
    setChallenge(foundChallenge);
    
    // Get all challenges for navigation
    const challenges = getAllChallenges();
    setAllChallenges(challenges);
    const index = challenges.findIndex(c => c.id === id);
    setCurrentIndex(index);
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

  const getNavigationChallenges = () => {
    if (allChallenges.length === 0) return { prev: null, next: null };
    
    const prev = currentIndex > 0 ? allChallenges[currentIndex - 1] : null;
    const next = currentIndex < allChallenges.length - 1 ? allChallenges[currentIndex + 1] : null;
    
    return { prev, next };
  };

  // Engineering thinking prompts for different challenge types
  const getEngineeringThinkingPrompt = (challenge) => {
    const prompts = {
      // Variables & Data Types
      'variables_1': {
        title: "Think Like an Engineer: Data Design",
        content: "You're designing a patient monitoring system for a hospital. How would you choose variable names and data types to store patient information? What considerations would you make for data accuracy and privacy?"
      },
      'variables_2': {
        title: "Think Like an Engineer: Structural Analysis",
        content: "You're calculating the load-bearing capacity of a bridge support beam. How would you ensure your calculations account for safety factors? What additional variables might you need to consider for real-world conditions?"
      },
      
      // Loops & Lists
      'loops_1': {
        title: "Think Like an Engineer: Automation",
        content: "You're programming a robotic assembly line. How would you use loops to handle repetitive tasks? What safety checks would you implement to prevent errors in the manufacturing process?"
      },
      'lists_1': {
        title: "Think Like an Engineer: Data Management",
        content: "You're building a sensor network for environmental monitoring. How would you organize sensor readings in lists? What considerations would you make for data storage efficiency and real-time processing?"
      },
      'loops_lists_1': {
        title: "Think Like an Engineer: System Integration",
        content: "You're creating a smart home automation system. How would you use loops and lists to manage multiple devices? What tradeoffs would you consider between responsiveness and energy efficiency?"
      },
      
      // Conditionals
      'if_statements_1': {
        title: "Think Like an Engineer: Decision Making",
        content: "You're programming a traffic light control system. How would you use conditionals to handle different traffic patterns? What safety mechanisms would you implement for emergency vehicles?"
      },
      'multiple_conditions_1': {
        title: "Think Like an Engineer: Complex Logic",
        content: "You're designing a climate control system for a data center. How would you handle multiple environmental conditions? What priority system would you implement for different cooling scenarios?"
      },
      
      // Functions
      'functions_1': {
        title: "Think Like an Engineer: Modular Design",
        content: "You're building a modular robot system. How would you design functions for different robot components? What interfaces would you create to ensure components work together seamlessly?"
      },
      
      // Problem Solving
      'problem_solving_1': {
        title: "Think Like an Engineer: Algorithm Design",
        content: "You're optimizing a delivery route for an autonomous vehicle. How would you break down this complex problem? What constraints would you consider for safety, efficiency, and customer satisfaction?"
      },
      'problem_solving_2': {
        title: "Think Like an Engineer: System Optimization",
        content: "You're designing a renewable energy grid. How would you balance power generation and consumption? What backup systems would you implement for reliability?"
      },
      'problem_solving_3': {
        title: "Think Like an Engineer: Resource Management",
        content: "You're creating a water treatment plant control system. How would you manage multiple treatment stages? What monitoring systems would you implement for quality control?"
      },
      'problem_solving_4': {
        title: "Think Like an Engineer: Safety Systems",
        content: "You're programming a nuclear power plant safety system. How would you implement multiple layers of protection? What redundancy measures would you include for critical functions?"
      },
      'problem_solving_5': {
        title: "Think Like an Engineer: Quality Assurance",
        content: "You're building a pharmaceutical manufacturing line. How would you ensure product quality at each stage? What testing protocols would you implement for compliance?"
      },
      
      // Mechanical Engineering
      'forces_1': {
        title: "Think Like an Engineer: Force Analysis",
        content: "You're designing a suspension system for a vehicle. How would you calculate forces under different road conditions? What safety margins would you include for extreme scenarios?"
      },
      'forces_2': {
        title: "Think Like an Engineer: Structural Integrity",
        content: "You're analyzing a skyscraper's foundation. How would you ensure stability under various loads? What factors would you consider for long-term durability?"
      },
      'forces_3': {
        title: "Think Like an Engineer: Dynamic Systems",
        content: "You're designing a wind turbine blade. How would you optimize for energy capture while maintaining structural integrity? What tradeoffs would you make between efficiency and durability?"
      },
      'stress_strain_1': {
        title: "Think Like an Engineer: Material Selection",
        content: "You're choosing materials for a bridge in an earthquake-prone area. How would you balance strength, flexibility, and cost? What testing protocols would you implement?"
      },
      'thermal_expansion_1': {
        title: "Think Like an Engineer: Thermal Management",
        content: "You're designing a spacecraft thermal control system. How would you handle extreme temperature variations? What materials and mechanisms would you use for heat management?"
      },
      'projectile_motion_1': {
        title: "Think Like an Engineer: Trajectory Planning",
        content: "You're programming a satellite launch system. How would you account for atmospheric conditions and gravitational variations? What safety protocols would you implement?"
      },
      'gear_ratio_1': {
        title: "Think Like an Engineer: Power Transmission",
        content: "You're designing a gear system for an electric vehicle. How would you optimize for efficiency and performance? What maintenance considerations would you include?"
      },
      'spring_constant_1': {
        title: "Think Like an Engineer: Energy Storage",
        content: "You're designing a shock absorber for a high-performance vehicle. How would you balance comfort and handling? What materials would you choose for optimal performance?"
      },
      
      // Computer Engineering
      'algorithms_1': {
        title: "Think Like an Engineer: Algorithm Efficiency",
        content: "You're optimizing a search algorithm for a large database. How would you balance speed and memory usage? What would you consider for scalability and real-time performance?"
      },
      'algorithms_2': {
        title: "Think Like an Engineer: Data Processing",
        content: "You're building a real-time data processing system. How would you handle large volumes of data efficiently? What caching strategies would you implement?"
      },
      'algorithms_3': {
        title: "Think Like an Engineer: System Architecture",
        content: "You're designing a distributed computing system. How would you ensure reliability and performance? What fault tolerance mechanisms would you include?"
      },
      'stack_implementation': {
        title: "Think Like an Engineer: Memory Management",
        content: "You're programming a memory management system. How would you prevent memory leaks and optimize performance? What safety checks would you implement?"
      },
      'binary_search': {
        title: "Think Like an Engineer: Search Optimization",
        content: "You're building a search engine for a large dataset. How would you implement efficient search algorithms? What indexing strategies would you use?"
      },
      'bubble_sort': {
        title: "Think Like an Engineer: Data Organization",
        content: "You're organizing a large dataset for analysis. How would you choose the right sorting algorithm? What would you consider for time complexity and memory usage?"
      },
      'palindrome_checker': {
        title: "Think Like an Engineer: Data Validation",
        content: "You're building a data validation system. How would you ensure data integrity and security? What error handling mechanisms would you implement?"
      },
      'prime_number_checker': {
        title: "Think Like an Engineer: Mathematical Optimization",
        content: "You're implementing cryptographic algorithms. How would you ensure security and performance? What testing protocols would you use for validation?"
      },
      
      // Bioengineering
      'biostatistics_1': {
        title: "Think Like an Engineer: Statistical Analysis",
        content: "You're analyzing clinical trial data for a new drug. How would you ensure statistical significance and patient safety? What ethical considerations would you include?"
      },
      'biostatistics_2': {
        title: "Think Like an Engineer: Data Interpretation",
        content: "You're interpreting medical imaging data. How would you distinguish between normal and abnormal patterns? What confidence levels would you require for diagnosis?"
      },
      'biostatistics_3': {
        title: "Think Like an Engineer: Predictive Modeling",
        content: "You're building a disease prediction model. How would you balance accuracy with interpretability? What ethical considerations would you include for patient privacy?"
      },
      'image_processing_1': {
        title: "Think Like an Engineer: Medical Imaging",
        content: "You're developing medical imaging software. How would you ensure diagnostic accuracy and patient safety? What quality control measures would you implement?"
      },
      'concentration_calculation': {
        title: "Think Like an Engineer: Drug Delivery",
        content: "You're designing a drug delivery system. How would you ensure precise dosing and patient safety? What monitoring systems would you include?"
      },
      'bmi_calculator': {
        title: "Think Like an Engineer: Health Assessment",
        content: "You're building a health monitoring system. How would you ensure accuracy and user privacy? What additional health metrics would you consider?"
      },
      'heart_rate_analyzer': {
        title: "Think Like an Engineer: Vital Signs Monitoring",
        content: "You're designing a heart rate monitoring system. How would you handle signal noise and ensure accuracy? What alert systems would you implement for abnormal readings?"
      },
      
      'default': {
        title: "Think Like an Engineer: Problem Solving",
        content: "Consider the real-world implications of this programming concept. How would you apply this in an engineering context? What constraints, tradeoffs, or design decisions would you need to make?"
      }
    };
    
    return prompts[challenge?.id] || prompts.default;
  };

  if (!challenge) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-blue"></div>
      </div>
    );
  }

  const isCompleted = isChallengeCompleted(challenge.id);
  const { prev, next } = getNavigationChallenges();
  const engineeringPrompt = getEngineeringThinkingPrompt(challenge);

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

            {/* Engineering Habits Checklist */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h3 className="text-sm font-medium text-blue-800 mb-3">Engineering Habits to Practice</h3>
              <div className="space-y-2">
                {[
                  'Considered real-world use',
                  'Weighed multiple solutions',
                  'Made a tradeoff decision'
                ].map((habit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-blue-700">{habit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Think Like an Engineer Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4 mb-6"
            >
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-sm font-bold">T</span>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-purple-800 mb-2">{engineeringPrompt.title}</h3>
                  <p className="text-sm text-purple-700">{engineeringPrompt.content}</p>
                </div>
              </div>
            </motion.div>

            {/* Solution Explanation */}
            {isCompleted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6"
              >
                <h3 className="text-sm font-medium text-green-800 mb-2">Solution Explanation</h3>
                <p className="text-sm text-green-700">{challenge.solutionExplanation}</p>
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

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex justify-between items-center"
        >
          {prev ? (
            <Link
              to={`/challenges/${prev.id}`}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous Project</span>
            </Link>
          ) : (
            <div></div>
          )}
          
          {next ? (
            <Link
              to={`/challenges/${next.id}`}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-blue text-white rounded-lg hover:bg-primary-blue-dark transition-colors"
            >
              <span>Next Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <div></div>
          )}
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