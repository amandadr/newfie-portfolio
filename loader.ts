export default function imgixLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  const url = new URL(`https://newfie-portfolio-images.imgix.net/${src}`);
  const params = url.searchParams;

  // Auto format and compression
  params.set("auto", "format,compress");

  // Responsive sizing with better fit
  params.set("fit", "crop");
  params.set("w", width.toString());

  // Optimized quality based on device pixel ratio and width
  let optimizedQuality = quality || 75;

  // Reduce quality for larger images to save bandwidth
  if (width > 1920) {
    optimizedQuality = Math.max(optimizedQuality - 15, 50);
  } else if (width > 1200) {
    optimizedQuality = Math.max(optimizedQuality - 10, 60);
  }

  params.set("q", optimizedQuality.toString());

  // Enable progressive JPEG for better perceived performance
  params.set("fm", "jpg");
  params.set("progressive", "true");

  // Optimize for different content types
  params.set("crop", "faces,entropy");

  // Enable client hints for better optimization
  params.set("ch", "dpr");

  return url.href;
}
