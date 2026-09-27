import type { Metadata } from "next";
import "../globals.css";
import { fontClass } from "../fonts";
import { metadataBaseUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: metadataBaseUrl(),
  title: "Daniel Cruz Paredes — Full-stack Developer",
  description:
    "Full-stack developer in San Pedro Sula, Honduras. Next.js, NestJS, PostgreSQL, Docker and CI/CD. Available for freelance projects.",
  authors: [{ name: "Daniel Cruz Paredes" }],
  alternates: {
    canonical: "/",
    languages: { en: "/", es: "/es" },
  },
  openGraph: {
    title: "Daniel Cruz Paredes — Full-stack Developer",
    description:
      "Next.js, NestJS, PostgreSQL, Docker and CI/CD. Available for freelance projects.",
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Cruz Paredes — Full-stack Developer",
    description:
      "Next.js, NestJS, PostgreSQL, Docker and CI/CD. Available for freelance projects.",
  },
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontClass}>
      <body>{children}</body>
    </html>
  );
}
