import type { Metadata } from "next";

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
