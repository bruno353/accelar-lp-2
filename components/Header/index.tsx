"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {
  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center ${
          sticky
            ? "!fixed !z-[9999] !bg-[#F8F8F0] !bg-opacity-95 shadow-sm backdrop-blur-sm !transition"
            : "!fixed !z-[9999] !bg-[#F8F8F0] !bg-opacity-95 !transition"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo flex items-center space-x-3 ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
                <Image
                  src="/images/new-logo.svg"
                  alt="logo"
                  width={16}
                  height={16}
                  className="h-8 w-auto"
                />
                <span className="text-xl font-light text-black">
                  Accelar
                </span>
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div></div>
              <div className="flex items-center justify-end pr-0 sm:pr-8 lg:pr-0">
                <a
                  href="https://github.com/Accelar-labs"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="text-black hover:opacity-70 transition-opacity duration-200 text-sm font-light mr-3 sm:mr-6 lg:mr-8"
                >
                  GitHub
                </a>
                <a
                  href="#contact"
                  className="text-black border border-black px-3 sm:px-4 py-2 text-sm font-light hover:bg-black hover:text-[#F8F8F0] transition-all duration-200"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
