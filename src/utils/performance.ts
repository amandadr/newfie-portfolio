"use client";

/**
 * Performance optimization utilities
 * Implements resource hints, critical resource loading, and runtime optimizations
 */

// Resource hints for critical resources
export const addResourceHints = () => {
  if (typeof window === "undefined") return;

  const head = document.head;

  // DNS prefetch for external domains
  const dnsPrefetch = [
    "newfie-portfolio-images.imgix.net",
    "cdn.jsdelivr.net",
    "fonts.googleapis.com",
    "fonts.gstatic.com",
  ];

  dnsPrefetch.forEach((domain) => {
    const link = document.createElement("link");
    link.rel = "dns-prefetch";
    link.href = `//${domain}`;
    head.appendChild(link);
  });

  // Preconnect to critical domains
  const preconnect = ["https://newfie-portfolio-images.imgix.net"];

  preconnect.forEach((url) => {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = url;
    link.crossOrigin = "anonymous";
    head.appendChild(link);
  });
};

// Critical CSS loading
export const loadCriticalCSS = () => {
  if (typeof window === "undefined") return;

  const criticalCSS = `
    /* Critical above-the-fold styles */
    body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif; }
    .hero-container { position: relative; width: 100vw; height: 100vh; }
    .loading-spinner { 
      width: 32px; height: 32px; 
      border: 2px solid #e5e7eb; 
      border-top: 2px solid #3b82f6; 
      border-radius: 50%; 
      animation: spin 1s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    .shimmer {
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200px 100%;
      animation: shimmer 1.5s infinite;
    }
    @keyframes shimmer {
      0% { background-position: -200px 0; }
      100% { background-position: calc(200px + 100%) 0; }
    }
  `;

  const style = document.createElement("style");
  style.textContent = criticalCSS;
  document.head.appendChild(style);
};

// Intersection Observer for performance monitoring
export class PerformanceObserver {
  private observers: Map<string, IntersectionObserver> = new Map();
  private metrics: Map<string, number> = new Map();

  observeElement(
    element: Element,
    callback: (entry: IntersectionObserverEntry) => void,
    options: IntersectionObserverInit = { threshold: 0.1 }
  ) {
    const observerId = Math.random().toString(36).substr(2, 9);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const loadTime = performance.now();
          this.metrics.set(observerId, loadTime);
          callback(entry);
        }
      });
    }, options);

    observer.observe(element);
    this.observers.set(observerId, observer);

    return observerId;
  }

  disconnect(observerId?: string) {
    if (observerId) {
      const observer = this.observers.get(observerId);
      if (observer) {
        observer.disconnect();
        this.observers.delete(observerId);
        this.metrics.delete(observerId);
      }
    } else {
      this.observers.forEach((observer) => observer.disconnect());
      this.observers.clear();
      this.metrics.clear();
    }
  }

  getMetrics() {
    return Array.from(this.metrics.entries()).map(([id, time]) => ({
      id,
      time,
    }));
  }
}

// Memory optimization utilities
export const memoryOptimizations = {
  // Clean up event listeners
  cleanupEventListeners: () => {
    if (typeof window === "undefined") return;

    // Store references to cleanup functions
    const cleanupFunctions: (() => void)[] = [];

    // Override addEventListener to track listeners
    const originalAddEventListener = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function (
      type,
      listener,
      options
    ) {
      const cleanup = () => this.removeEventListener(type, listener, options);
      cleanupFunctions.push(cleanup);
      return originalAddEventListener.call(this, type, listener, options);
    };

    // Cleanup function
    return () => cleanupFunctions.forEach((cleanup) => cleanup());
  },

  // Debounce utility for expensive operations
  debounce: <T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(null, args), wait);
    };
  },

  // Throttle utility for scroll/resize handlers
  throttle: <T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func.apply(null, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },
};

// Font loading optimization
export const optimizeFontLoading = () => {
  if (typeof window === "undefined" || !("fonts" in document)) return;

  const fontDisplay = "swap"; // Use font-display: swap for better CLS

  // Preload critical fonts
  const criticalFonts = [
    {
      family: "Inter",
      weight: "400",
      style: "normal",
    },
    {
      family: "Inter",
      weight: "500",
      style: "normal",
    },
  ];

  criticalFonts.forEach((font) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "font";
    link.type = "font/woff2";
    link.crossOrigin = "anonymous";
    link.href = `https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2`;
    document.head.appendChild(link);
  });
};

// Image loading optimization
export const optimizeImageLoading = () => {
  if (typeof window === "undefined") return;

  // Native lazy loading support check
  const supportsNativeLazyLoading = "loading" in HTMLImageElement.prototype;

  // Intersection observer for images without native support
  if (!supportsNativeLazyLoading) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.dataset.src;
          if (src) {
            img.src = src;
            img.removeAttribute("data-src");
            observer.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img);
    });
  }
};

// Runtime performance monitoring
export const runtimePerformanceMonitor = {
  startTiming: (label: string) => {
    if (typeof window !== "undefined" && window.performance) {
      performance.mark(`${label}-start`);
    }
  },

  endTiming: (label: string) => {
    if (typeof window !== "undefined" && window.performance) {
      performance.mark(`${label}-end`);
      performance.measure(label, `${label}-start`, `${label}-end`);

      const measure = performance.getEntriesByName(label)[0];
      console.log(`${label}: ${measure.duration.toFixed(2)}ms`);

      return measure.duration;
    }
    return 0;
  },

  getPerformanceMetrics: () => {
    if (typeof window === "undefined" || !window.performance) return {};

    const navigation = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming;

    return {
      // Page load metrics
      domContentLoaded:
        navigation.domContentLoadedEventEnd -
        navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,

      // Network metrics
      dnsLookup: navigation.domainLookupEnd - navigation.domainLookupStart,
      tcpConnection: navigation.connectEnd - navigation.connectStart,
      serverResponse: navigation.responseEnd - navigation.requestStart,

      // Rendering metrics
      domParsing: navigation.domInteractive - navigation.responseEnd,
      resourceLoading:
        navigation.loadEventStart - navigation.domContentLoadedEventEnd,
    };
  },
};

// Initialize performance optimizations
export const initPerformanceOptimizations = () => {
  if (typeof window === "undefined") return;

  // Add resource hints
  addResourceHints();

  // Load critical CSS
  loadCriticalCSS();

  // Optimize font loading
  optimizeFontLoading();

  // Optimize image loading
  optimizeImageLoading();

  console.log("Performance optimizations initialized");
};
