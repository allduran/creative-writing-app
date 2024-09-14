import { useEffect, useState } from 'react';
import fetchDailyPrompt from '../utils/fetchPrompt';
import Button from './Button';
import '../styles/DailyPrompt.css';

const DailyPrompt = () => {
  const [prompt, setPrompt] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [hint, setHint] = useState('');

  useEffect(() => {
    const getPrompt = async () => {
      const { prompt, hint } = await fetchDailyPrompt();
      setPrompt(prompt);
      setHint(hint);
    };

    getPrompt();
  }, []);

  const toggleHint = () => {
    setShowHint(prevShowHint => !prevShowHint);
  }

  return (
    <div className="daily-prompt-container">
      <h1 className="daily-prompt-title">Today&apos;s Creative Writing Prompt</h1>
      <p className="daily-prompt-content">{prompt}</p>

      {/* Show hint button */}
      {hint && <Button label={showHint ? "Hide Hint" : "Show Hint"} onClick={toggleHint} />}

      {/* Hint display */}
      {showHint && <p className="daily-prompt-hint">{hint}</p>}
    </div>
  );
};

export default DailyPrompt;
