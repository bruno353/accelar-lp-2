import Image from "next/image";

type AppData = {
  id: number;
  name: string;
  tagline: string;
  iconSrc: string;
  screenshotSrc: string;
  appStoreUrl: string;
  lpUrl: string;
  accentColor: string;
  accentHoverClass: string;
};

const appsData: AppData[] = [
  {
    id: 1,
    name: "Haven",
    tagline: "Understand your migraines. Take back your days.",
    iconSrc: "/apps/haven-icon.png",
    screenshotSrc: "/apps/haven-screenshot.png",
    appStoreUrl: "https://apps.apple.com/app/id6740043929",
    lpUrl: "https://haven.accelar.io",
    accentColor: "#5E9B8A",
    accentHoverClass: "hover:border-[#5E9B8A]",
  },
  {
    id: 2,
    name: "Dogly",
    tagline: "Your dog is talking. Are you listening?",
    iconSrc: "/apps/dogly-icon.png",
    screenshotSrc: "/apps/dogly-screenshot.png",
    appStoreUrl: "https://apps.apple.com/app/id6503436498",
    lpUrl: "https://dogly.accelar.io",
    accentColor: "#007AFF",
    accentHoverClass: "hover:border-[#007AFF]",
  },
  {
    id: 3,
    name: "Sister Glow Up",
    tagline: "Your cycle is your superpower.",
    iconSrc: "/apps/glow-icon.png",
    screenshotSrc: "/apps/glow-screenshot.png",
    appStoreUrl: "https://apps.apple.com/app/id6738810897",
    lpUrl: "https://glow.accelar.io",
    accentColor: "#C48B7C",
    accentHoverClass: "hover:border-[#C48B7C]",
  },
];

const AppCard = ({ app }: { app: AppData }) => {
  const { name, tagline, iconSrc, screenshotSrc, appStoreUrl, lpUrl, accentHoverClass } = app;

  return (
    <div
      className={`flex flex-col border border-gray-200 ${accentHoverClass} transition-colors duration-200`}
    >
      {/* Screenshot */}
      <a
        href={lpUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative w-full overflow-hidden bg-gray-50"
        style={{ aspectRatio: "9/16", maxHeight: "340px" }}
        aria-label={`View ${name} landing page`}
      >
        <Image
          src={screenshotSrc}
          alt={`${name} app screenshot`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </a>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6">
        {/* Icon + name */}
        <div className="flex items-center gap-3 mb-3">
          <Image
            src={iconSrc}
            alt={`${name} app icon`}
            width={48}
            height={48}
            className="rounded-2xl flex-shrink-0"
          />
          <h3 className="text-base font-medium text-black leading-snug">{name}</h3>
        </div>

        {/* Tagline */}
        <p className="text-sm font-light text-black opacity-60 leading-relaxed mb-6">
          {tagline}
        </p>

        {/* App Store link */}
        <div className="mt-auto">
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-light text-black hover:opacity-70 transition-opacity duration-200"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            View on App Store
          </a>
        </div>
      </div>
    </div>
  );
};

const OurApps = () => {
  return (
    <section id="apps" className="relative py-20 md:py-32">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
            Our Apps
          </h2>
          <p className="text-lg text-black font-light max-w-2xl mx-auto">
            Next generation mobile apps, available on the App Store.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {appsData.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApps;
