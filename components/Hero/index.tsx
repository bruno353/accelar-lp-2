import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-20 overflow-hidden pt-[245px] pb-16 md:pt-[260px] md:pb-[120px] xl:pt-[313px] xl:pb-[160px] 2xl:pt-[365px] 2xl:pb-[200px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Accelarate your product development ship
                </h1>
                <p className="mb-12 text-base font-normal !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                Accelar is a unified product development infrastructure. Develop, collaborate, launch and manage efficiently - all integrated.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <a
                    href="https://app.accelar.io/signup"
                    target="_blank"
                    rel="nofollow noreferrer"
                    className="rounded-md bg-[#7E0AC2] py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-[#7f0ac263] "
                  >
                    Start Building
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
