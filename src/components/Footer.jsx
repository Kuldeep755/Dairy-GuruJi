"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-bg-dark border-t border-secondary/20 pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <Image
          src="/images/logo-dairy-guruji.png"
          alt="Dairy Guru Ji logo"
          width={60}
          height={60}
          className="h-20 w-18 w-auto rounded-md"
          priority
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-black text-secondary mb-4">
              DAIRY GURU JI
            </div>
            <p className="text-white/80 text-lg leading-relaxed mb-6 max-w-md">
              “व्यापार नहीं, रिश्ते बनाते हैं”
            </p>
            <div className="flex flex-col gap-2 text-white/70">
              <p className="font-bold">ISO 9001:2015 Certified Company</p>
              <p className="text-sm">Head Office: South, WA (Australia)</p>
              <p className="text-sm">Branch Office: Sonipat, Haryana</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              Quick Links
            </h4>
            <ul className="space-y-4 text-white/70 text-sm font-medium">
              <li>
                <Link
                  href="/"
                  className="hover:text-secondary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-secondary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-secondary transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-secondary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-secondary transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              Support
            </h4>
            <ul className="space-y-4 text-white/70 text-sm font-medium">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-secondary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                Web:{" "}
                <a
                  href="https://www.dairyguruji.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  www.dairyguruji.com
                </a>
              </li>
              <li>M: +91 81680-48260</li>
              <li>Email: dairyguruji@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/45 text-xs font-medium">
          <p>
            &copy; {new Date().getFullYear()} Dairy Guru Ji. Not Just Business,
            Building Relationships.
          </p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-secondary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
