"use client";
import React, { useState, useRef, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import {
  getBlurDataURL,
  getOptimalQuality,
  getResponsiveSizes,
} from "@/utils/imageUtils";
import { preloadImage } from "@/utils/imagePreloader";
import clientLogger from "@/utils/clientLogger";

interface OptimizedImageProps
  extends Omit<ImageProps, "src" | "quality" | "sizes"> {
  src: string;
  contentType?: "hero" | "gallery" | "thumbnail" | "general";
  sizeType?:
    | "hero"
    | "half-width"
    | "third-width"
    | "gallery"
    | "thumbnail"
    | "full-width";
  preload?: boolean;
  eager?: boolean;
  quality?: number;
  width?: number;
  height?: number;
  onLoadStart?: () => void;
  onLoadComplete?: () => void;
  onLoadError?: (error: Error) => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  contentType = "general",
  sizeType = "full-width",
  preload = false,
  eager = false,
  quality,
  width = 1920,
  height = 1080,
  priority = false,
  onLoadStart,
  onLoadComplete,
  onLoadError,
  className = "",
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [loadTime, setLoadTime] = useState<number>(0);
  const loadStartTime = useRef<number>(0);
  const imageRef = useRef<HTMLImageElement>(null);

  // Calculate optimal quality
  const imageQuality = quality || getOptimalQuality(width, contentType);
  const responsiveSizes = getResponsiveSizes(sizeType);

  useEffect(() => {
    // Preload critical images
    if (preload && src) {
      preloadImage(src, {
        priority: "high",
        quality: imageQuality,
        width: width,
      }).catch((error) => {
        clientLogger.warn("Failed to preload image", {
          src,
          error: error.message,
        });
      });
    }
  }, [src, preload, imageQuality, width]);

  const handleLoadStart = () => {
    loadStartTime.current = performance.now();
    setIsLoading(true);
    onLoadStart?.();
  };

  const handleLoadComplete = () => {
    const endTime = performance.now();
    const duration = endTime - loadStartTime.current;
    setLoadTime(duration);
    setIsLoading(false);
    onLoadComplete?.();

    // Log performance metrics for critical images
    if (priority || preload) {
      clientLogger.info("Image loaded", {
        src,
        loadTime: Math.round(duration),
        contentType,
        quality: imageQuality,
      });
    }
  };

  const handleError = (event: any) => {
    setHasError(true);
    setIsLoading(false);
    const errorObj = new Error(`Failed to load image: ${src}`);
    onLoadError?.(errorObj);
    clientLogger.error("Image load error", {
      src,
      error: event.message || "Unknown error",
    });
  };

  // Loading skeleton styles
  const loadingClass = isLoading ? "animate-pulse bg-gray-200" : "";
  const errorClass = hasError ? "bg-red-100" : "";

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        quality={imageQuality}
        sizes={responsiveSizes}
        priority={priority || eager}
        placeholder="blur"
        blurDataURL={getBlurDataURL(width, height)}
        className={`transition-opacity duration-300 ${loadingClass} ${errorClass} ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoadStart={handleLoadStart}
        onLoad={handleLoadComplete}
        onError={handleError}
        {...props}
      />

      {/* Loading indicator for critical images */}
      {isLoading && (priority || preload) && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50">
          <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center p-4">
            <div className="text-gray-500 text-sm">Failed to load image</div>
            <button
              onClick={() => {
                setHasError(false);
                setIsLoading(true);
                // Force reload by updating key
                if (imageRef.current) {
                  imageRef.current.src = imageRef.current.src;
                }
              }}
              className="mt-2 px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Retry
            </button>
          </div>
        </div>
      )}

      {/* Development performance info */}
      {process.env.NODE_ENV === "development" && loadTime > 0 && (
        <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          {Math.round(loadTime)}ms
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
