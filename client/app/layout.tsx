import type { Metadata } from "next";

// Global styles
import "@/public/css/Global.css";

export const metadata: Metadata = {
  title: "StockFlow",
  description: "StockFlow App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  );
}
