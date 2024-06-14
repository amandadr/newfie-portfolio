export default function imgixLoader({ src, width, quality }: { src: string, width: number, quality: number }): string {
  const url = new URL(`https://newfie-portfolio-images.imgix.net/${src}/`);
  const params = url.searchParams;
  params.set("auto", params.getAll("auto").join(",") || "format");
  params.set("fit", params.get("fit") || "max");
  params.set("w", params.get("w") || width.toString());
  params.set("q", (quality || 50).toString());
  return url.href;
}