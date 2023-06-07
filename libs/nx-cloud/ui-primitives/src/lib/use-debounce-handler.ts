// https://github.com/mui/mui-toolpad/blob/master/packages/toolpad-app/src/utils/useDebouncedHandler.ts
import { MutableRefObject, useCallback, useEffect, useRef } from 'react';

interface Handler<P extends any[]> {
  (...params: P): void;
}

interface DelayedInvocation<P extends any[]> {
  startTime: number;
  timeout: NodeJS.Timeout;
  params: P;
}

function clear<P extends any[]>(
  delayedInvocation: MutableRefObject<DelayedInvocation<P> | null>
) {
  if (delayedInvocation.current) {
    clearTimeout(delayedInvocation.current.timeout);
    delayedInvocation.current = null;
  }
}

function defer<P extends any[]>(
  fn: MutableRefObject<Handler<P>>,
  params: P,
  delay: number
) {
  const timeout = setTimeout(() => {
    fn.current(...params);
  }, delay);

  return { startTime: Date.now(), timeout, params };
}

/**
 * Creates a debounced version of the handler that is passed. The invocation of [fn] is
 * delayed for [delay] milliseconds from the last invocation of the debounced function.
 *
 * This implementation adds to the lodash implementation in that it handles updates to the
 * delay value.
 */
export function useDebouncedHandler<P extends any[]>(
  fn: Handler<P>,
  delay: number
): Handler<P> {
  const fnRef = useRef(fn);
  useEffect(() => {
    fnRef.current = fn;
  }, [fn]);

  const delayedInvocation = useRef<DelayedInvocation<P> | null>(null);

  useEffect(() => {
    if (!delayedInvocation.current) {
      return;
    }

    const { startTime, params } = delayedInvocation.current;

    const elapsed = Date.now() - startTime;
    const newDelay = Math.max(delay - elapsed, 0);

    clear(delayedInvocation);
    delayedInvocation.current = defer(fnRef, params, newDelay);
  }, [delay]);

  return useCallback(
    (...params: P) => {
      clear(delayedInvocation);
      delayedInvocation.current = defer(fnRef, params, delay);
    },
    [delay]
  );
}
