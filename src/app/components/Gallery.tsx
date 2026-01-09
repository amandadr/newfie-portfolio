"use client";
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { getOptimalQuality } from "@/utils/imageUtils";

interface GalleryProps {
  images?: Array<string>;
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  if (!images) {
    return null;
  }

  const galleryItems = images.map((src) => {
    const baseUrl = `https://newfie-portfolio-images.imgix.net/${src}`;

    // Optimized URLs for different sizes
    const originalUrl = `${baseUrl}?auto=format,compress&fit=crop&w=1200&q=${getOptimalQuality(
      1200,
      "gallery"
    )}&fm=jpg&progressive=true`;
    const thumbnailUrl = `${baseUrl}?auto=format,compress&fit=crop&w=150&h=100&q=${getOptimalQuality(
      150,
      "thumbnail"
    )}&fm=jpg`;

    return {
      original: originalUrl,
      thumbnail: thumbnailUrl,
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px",
      srcSet: [
        `${baseUrl}?auto=format,compress&fit=crop&w=600&q=${getOptimalQuality(
          600,
          "gallery"
        )}&fm=jpg 600w`,
        `${baseUrl}?auto=format,compress&fit=crop&w=900&q=${getOptimalQuality(
          900,
          "gallery"
        )}&fm=jpg 900w`,
        `${baseUrl}?auto=format,compress&fit=crop&w=1200&q=${getOptimalQuality(
          1200,
          "gallery"
        )}&fm=jpg 1200w`,
      ].join(", "),
    };
  });

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      style={{ zIndex: 100, maxWidth: "100vw" }}
      className="Gallery"
    >
      <ImageGallery
        showFullscreenButton={true}
        items={galleryItems.slice(1)}
        additionalClass="Gallery"
        showPlayButton={false}
        showThumbnails={true}
        thumbnailPosition="top"
        lazyLoad={true}
        useBrowserFullscreen={true}
        showBullets={false}
        showNav={true}
        autoPlay={false}
        slideInterval={3000}
        slideDuration={450}
        swipeThreshold={50}
        flickThreshold={0.4}
      />
    </div>
  );
};

export default Gallery;
