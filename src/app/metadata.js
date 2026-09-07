const title = "Esteban Leandro Marin | Full-stack Engineer & Applied AI";
const description =
  "Full-stack engineer with 10+ years of experience across small businesses, outsourcing, remote teams, and big tech. Building useful products and applied AI systems.";

export const metadata = {
  metadataBase: new URL("https://estebanleandro.com"),
  title: {
    default: title,
    template: "%s | Esteban Leandro Marin",
  },
  description,
  keywords: [
    "Esteban Leandro Marin",
    "Fullstack Developer",
    "React",
    "Next.js",
    ".NET",
    "Applied AI",
    "Harness engineering",
    "RAG",
    "AI evaluation",
    "Portfolio",
  ],
  authors: [{ name: "Esteban Leandro Marin" }],
  openGraph: {
    title,
    description,
    url: "https://estebanleandro.com",
    siteName: "Esteban Leandro Marin",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon.svg",
  },
};