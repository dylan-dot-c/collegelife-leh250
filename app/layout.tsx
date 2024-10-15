import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { lora } from "@/utils/font";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
    title: "College Life Blogs | Dylan Heslop",
    description:
        "A curated list of blogs about my first semester in college. Written by Dylan Heslop",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`bg-slate-100 dark:bg-black text-gray-800 dark:text-slate-300 ${lora.className}`}>
                <Providers>
                    <Navbar />
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
