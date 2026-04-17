export const calculateScrollPercentage = (
  element: HTMLElement | null,
  scrollContainer: HTMLElement | Window = window,
): number => {
  if (!element) return 0;

  const isWindow = scrollContainer === window;

  const scrollY = isWindow
    ? window.scrollY
    : (scrollContainer as HTMLElement).scrollTop;

  const containerHeight = isWindow
    ? window.innerHeight
    : (scrollContainer as HTMLElement).clientHeight;

  const elementRect = element.getBoundingClientRect();

  if (isWindow) {
    // Window-based scroll: simple case
    const elementOffsetInDocument = elementRect.top + window.scrollY;
    const scrollable = element.offsetHeight - containerHeight;

    if (scrollable <= 0) return 0;

    const scrollPercent = (scrollY - elementOffsetInDocument) / scrollable;
    return Math.max(0, Math.min(1, scrollPercent));
  } else {
    // Container-based scroll: account for container position
    const container = scrollContainer as HTMLElement;
    const containerRect = container.getBoundingClientRect();

    // Element's top edge relative to container's content (not viewport)
    const elementTopInContainer = elementRect.top - containerRect.top + scrollY;

    const scrollable = element.offsetHeight - containerHeight;
    if (scrollable <= 0) return 0;

    const scrollPercent = (scrollY - elementTopInContainer) / scrollable;
    return Math.max(0, Math.min(1, scrollPercent));
  }
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
