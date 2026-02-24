const Contact = () => {
  return (
    <section id="contact" className="pt-28 lg:pt-[150px] pb-20 md:pb-32">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-light text-black mb-4 leading-tight">
            Get in touch
          </h1>
          <p className="text-lg text-black font-light mb-16 max-w-2xl mx-auto opacity-60">
            Need support with one of our products? Ready to build the future of software? Let&apos;s discuss your project.
          </p>

          <div className="space-y-12">
            <div>
              <p className="text-sm text-black opacity-40 uppercase tracking-widest mb-4">
                Email
              </p>
              <a
                href="mailto:contact@accelar.io"
                className="text-xl md:text-2xl text-black font-light hover:opacity-70 transition-opacity duration-200"
              >
                contact@accelar.io
              </a>
            </div>

            <div className="border-t border-gray-200 pt-12">
              <p className="text-sm text-black opacity-40 uppercase tracking-widest mb-6">
                Find us
              </p>
              <div className="flex justify-center space-x-8">
                <a
                  href="https://github.com/Accelar-labs"
                  target="_blank"
                  rel="noreferrer"
                  className="text-black hover:opacity-70 transition-opacity duration-200 text-sm font-light"
                >
                  GitHub
                </a>
                <a
                  href="https://twitter.com/accelarlabs"
                  target="_blank"
                  rel="noreferrer"
                  className="text-black hover:opacity-70 transition-opacity duration-200 text-sm font-light"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
