import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../navigation/routes';

export const useStoryLogic = (storyData) => {
  const navigate = useNavigate();
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [resultText, setResultText] = useState('');
  const [gameStatus, setGameStatus] = useState('PLAYING'); // PLAYING, LOST, WON

  const currentScene = storyData?.sahneler?.[currentSceneIndex];

  const handleOptionClick = (option) => {
    setResultText(option.sonuc_metni);
    setShowResult(true);
    
    if (option.sonuc === 'OLUM') {
      setGameStatus('LOST');
    } else if (option.sonuc === 'KAZANDIN') {
      setGameStatus('WON');
    } else {
      setGameStatus('PLAYING');
    }
  };

  const handleNextScene = () => {
    if (currentSceneIndex < storyData.sahneler.length - 1) {
      setCurrentSceneIndex(prev => prev + 1);
      setShowResult(false);
    } else {
      navigate(ROUTES.HOME);
    }
  };

  const handleGoHome = () => {
    navigate(ROUTES.HOME);
  };

  return {
    currentScene,
    currentSceneIndex,
    showResult,
    resultText,
    gameStatus,
    handleOptionClick,
    handleNextScene,
    handleGoHome
  };
};
