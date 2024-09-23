import SectionTitle from "../Common/SectionTitle";
import { ContainerScroll } from "../ui/container-scroll-animation";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-transparent relative z-20 py-16 md:py-20 lg:py-28 lg:pb-14 3xl:py-28"
      >
        <ContainerScroll titleComponent={<h2>Optimize your product cycle.</h2>} children={<p>From voice-chat features to fullstack hosting. A collaborative environment where your team can exchange ideas and make decisions quickly.</p>} />
        <div className="container max-w-[1200px] 3xl:max-w-[1400px]">
          <SectionTitle
            title="Optimize your product cycle."
            paragraph="From voice-chat features to fullstack hosting. A collaborative environment where your team can exchange ideas and make decisions quickly."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
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
