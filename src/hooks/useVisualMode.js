import { useState } from 'react';

export default function useVisualMode(initial) {

  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  
  //Function for transitioning
  function transition(mode, replace = false) {
    if (replace) {
      setHistory(prev => prev.slice(0, -1));
      setHistory(prev => [...prev, mode]);
    } else {
      setHistory(prev => [...prev, mode]); 
    }
    setMode(mode);
  }
  //Function to go back a page
  function back() {
    if (history.length > 1) {
      setHistory(history.slice(0, -1));
      setMode(history[history.length-2]);
    }
  }

  return { mode, transition, back };
}