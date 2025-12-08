import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CIL 2026 - 12ème Colloque International de Libreville",
  description: "Intelligence Artificielle et Dynamiques des Organisations - 23-27 Mars 2026, Libreville, Gabon",
  keywords: "CIL2026, colloque, Libreville, Gabon, intelligence artificielle, IA, organisations, recherche, académique",
  authors: [{ name: "CIL 2026" }],
  openGraph: {
    title: "CIL 2026 - Colloque International de Libreville",
    description: "Intelligence Artificielle et Dynamiques des Organisations - 23-27 Mars 2026",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
