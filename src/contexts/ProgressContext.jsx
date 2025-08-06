import React, { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

// Analytics helper function
const trackEvent = (eventName, props = {}) => {
  if (window.plausible) {
    window.plausible(eventName, { props });
  }
};

export const ProgressProvider = ({ children }) => {
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [hintsUsed, setHintsUsed] = useState({});

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('enginyou-progress');
    const savedPoints = localStorage.getItem('enginyou-points');
    const savedHints = localStorage.getItem('enginyou-hints');

    // console.log('Loading from localStorage:', { savedProgress, savedPoints, savedHints });

    if (savedProgress) {
      setCompletedChallenges(JSON.parse(savedProgress));
    }
    if (savedPoints) {
      setTotalPoints(parseInt(savedPoints));
    }
    if (savedHints) {
      setHintsUsed(JSON.parse(savedHints));
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('enginyou-progress', JSON.stringify(completedChallenges));
  }, [completedChallenges]);

  useEffect(() => {
    localStorage.setItem('enginyou-points', totalPoints.toString());
    // console.log('Saving points to localStorage:', totalPoints);
  }, [totalPoints]);

  useEffect(() => {
    localStorage.setItem('enginyou-hints', JSON.stringify(hintsUsed));
  }, [hintsUsed]);

  const completeChallenge = (challengeId, points) => {
    if (!completedChallenges.includes(challengeId)) {
      setCompletedChallenges(prev => [...prev, challengeId]);
      setTotalPoints(prev => prev + points);
      
      // Track challenge completion
      trackEvent('Challenge Completed', {
        challengeId,
        points,
        totalCompleted: completedChallenges.length + 1,
        totalPoints: totalPoints + points
      });
    }
  };

  const isChallengeCompleted = (challengeId) => {
    return completedChallenges.includes(challengeId);
  };

  const trackHintUsage = (challengeId, hintNumber) => {
    const key = `${challengeId}-${hintNumber}`;
    setHintsUsed(prev => ({
      ...prev,
      [key]: (prev[key] || 0) + 1
    }));
    
    // Track hint usage
    trackEvent('Hint Used', {
      challengeId,
      hintNumber,
      totalHintsUsed: Object.keys(hintsUsed).length + 1
    });
  };

  const getHintUsage = (challengeId, hintNumber) => {
    const key = `${challengeId}-${hintNumber}`;
    return hintsUsed[key] || 0;
  };

  const resetProgress = () => {
    setCompletedChallenges([]);
    setTotalPoints(0);
    setHintsUsed({});
    localStorage.removeItem('enginyou-progress');
    localStorage.removeItem('enginyou-points');
    localStorage.removeItem('enginyou-hints');
    
    // Track progress reset
    trackEvent('Progress Reset');
  };

  const getProgressPercentage = (categoryId) => {
    // This would need to be implemented based on your challenge structure
    // For now, return a simple calculation
    return Math.round((completedChallenges.length / 10) * 100); // Assuming 10 total challenges
  };

  const value = {
    completedChallenges,
    totalPoints,
    hintsUsed,
    completeChallenge,
    isChallengeCompleted,
    trackHintUsage,
    getHintUsage,
    resetProgress,
    getProgressPercentage
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}; 