/**
 * Image preloader utility for critical images
 */

interface PreloadOptions {
  priority?: "high" | "low";
  fetchpriority?: "high" | "low" | "auto";
  quality?: number;
  width?: number;
  formats?: string[];
}

// Preload critical images
export const preloadImage = (
  src: string,
  options: PreloadOptions = {}
): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      resolve();
      return;
    }

    const {
      priority = "high",
      fetchpriority = "high",
      quality = 85,
      width = 1920,
      formats = ["webp", "jpg"],
    } = options;

    // Create optimized URL for preloading
    const optimizedSrc = `https://newfie-portfolio-images.imgix.net/${src}?auto=format,compress&fit=crop&w=${width}&q=${quality}&fm=jpg&progressive=true`;

    // Use link preload for critical images
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = optimizedSrc;
    link.crossOrigin = "anonymous";

    if ("fetchPriority" in link) {
      (link as any).fetchPriority = fetchpriority;
    }

    link.onload = () => {
      resolve();
    };

    link.onerror = () => {
      // Fallback to Image object if link preload fails
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => reject(new Error(`Failed to preload ${src}`));
      img.src = optimizedSrc;
    };

    document.head.appendChild(link);
  });
};

// Preload multiple images with priority handling
export const preloadImages = async (
  images: Array<{ src: string; options?: PreloadOptions }>
): Promise<void> => {
  const highPriorityImages = images.filter(
    (img) => img.options?.priority === "high" || !img.options?.priority
  );
  const lowPriorityImages = images.filter(
    (img) => img.options?.priority === "low"
  );

  // Load high priority images first
  await Promise.all(
    highPriorityImages.map(({ src, options }) => preloadImage(src, options))
  );

  // Load low priority images after a short delay
  setTimeout(() => {
    lowPriorityImages.forEach(({ src, options }) => preloadImage(src, options));
  }, 100);
};

// Intersection Observer for lazy loading optimization
export class LazyImageLoader {
  private observer: IntersectionObserver | null = null;
  private images: Map<Element, string> = new Map();

  constructor() {
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              const src = this.images.get(img);
              if (src && img instanceof HTMLImageElement) {
                img.src = src;
                img.classList.remove("lazy-loading");
                img.classList.add("lazy-loaded");
                this.observer?.unobserve(img);
                this.images.delete(img);
              }
            }
          });
        },
        {
          rootMargin: "50px 0px", // Start loading 50px before entering viewport
          threshold: 0.1,
        }
      );
    }
  }

  observe(img: HTMLImageElement, src: string) {
    if (this.observer) {
      this.images.set(img, src);
      img.classList.add("lazy-loading");
      this.observer.observe(img);
    }
  }

  disconnect() {
    if (this.observer) {
      this.observer.disconnect();
      this.images.clear();
    }
  }
}

// Singleton instance
export const lazyLoader = new LazyImageLoader();
