import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="p-6 border border-gray-200 hover:border-black transition-colors duration-200">
        <div className="mb-6 flex h-[50px] w-[50px] items-center justify-center text-black">
          {icon}
        </div>
        <h3 className="mb-4 text-lg font-medium text-black">
          {title}
        </h3>
        <p className="text-sm font-light leading-relaxed text-black opacity-80">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
