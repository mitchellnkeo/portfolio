// Hook for fade-in animations on scroll
export function useScrollAnimation() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observeElement = (element: HTMLElement | null, callback: () => void) => {
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    observer.observe(element);
  };

  return { observeElement };
}

