import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeScript } from "@/components/ThemeScript";
import { SITE } from "@/lib/constants";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — помощник для владельцев собак`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "собаки",
    "питомцы",
    "напоминания",
    "питание собак",
    "медкарта",
    "приложение для собак",
    "Собачники",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — помощник для владельцев собак`,
    description: SITE.description,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — промо-изображение`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — помощник для владельцев собак`,
    description: SITE.description,
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${manrope.variable} min-h-screen antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
