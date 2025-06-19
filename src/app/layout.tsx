import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    preload: true,
    fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
    adjustFontFallback: true,
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "My Portfolio",
    description: "Built with Next.js + Tailwind CSS",
    icons: {
        icon: "/code.ico",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={inter.variable}>
            <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}
