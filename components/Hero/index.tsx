import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-20 overflow-hidden pt-[80px] pb-16 xl:pt-[250px] xl:pb-[60px] 2xl:pb-[100px] 3xl:pb-[200px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-black mb-8 leading-tight">
                Complex problems.  <br />
                Precise engineering.
                </h1>

                <p className="text-lg text-black font-light mb-12 max-w-2xl mx-auto">
                  Enterprise blockchain solutions and AI-driven apps for the next generation of intelligent assets.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  {/* <a
                    href="#about"
                    className="bg-black text-[#F8F8F0] px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
                  >
                    Reach out
                  </a> */}
                  <a
                    href="#about"
                    target="_blank"
                    rel="nofollow noreferrer"
                    className="text-black border border-black px-8 py-3 text-sm font-light hover:bg-black hover:text-[#F8F8F0] transition-all duration-200"
                  >
                    Reach out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Elementos decorativos geométricos */}
        <div>
          <span className="absolute top-0 left-0 z-[-1]">
            <svg
              width="200"
              height="180"
              viewBox="0 0 287 254"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.05"
                d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
                fill="#000000"
              />
            </svg>
          </span>
          <span className="absolute right-0 top-20 z-[-1]">
            <svg
              width="150"
              height="120"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="50"
                y="50"
                width="100"
                height="100"
                rx="8"
                fill="#000000"
                fillOpacity="0.03"
              />
              <rect
                x="20"
                y="120"
                width="60"
                height="60"
                rx="4"
                fill="#000000"
                fillOpacity="0.04"
              />
            </svg>
          </span>
          <span className="absolute left-20 bottom-10 z-[-1]">
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="50"
                cy="50"
                r="30"
                fill="#000000"
                fillOpacity="0.02"
              />
            </svg>
          </span>
        </div>
      </section>
    </>
  );
};

export default Hero;
