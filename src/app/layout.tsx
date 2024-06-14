import { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import "./globals.css"

export const metadata: Metadata = {
  title: "Amanda Roy | Portfolio",
  description:
    "Amanda Roy's portfolio showcasing full-stack development skills with a personal twist.",
  keywords: "Amanda Roy, Full-Stack Developer, Portfolio, Web Development",
  authors: [{ name: "Amanda Roy", url: "https://amandadroy.com" }],
  creator: "Amanda Roy",
  publisher: "Amanda Roy",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  twitter: {
    card: "summary_large_image",
    title: "Amanda Roy | Portfolio",
    description:
      "Amanda Roy's portfolio showcasing full-stack development skills with a scoff of personal charm.",
  },
};

export const viewport: Viewport = {
  themeColor: "black",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
