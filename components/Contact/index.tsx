const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-light text-black mb-8 leading-tight">
            Get in touch
          </h2>
          <p className="text-lg text-black font-light mb-12 max-w-2xl mx-auto">
            Ready to build the future of software? Let&apos;s discuss your project.
          </p>

          <div className="space-y-6">
            <a
              href="mailto:contact@accelar.io"
              className="block bg-black text-[#F8F8F0] px-8 py-4 text-base font-light hover:bg-gray-800 transition-colors duration-200 max-w-sm mx-auto"
            >
              contact@accelar.io
            </a>

            <div className="flex justify-center space-x-6 text-sm">
              <a
                href="https://github.com/Accelar-labs"
                target="_blank"
                rel="noreferrer"
                className="text-black hover:opacity-70 transition-opacity duration-200"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/accelarlabs"
                target="_blank"
                rel="noreferrer"
                className="text-black hover:opacity-70 transition-opacity duration-200"
              >
                Twitter
              </a>
            </div>
            <div className="text-sm text-black">
             BRUNO LAUREANO DOS SANTOS CONSULTORIA EM TECNOLOGIA DA INFORMACAO LTDA - CNPJ: 47.237.014/0001-97
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;