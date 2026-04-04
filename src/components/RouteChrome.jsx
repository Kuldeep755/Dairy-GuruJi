"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyButtons from "@/components/StickyButtons";
import Chatbot from "@/components/Chatbot";

const CHROME_HIDDEN_PREFIXES = [
  "/offer-letter",
  "/login",
  "/signup",
  "/reset-password",
  "/admin",
];

function shouldHideChrome(pathname) {
  return CHROME_HIDDEN_PREFIXES.some((prefix) => pathname?.startsWith(prefix));
}

export default function RouteChrome({ children }) {
  const pathname = usePathname();
  const hideChrome = shouldHideChrome(pathname);

  if (hideChrome) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <StickyButtons />
      <Chatbot />
    </>
  );
}
