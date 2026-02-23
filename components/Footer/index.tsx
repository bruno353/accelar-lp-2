import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          <div>
            <Link href="/" className="text-xl font-light text-black">
              Accelar
            </Link>
            <p className="text-sm text-black opacity-60 mt-2">
              Enterprise software infrastructure and AI solutions
            </p>
          </div>

          <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <Link
              href="/about"
              className="text-sm text-black hover:opacity-70 transition-opacity duration-200"
            >
              About
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
              href="mailto:contact@accelar.io"
              className="text-sm text-black hover:opacity-70 transition-opacity duration-200"
            >
              Email
            </a>
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