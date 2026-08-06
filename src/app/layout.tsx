import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studio OhYeah",
  description: "Studio OhYeah company homepage and client portfolio.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/images/brand/brand-word-01.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
