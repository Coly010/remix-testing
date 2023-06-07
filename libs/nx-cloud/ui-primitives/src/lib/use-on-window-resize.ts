import { useEffect, useState } from 'react';

export const useOnWindowResize = (
  handler: { (size: number): void },
  initialWindowSize?: number
) => {
  const [windowSize, setWindowSize] = useState<undefined | number>(
    initialWindowSize
  );
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
      handler(window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [handler, windowSize]);
};
