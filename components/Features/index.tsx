import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="relative py-20 md:py-32"
      >
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
              Our Expertise
            </h2>
            <p className="text-lg text-black font-light max-w-2xl mx-auto">
              We specialize in cutting-edge blockchain infrastructure and artificial intelligence solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>

        {/* Elementos decorativos geométricos */}
        <div>
          <span className="absolute left-0 top-1/4 z-[-1]">
            <svg
              width="100"
              height="100"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="60"
                cy="60"
                r="40"
                fill="#000000"
                fillOpacity="0.02"
              />
              <circle
                cx="60"
                cy="60"
                r="20"
                fill="#000000"
                fillOpacity="0.03"
              />
            </svg>
          </span>
          <span className="absolute right-10 bottom-10 z-[-1]">
            <svg
              width="140"
              height="100"
              viewBox="0 0 160 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="20"
                y="20"
                width="50"
                height="50"
                rx="4"
                fill="#000000"
                fillOpacity="0.025"
              />
              <rect
                x="90"
                y="50"
                width="30"
                height="30"
                rx="2"
                fill="#000000"
                fillOpacity="0.03"
              />
            </svg>
          </span>
        </div>
      </section>
    </>
  );
};

export default Features;
