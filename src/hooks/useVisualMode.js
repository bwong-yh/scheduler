import { useState } from "react";

export function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(nextMode) {
    setHistory(history => [...history, nextMode]);
    setMode(nextMode);
  }

  function back() {
    history.length === 1 ? setMode(initial) : setMode(history.splice(-2)[0]);
  }

  return { mode, transition, back };
}
