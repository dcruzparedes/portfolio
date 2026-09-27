import type { Metadata } from "next";
import "../globals.css";
import { fontClass } from "../fonts";
import { metadataBaseUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: metadataBaseUrl(),
  title: "Daniel Cruz Paredes — Desarrollador full-stack",
  description:
    "Desarrollador full-stack en San Pedro Sula, Honduras. Next.js, NestJS, PostgreSQL, Docker y CI/CD. Disponible para proyectos freelance.",
  authors: [{ name: "Daniel Cruz Paredes" }],
  alternates: {
    canonical: "/es",
    languages: { en: "/", es: "/es" },
  },
  openGraph: {
    title: "Daniel Cruz Paredes — Desarrollador full-stack",
    description:
      "Next.js, NestJS, PostgreSQL, Docker y CI/CD. Disponible para proyectos freelance.",
    type: "profile",
    locale: "es_HN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Cruz Paredes — Desarrollador full-stack",
    description:
      "Next.js, NestJS, PostgreSQL, Docker y CI/CD. Disponible para proyectos freelance.",
  },
};

export default function EsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={fontClass}>
      <body>{children}</body>
    </html>
  );
}
