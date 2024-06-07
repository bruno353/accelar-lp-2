import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 relative z-20">
      <div className="container 3xl:max-w-[1400px] xl:max-w-[1100px]">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Blockchain nodes
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                 Efficiently deploy blockchain nodes in a no-code manner, establishing your own decentralized data connections with cost-effective providers.                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  App templates
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Pre-made smart-contracts, canisters, web backends, web frontends... choose a template and ship in minutes
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  LLM workflows
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Create LLM-powered workflows to integrate web2 & web3 operations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap items-center  mt-[150px]">
          <div className="w-full px-4 lg:w-1/2">
              <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Team management
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Invite members to the workspace, segregate apps and functionalities.</p>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Analytics dashboard to have control over your deployments, workflows and node operations.</p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto mb-12 aspect-[32/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/about/test.png"
                  alt="about image"
                  className="rounded-xl"
                  fill
                />
              </div>
            </div>
        </div>         
                <div className="w-full items-center  mt-[150px]">
          <div className="w-full px-4 mb-[20px]">
              <div className="wow fadeInUp" data-wow-delay=".2s">
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Develop smart-contracts with a fully integrated Soroban IDE.
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Either using Accelar wallet provider or Freighter wallet; compile, deploy and interact with Soroban smart-contracts.</p>
                </div>
              </div>
            </div>
            <div className="w-full px-4">
              <div
                className="wow fadeInUp relative mx-auto mb-12 aspect-[60/24] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                 <video
                  loop
                  muted
                  autoPlay
                  playsInline
                  preload="false"
                  className="w-full h-auto rounded-xl"
                  src="/ide.webm/"
                />
              </div>
            </div>
        </div>
        <div className="w-full items-center  mt-[150px]">
          <div className="w-full px-4 mb-[20px]">
              <div className="wow fadeInUp" data-wow-delay=".2s">
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Deploy and interact with canisters, smart-contracts and protocols.
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Interact with blockchain components with a custodial wallet, no need to concerns about private key security and web3 onboarding.</p>
                </div>
              </div>
            </div>
            <div className="w-full px-4">
              <div
                className="wow fadeInUp relative mx-auto mb-12 aspect-[60/24] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/about/canister.png"
                  alt="about image"
                  className="rounded-xl"
                  fill
                />
              </div>
            </div>
        </div>
        <div className="-mx-4 flex flex-wrap items-center  mt-[150px]">
          <div className="w-full px-4 lg:w-1/2">
              <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Create wallets and instances in seconds with just a few steps
                                    </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Send transactions, interact with protocols and connect integrations with off-chain triggers.</p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp  relative mx-auto mb-12 aspect-[34/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/about/wallet2.png"
                  alt="about image"
                  className="rounded-xl"
                  fill
                />
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
