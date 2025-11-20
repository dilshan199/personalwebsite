import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dilshan Keerawella - Personal Website",
  description: "A sample Next.js application with a custom layout.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"></link>
      </head>
      <body>{children}</body>
    </html>
  );
}