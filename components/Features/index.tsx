import SectionTitle from "../Common/SectionTitle";
import { ContainerScroll } from "../ui/container-scroll-animation";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import Image from "next/image";
import { Cover } from "@/components/ui/cover";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-transparent relative z-20 py-16 md:py-20 lg:py-10 lg:pb-14 3xl:py-28"
      >
        <ContainerScroll titleComponent={<div className="text-4xl font-bold mb-7">Unleash the power of <br /> <p className="text-7xl">AI collaboration</p></div>}>
            <Image
                src="/images/app.webp"
                alt="about-image"
                fill
                className="rounded-xl max-w-[95%] max-h-[90%] mx-auto my-auto"
              />
        </ContainerScroll>
        <div className="container max-w-[1200px] 3xl:max-w-[1400px]">
          <div className="flex justify-center text-7xl font-bold">
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text">
              Build AI automations <br /> at <Cover>accelar speed</Cover>
            </h1>
          </div>
          <div className="grid mt-12 grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
