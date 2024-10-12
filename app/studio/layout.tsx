import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Sanity Studio",
    description: "Studio for the blog",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
