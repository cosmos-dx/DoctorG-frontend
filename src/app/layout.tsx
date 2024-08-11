import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
const inter = Inter({ subsets: ["latin"] });

const ClientOnly = dynamic(() => import('@/components/Wrappers/ClientSideOnly'), { ssr: false });


export const metadata: Metadata = {
  title: "Doctorg",
  description: "A Virtual Doctor for all your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
          <ClientOnly>
            {children}
          </ClientOnly>
      </body>
    </html>
  );
}
