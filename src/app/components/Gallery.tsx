"use client";
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

interface GalleryProps {
  images?: Array<string>;
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  if (!images) {
    return null;
  }

  const galleryItems = images.map((src) => ({
    original: `https://newfie-portfolio-images.imgix.net/${src}/`,
    thumbnail: `https://newfie-portfolio-images.imgix.net/${src}/`,
    sizes: "90vw",
  }));

  return (
    <div onClick={(e) => e.stopPropagation()} style={{ zIndex: 100 }}>
      <ImageGallery
        showFullscreenButton={true}
        items={galleryItems.slice(1)}
        additionalClass="Gallery"
        showPlayButton={false}
        showThumbnails={true}
        thumbnailPosition="top"
        lazyLoad={true}
      />
    </div>
  );
};

export default Gallery;
