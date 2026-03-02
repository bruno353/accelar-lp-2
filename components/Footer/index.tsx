import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 gap-8">
          <div>
            <Link href="/" className="text-xl font-light text-black">
              Accelar
            </Link>
            <p className="text-sm text-black opacity-60 mt-2 max-w-[200px]">
              Enterprise software infrastructure and AI solutions
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
            {/* Site links */}
            <nav className="flex flex-col space-y-3">
              <span className="text-xs text-black opacity-40 uppercase tracking-wider font-light">
                Site
              </span>
              <Link
                href="/#about"
                className="text-sm text-black hover:opacity-70 transition-opacity duration-200"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-sm text-black hover:opacity-70 transition-opacity duration-200"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-sm text-black hover:opacity-70 transition-opacity duration-200"
              >
                Contact
              </Link>
              <Link
                href="/privacy-policy"
                className="text-sm text-black hover:opacity-70 transition-opacity duration-200"
              >
                Privacy Policy
              </Link>
              <a
                href="https://github.com/Accelar-labs"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-black hover:opacity-70 transition-opacity duration-200"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/accelarlabs"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-black hover:opacity-70 transition-opacity duration-200"
              >
                Twitter
              </a>
            </nav>

            {/* Apps links */}
            <nav className="flex flex-col space-y-3">
              <span className="text-xs text-black opacity-40 uppercase tracking-wider font-light">
                Apps
              </span>
              <a
                href="https://haven.accelar.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-black hover:opacity-70 transition-opacity duration-200"
              >
                Haven
              </a>
              <a
                href="https://dogly.accelar.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-black hover:opacity-70 transition-opacity duration-200"
              >
                Dogly
              </a>
              <a
                href="https://glow.accelar.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-black hover:opacity-70 transition-opacity duration-200"
              >
                Sister Glow Up
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-black opacity-60">
            © 2026 Accelar. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;