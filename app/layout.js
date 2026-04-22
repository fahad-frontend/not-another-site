import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import WhatsAppFloat from "./components/WhatsAppFloat";
import SmoothScroll from "./components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata = {
  title: "notanother.site · design + dev studio",
  description:
    "We don't make another site. We make the last one you'll need.",
  metadataBase: new URL("https://notanother.site"),
  openGraph: {
    title: "notanother.site · design + dev studio",
    description:
      "We don't make another site. We make the last one you'll need.",
    url: "https://notanother.site",
    siteName: "notanother.site",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white selection:bg-white selection:text-black">
        <SmoothScroll />
        <Nav />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
