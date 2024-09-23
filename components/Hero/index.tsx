import Link from "next/link";
import { Button } from "../ui/moving-border";
import { BentoGridDemo } from "./BentoGridDemo";
import { TypewriterEffectSmoothDemo } from "./TypeWriter";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-20 overflow-hidden pt-[155px] pb-16 xl:pt-[200px] xl:pb-[60px] 2xl:pt-[305px] 2xl:pb-[100px] 3xl:pt-[365px] 3xl:pb-[200px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <TypewriterEffectSmoothDemo/>
                
                <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base mb-10">
                  <span className="text-lg">Accelar is a unified automation platform leveraged by AI Agents. </span><br/> Create video summaries, automate browser actions, integrate seamlessly with your favorite tools.
                </p>
                <div className="mt-10">
                  <a                     href="https://app.accelar.io/signup"
                    target="_blank"
                    rel="nofollow noreferrer"
                  >
                  <Button
                    borderRadius="1.75rem"
                    className="border-neutral-200 dark:border-slate-800"
                  >
                    Start Building
                    </Button>
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
