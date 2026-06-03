import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pentara.io"),
  title: "PENTARA SECURITY — Break It Before They Do.",
  description: "Firma especializada en seguridad ofensiva. Simulamos ataques reales para identificar vulnerabilidades críticas antes de que sean explotadas.",
  keywords: ["pentesting", "seguridad ofensiva", "red team", "ciberseguridad", "Honduras"],
  openGraph: {
    title: "PENTARA SECURITY — Break It Before They Do.",
    description: "We Think Like Attackers — So You Don't Have To.",
    type: "website",
    url: "https://pentara.io",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PENTARA SECURITY",
    description: "We Think Like Attackers — So You Don't Have To.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
