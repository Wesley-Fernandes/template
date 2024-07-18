import type { Metadata } from "next";
import { Inter } from "next/font/google";
import QueryProvider from "../../components/providers/query-provider";
import React from "react";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <QueryProvider>
            {children}
        </QueryProvider>
    </body>
    </html>
  );
}
