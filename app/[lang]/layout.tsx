import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/navbar";
import { Locale, i18n } from "@/i18n.config";
import Footer from "@/components/footer";
import { Inter, Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book shop | Gleb Feels",
  description: "Gleb Feels book shop",
};

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang} className="scroll-smooth scroll-pt-16">
      {/* <body className={`${inter.className} bg-[#f5f6f0]`}> */}
      <body className={`${poppins.className} bg-yellow-50`}>
      {/* <body className={`${inter.className}`}> */}
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
