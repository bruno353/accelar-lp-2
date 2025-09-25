import { Brand } from "@/types/brand";
import Image from "next/image";

const brandsData: Brand[] = [
  // {
  //   id: 1,
  //   name: "UIdeck",
  //   href: "https://uideck.com",
  //   image: "/images/brands/uideck.svg",
  // },
  // {
  //   id: 2,
  //   name: "Tailgrids",
  //   href: "https://tailgrids.com",
  //   image: "/images/brands/tailgrids.svg",
  // },
  {
    id: 3,
    name: "Dfinity",
    href: "https://dfinity.org",
    image: "/images/brands/dfinity.svg",
    dinamicHeight: '20'
  },
  {
    id: 4,
    name: "Soroban",
    href: "https://stellar.org/soroban",
    image: "/images/brands/stellar.svg",
    dinamicHeight: '16'
  },
  {
    id: 5,
    name: "Crossfi",
    href: "https://crossfi.org/",
    image: "/images/brands/crossfi.svg",
    dinamicHeight: '80'
  },
  // {
  //   id: 4,
  //   name: "GrayGrids",
  //   href: "https://graygrids.com",
  //   image: "/images/brands/graygrids.svg",
  // },
  // {
  //   id: 5,
  //   name: "TailAdmin",
  //   href: "https://tailadmin.com",
  //   image: "/images/brands/tailadmin.svg",
  // },
];

const Brands = () => {
  return (
    <section className="py-5">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center gap-4 md:gap-4">
          {brandsData.map((brand) => (
            <SingleBrand key={brand.id} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name, dinamicHeight } = brand;

  return (
    <div className="mx-3 flex w-full max-w-[160px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className={`relative h-${dinamicHeight} w-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100`}
      >
        <Image src={image} alt={name} fill />
      </a>
    </div>
  );
};
