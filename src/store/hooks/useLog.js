import { useRef, useEffect } from "react";
import { detailedDiff } from "../helpers/utility";
import { logEntries } from "../helpers/logger";

export function useLog(name, state) {
  const cheapComparison = (obj1, obj2) => {
    return JSON.stringify(obj1) !== JSON.stringify(obj2);
  };

  const prevState = useRef(state);

  useEffect(() => {
    let deepComparison = {};
    if (cheapComparison(state, prevState.current)) {
      deepComparison = detailedDiff(prevState.current, state);
      logEntries(name, state, prevState.current, deepComparison);
    }

    return () => {
      prevState.current = state;
    };
  }, [name, state, prevState]);
}
