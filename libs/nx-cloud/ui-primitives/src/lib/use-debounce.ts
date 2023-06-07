// https://github.com/mui/mui-toolpad/blob/master/packages/toolpad-app/src/utils/useDebounced.ts
import { useEffect, useRef, useState } from 'react';

export function useDebounced<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(() => value);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(
    () => () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
        timeoutIdRef.current = null;
      }
    },
    []
  );

  useEffect(() => {
    timeoutIdRef.current = setTimeout(
      () => setDebouncedValue(() => value),
      delay
    );

    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
        timeoutIdRef.current = null;
      }
    };
  }, [value, delay]);

  return debouncedValue;
}
