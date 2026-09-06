// src/app/metadata.js
export const metadata = {
  metadataBase: new URL("https://estebanleandro.com"),
  title: {
    default: "Esteban Leandro Marin | Senior Fullstack Developer",
    template: "%s | Esteban Leandro Marin",
  },
  description:
    "Portfolio of Esteban Leandro Marin, a Senior Fullstack Developer specializing in React, Next.js, and .NET.",
  keywords: [
    "Esteban Leandro Marin",
    "Fullstack Developer",
    "React",
    "Next.js",
    ".NET",
    "Portfolio",
  ],
  authors: [{ name: "Esteban Leandro Marin" }],
  openGraph: {
    title: "Esteban Leandro Marin | Senior Fullstack Developer",
    description:
      "Portfolio of Esteban Leandro Marin, a Senior Fullstack Developer specializing in React, Next.js, and .NET.",
    url: "https://estebanleandro.com",
    siteName: "Esteban Leandro Marin",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Esteban Leandro Marin | Senior Fullstack Developer",
    description:
      "Portfolio of Esteban Leandro Marin, a Senior Fullstack Developer specializing in React, Next.js, and .NET.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};