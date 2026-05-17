import { Cormorant_Garamond, DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { SkipLink } from "@/components/layout/SkipLink";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata = {
  title: "Flow Studio — Marketing Digital & IA",
  description:
    "Flow Studio — Agencia de marketing digital e inteligencia artificial en México. Convierte tus ideas en sistemas que venden.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${syne.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <SkipLink />
        <Nav />
        {children}
      </body>
    </html>
  );
}
