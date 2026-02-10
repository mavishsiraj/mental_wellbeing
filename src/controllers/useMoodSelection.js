import { useState } from 'react';

/**
 * Custom hook for managing mood selection state
 * @returns {Object} Mood selection state and handlers
 */
const useMoodSelection = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [showCarePackage, setShowCarePackage] = useState(false);

  const handleMoodSelect = (moodKey) => {
    if (selectedMood === moodKey) {
      // If clicking the same mood, close the care package
      setShowCarePackage(false);
      setTimeout(() => setSelectedMood(null), 300);
      return;
    }
    setSelectedMood(moodKey);
    setShowCarePackage(false);
    setTimeout(() => setShowCarePackage(true), 100);
  };

  const handleCloseCarePackage = () => {
    setShowCarePackage(false);
    setTimeout(() => setSelectedMood(null), 300);
  };

  return {
    selectedMood,
    showCarePackage,
    handleMoodSelect,
    handleCloseCarePackage
  };
};

export default useMoodSelection;
