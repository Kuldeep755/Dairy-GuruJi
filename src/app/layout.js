import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import RouteChrome from "@/components/RouteChrome";
import AppProviders from "@/components/providers/AppProviders";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata();

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <AppProviders>
          <RouteChrome>{children}</RouteChrome>
        </AppProviders>
      </body>
    </html>
  );
}
