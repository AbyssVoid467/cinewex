export const calculateScrollPercentage = (
  element: HTMLElement | null,
): number => {
  if (!element) return 0;

  const scrollPercent =
    (window.scrollY - element.offsetTop) /
    (element.offsetHeight - window.innerHeight);

  return Math.max(0, Math.min(1, scrollPercent));
};

export const throttle = <T extends (...args: unknown[]) => void>(
  func: T,
  delay: number,
): ((...args: Parameters<T>) => void) => {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
};
