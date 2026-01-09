/**
 * Image optimization utilities for the portfolio site
 */

// Lightweight blur data URL for placeholder
export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#a0a0a0" offset="20%" />
      <stop stop-color="#b0b0b0" offset="50%" />
      <stop stop-color="#a0a0a0" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#a0a0a0" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

// Generate optimized blur placeholder
export const getBlurDataURL = (width: number = 1920, height: number = 1080) =>
  `data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`;

// Get optimal image quality based on content type and size
export const getOptimalQuality = (
  width: number,
  contentType: "hero" | "gallery" | "thumbnail" | "general" = "general"
) => {
  let baseQuality = 75;

  switch (contentType) {
    case "hero":
      baseQuality = 85; // High quality for hero images
      break;
    case "gallery":
      baseQuality = 80; // Good quality for gallery
      break;
    case "thumbnail":
      baseQuality = 65; // Lower quality for thumbnails
      break;
    case "general":
    default:
      baseQuality = 75; // Default quality
      break;
  }

  // Reduce quality for larger images to save bandwidth
  if (width > 1920) {
    baseQuality = Math.max(baseQuality - 15, 50);
  } else if (width > 1200) {
    baseQuality = Math.max(baseQuality - 10, 60);
  }

  return baseQuality;
};

// Get responsive sizes string based on component type
export const getResponsiveSizes = (
  type:
    | "hero"
    | "half-width"
    | "third-width"
    | "gallery"
    | "thumbnail"
    | "full-width" = "full-width"
) => {
  switch (type) {
    case "hero":
      return "100vw";
    case "half-width":
      return "(max-width: 768px) 100vw, 50vw";
    case "third-width":
      return "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";
    case "gallery":
      return "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";
    case "thumbnail":
      return "(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 150px";
    case "full-width":
    default:
      return "100vw";
  }
};
