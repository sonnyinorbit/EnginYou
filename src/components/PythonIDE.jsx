import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, RotateCcw, Lightbulb, CheckCircle, XCircle, AlertCircle, Eye, Rocket } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';
import ProjectIdeas from './ProjectIdeas';

const PythonIDE = ({ challenge, onComplete }) => {
  const [code, setCode] = useState(challenge.starterCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState([]);
  const [currentHint, setCurrentHint] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [pyodide, setPyodide] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showPortfolioProjects, setShowPortfolioProjects] = useState(false);
  
  const { completeChallenge, trackHintUsage } = useProgress();
  const outputRef = useRef(null);

  // Initialize Pyodide
  useEffect(() => {
    const loadPyodide = async () => {
      try {
        setIsLoading(true);
        // Wait for Pyodide to be available globally
        if (window.loadPyodide) {
          const pyodideInstance = await window.loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/"
          });
          setPyodide(pyodideInstance);
        } else {
          // Fallback: wait for script to load
          await new Promise(resolve => {
            const checkPyodide = () => {
              if (window.loadPyodide) {
                resolve();
              } else {
                setTimeout(checkPyodide, 100);
              }
            };
            checkPyodide();
          });
          const pyodideInstance = await window.loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/"
          });
          setPyodide(pyodideInstance);
        }
        setIsLoading(false);
      } catch (err) {
        console.error('Failed to load Pyodide:', err);
        setError('Failed to load Python runtime. Please refresh the page.');
        setIsLoading(false);
      }
    };

    loadPyodide();
  }, []);

  // Reset code when challenge changes
  useEffect(() => {
    setCode(challenge.starterCode);
    setOutput('');
    setTestResults([]);
    setCurrentHint(0);
    setShowHint(false);
    setIsCompleted(false);
    setError('');
    setFailedAttempts(0);
    setShowAnswer(false);
  }, [challenge]);

  const runCode = async () => {
    if (!pyodide || isRunning) return;

    setIsRunning(true);
    setOutput('');
    setTestResults([]);
    setError('');

    try {
      // Capture stdout
      let capturedOutput = '';
      pyodide.globals.set('print', (text) => {
        capturedOutput += text + '\n';
      });

      // Run the code
      await pyodide.runPythonAsync(code);
      
      setOutput(capturedOutput.trim());
      
      // Run test cases
      await runTestCases(capturedOutput.trim());
      
    } catch (err) {
      setError(err.message);
      setOutput(`Error: ${err.message}`);
      // Increment failed attempts on any error
      setFailedAttempts(prev => prev + 1);
    } finally {
      setIsRunning(false);
    }
  };

  const runTestCases = async (actualOutput) => {
    const results = challenge.testCases.map((testCase, index) => {
      let passed;
      if (testCase.expectedOutput instanceof RegExp) {
        passed = testCase.expectedOutput.test(actualOutput.trim());
      } else {
        passed = actualOutput.trim() === testCase.expectedOutput.trim();
      }
      return {
        ...testCase,
        passed,
        actual: actualOutput.trim()
      };
    });

    setTestResults(results);

    // Check if all tests passed
    const allPassed = results.every(result => result.passed);
    if (allPassed && !isCompleted) {
      setIsCompleted(true);
      completeChallenge(challenge.id, challenge.reward);
      if (onComplete) {
        onComplete();
      }
    } else if (!allPassed) {
      // Increment failed attempts
      setFailedAttempts(prev => prev + 1);
    }
  };

  const resetCode = () => {
    setCode(challenge.starterCode);
    setOutput('');
    setTestResults([]);
    setError('');
    setFailedAttempts(0);
    setShowAnswer(false);
  };

  const getHint = () => {
    if (currentHint < challenge.hints.length) {
      trackHintUsage(challenge.id, currentHint + 1);
      setCurrentHint(prev => prev + 1);
      setShowHint(true);
    }
  };

  const getCurrentHint = () => {
    return challenge.hints[currentHint - 1] || '';
  };

  const showSolution = () => {
    if (challenge.solution) {
      setCode(challenge.solution);
      setShowAnswer(true);
      
      // Track "Show Answer" usage
      if (window.plausible) {
        window.plausible('Show Answer Clicked', {
          props: {
            challengeId: challenge.id,
            challengeTitle: challenge.title,
            failedAttempts: failedAttempts
          }
        });
      }
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{challenge.title}</h3>
            <p className="text-sm text-gray-600">{challenge.description}</p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={getHint}
              disabled={currentHint >= challenge.hints.length}
              className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Lightbulb className="w-4 h-4" />
              <span>Hint ({currentHint}/{challenge.hints.length})</span>
            </button>
            {failedAttempts >= 3 && !showAnswer && (
              <button
                onClick={showSolution}
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-orange-700 bg-orange-50 border border-orange-300 rounded-lg hover:bg-orange-100"
              >
                <Eye className="w-4 h-4" />
                <span>Show Answer</span>
              </button>
            )}
            <button
              onClick={resetCode}
              className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </button>
            <button
              onClick={runCode}
              disabled={isRunning || isLoading}
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-primary-blue rounded-lg hover:bg-primary-blue-dark disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Play className="w-4 h-4" />
              <span>{isRunning ? 'Running...' : 'Run Code'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="p-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-blue mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Python runtime...</p>
        </div>
      )}

      {/* Main Content */}
      {!isLoading && (
        <div className="grid lg:grid-cols-2 gap-6 p-6">
          {/* Code Editor */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium text-gray-700">Python Code</h4>
              <div className="text-xs text-gray-500 font-mono">Python 3.9</div>
            </div>
            {showAnswer && (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-2">
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4 text-orange-600" />
                  <span className="text-sm font-medium text-orange-800">Showing Solution</span>
                </div>
                <p className="text-xs text-orange-700 mt-1">This is the complete solution. Study it to understand the approach!</p>
              </div>
            )}
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-96 p-4 font-mono text-sm bg-gray-900 text-gray-100 rounded-lg border border-gray-700 focus:ring-2 focus:ring-primary-blue focus:border-transparent resize-none"
              placeholder="Write your Python code here..."
              spellCheck="false"
            />
            <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded border">
              <strong>Python Tip:</strong> Use spaces for indentation (not tabs). Most editors convert tabs to 4 spaces automatically.
            </div>
            {failedAttempts > 0 && (
              <div className="text-sm text-gray-600">
                Failed attempts: {failedAttempts}/3
                {failedAttempts >= 3 && !showAnswer && (
                  <span className="text-orange-600 ml-2">• Click "Show Answer" to see the solution</span>
                )}
              </div>
            )}
          </div>

          {/* Output and Results */}
          <div className="space-y-4">
            {/* Output */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Output</h4>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm min-h-[200px] max-h-[200px] overflow-y-auto">
                {error ? (
                  <div className="text-red-400">{output}</div>
                ) : (
                  <div ref={outputRef}>{output || 'Run your code to see the output...'}</div>
                )}
              </div>
            </div>

            {/* Test Results */}
            {testResults.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Test Results</h4>
                <div className="space-y-2">
                  {testResults.map((result, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border ${
                        result.passed
                          ? 'bg-green-50 border-green-200'
                          : 'bg-red-50 border-red-200'
                      }`}
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        {result.passed ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <XCircle className="w-4 h-4 text-red-500" />
                        )}
                        <span className="text-sm font-medium">
                          Test {index + 1}: {result.passed ? 'Passed' : 'Failed'}
                        </span>
                      </div>
                      <div className="text-xs text-gray-600">
                        <div>Expected: {result.expectedOutput instanceof RegExp ? result.expectedOutput.toString() : result.expectedOutput}</div>
                        <div>Actual: {result.actual}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Hint */}
            {showHint && getCurrentHint() && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg"
              >
                <div className="flex items-start space-x-2">
                  <Lightbulb className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="text-sm font-medium text-yellow-800 mb-1">
                      Hint {currentHint}
                    </h5>
                    <p className="text-sm text-yellow-700">{getCurrentHint()}</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Completion Message */}
            {isCompleted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-green-50 border border-green-200 rounded-lg"
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <div>
                    <h5 className="text-sm font-medium text-green-800">
                      Challenge Complete! 🎉
                    </h5>
                    <p className="text-sm text-green-700">
                      You earned {challenge.reward} Enguinity Points!
                    </p>
                  </div>
                </div>
                
                {/* Portfolio Projects Button */}
                <div className="mt-4 pt-4 border-t border-green-200">
                  <button
                    onClick={() => setShowPortfolioProjects(true)}
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm flex items-center justify-center space-x-2"
                  >
                    <Rocket className="w-4 h-4" />
                    <span>View Portfolio Projects</span>
                  </button>
                  <p className="text-xs text-gray-600 mt-2 text-center">
                    Ready to build something real? Check out project ideas for your next challenge.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      )}

      {/* Portfolio Projects Modal */}
      {showPortfolioProjects && (
        <ProjectIdeas
          trackName={challenge.id.split('_')[0]}
          onClose={() => setShowPortfolioProjects(false)}
        />
      )}
    </div>
  );
};

export default PythonIDE; 