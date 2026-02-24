const About = () => {
  return (
    <section id="about" className="relative py-20 md:py-32">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-black mb-8 leading-tight">
            What we do
          </h2>
        </div>

        <div className="space-y-8 text-center max-w-3xl mx-auto">
          <p className="text-lg text-black font-light leading-relaxed">
            We build enterprise-grade blockchain infrastructure and Software solutions for forward-thinking organizations.
          </p>
          <p className="text-lg text-black font-light leading-relaxed">
            Our expertise spans DeFi protocols, MEV optimization, cross-chain bridges, tokenization platforms, advanced machine learning systems and mobile apps.
          </p>
          <p className="text-lg text-black font-light leading-relaxed">
            From RWA tokenization to sophisticated data analytics — we deliver the technology that powers the next generation of intelligent assets and AI-driven decision making.
          </p>
        </div>

        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="bg-black text-[#F8F8F0] px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
          >
            Get Started
          </a>
        </div>

        {/* Elementos decorativos geométricos */}
        <div>
          <span className="absolute right-10 top-10 z-[-1]">
            <svg
              width="80"
              height="80"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="10"
                y="10"
                width="80"
                height="80"
                rx="12"
                fill="#000000"
                fillOpacity="0.03"
              />
            </svg>
          </span>
          <span className="absolute left-5 bottom-20 z-[-1]">
            <svg
              width="120"
              height="120"
              viewBox="0 0 150 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                points="75,15 135,135 15,135"
                fill="#000000"
                fillOpacity="0.025"
              />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;