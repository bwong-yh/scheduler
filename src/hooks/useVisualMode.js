import { useState } from "react";

export function useVisualMode(initial) {
  // const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(nextMode, replace = false) {

    if (replace) {
      setHistory(prev => {
        prev.splice(-1, 1, nextMode);
        return prev;
      });
    } else {
      setHistory(prev => [...prev, nextMode]);
      //! why can't we setHistory first, and use setMode[history.length - 1] -> answer: most likely the async nature of javascript, mode isn't set at the time we push into the array
      // setMode(history[history.length - 1 ])
      // setMode(nextMode);
    }
  }

  function back() {
    if (history.length > 1) {
      // need to setMode before setHistory -> unable to setHistory if current mode is the last index of history array
      // setMode(history[history.length - 2]);
      setHistory(prev => [...prev].slice(0, -1));
    }
  }

  // mode is ALWAYS the last item from the history array
  return { mode: history[history.length - 1], transition, back };
}
