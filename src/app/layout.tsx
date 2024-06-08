import Head from "next/head";
import type { Metadata, Viewport } from "next";
import React from "react";

// Next up: Routes!!

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
  manifest: '/manifest.json',
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
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <link rel="stylesheet" href="./src/index.css" />
      </Head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">{children}</div>
        <script type="module" src="/src/index.tsx"></script>
      </body>
    </>
  );
}
