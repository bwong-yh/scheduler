import { useState } from "react";

export function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(nextMode) {
    setHistory(prev => [...prev, nextMode]);
    setMode(nextMode);
  }

  function back() {
    if (history.length > 1) {
      // need to setMode before setHistory -> unable to setHistory if current mode is the last index of history array
      setMode(history[history.length - 2]);
      setHistory(prev =>
        [...prev].slice(0, -1)
      );
    }
  }

  return { mode, transition, back };
}
