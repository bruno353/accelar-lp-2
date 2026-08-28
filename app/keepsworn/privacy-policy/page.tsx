import Breadcrumb from "@/components/Common/Breadcrumb";

const pClass =
  "mb-10 text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed";
const pClassTight =
  "mb-4 text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed";
const h2Class =
  "mb-8 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight";
const ulClass = "mb-10 list-inside list-disc text-black";
const liClass =
  "mb-2 text-base font-medium text-black sm:text-lg lg:text-base xl:text-lg";

const KeepswornPrivacyPolicyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Keepsworn Privacy Policy"
        description="Last updated: August 28, 2026"
      />

      <section className="pb-16 pt-16 md:pb-20 md:pt-20 lg:pb-28 lg:pt-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <p className={pClass}>
                  This Privacy Policy applies to the Keepsworn iOS game
                  (&quot;Keepsworn&quot;, the &quot;Game&quot;), operated by
                  Accelar (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
                  Keepsworn is a paid, single-player game that does not require
                  an account or login. This policy explains the limited data
                  collected when you play, why it is collected, how long it is
                  retained, and the choices available to you.
                </p>

                <h2 className={h2Class}>1. Data We Collect</h2>
                <ul className={ulClass}>
                  <li className={liClass}>
                    <strong>Installation and Device Data:</strong> a random,
                    pseudonymous Firebase installation identifier, device model,
                    operating system, Game version, language, general device
                    characteristics, and approximate region derived from network
                    information.
                  </li>
                  <li className={liClass}>
                    <strong>Product Interaction Data:</strong> screens opened,
                    controls used, tutorial progress, session duration, and
                    whether a campaign was started, continued, completed, or
                    left.
                  </li>
                  <li className={liClass}>
                    <strong>Gameplay Data:</strong> campaign phase and night,
                    enemies defeated, structures built, allies recruited,
                    weapons and abilities used, quests and upgrades selected,
                    aggregated damage, deaths, and other balance-related game
                    events.
                  </li>
                  <li className={liClass}>
                    <strong>Diagnostics and Performance Data:</strong> crash
                    reports, stack traces, app state near a crash, device and
                    operating system information, frame-rate samples, enemy
                    count, thermal state, memory-related diagnostics, and other
                    technical information needed to improve stability.
                  </li>
                </ul>
                <p className={pClass}>
                  We do not collect your name, email address, phone number,
                  account credentials, contacts, photos, camera or microphone
                  content, precise location, advertising identifier, save-file
                  contents, typed text, or the position of your character. Raw
                  IP addresses may be processed transiently by Google to operate
                  Analytics and derive an approximate region, but they are not
                  exposed to us or stored by us as a player profile.
                </p>

                <h2 className={h2Class}>2. How We Use Data</h2>
                <ul className={ulClass}>
                  <li className={liClass}>
                    Understand where players leave the onboarding, campaign, and
                    progression experience.
                  </li>
                  <li className={liClass}>
                    Improve controls, interface usability, encounter balance,
                    weapons, abilities, enemies, and difficulty.
                  </li>
                  <li className={liClass}>
                    Diagnose crashes, performance problems, and device-specific
                    stability issues.
                  </li>
                  <li className={liClass}>
                    Prevent abuse and comply with applicable legal obligations.
                  </li>
                </ul>
                <p className={pClass}>
                  We do not sell personal information, serve advertising, use
                  data for advertising, or track you across apps or websites.
                  Keepsworn does not include AdSupport or request access to
                  Apple&apos;s advertising identifier.
                </p>

                <h2 className={h2Class}>
                  3. Firebase Analytics and Crashlytics
                </h2>
                <p className={pClass}>
                  Keepsworn uses Google Firebase Analytics and Firebase
                  Crashlytics. Analytics receives pseudonymous installation,
                  product interaction, gameplay, device, and approximate region
                  data. Crashlytics receives crash, diagnostic, performance, and
                  related technical context. Google processes this data as our
                  service provider under its Firebase terms and privacy and
                  security commitments. Advertising personalization signals,
                  Google Signals, User-ID, IDFA collection, and granular
                  location collection are disabled for Keepsworn.
                </p>

                <h2 className={h2Class}>4. Your Choice</h2>
                <p className={pClass}>
                  Analytics and Crashlytics collection is enabled by default so
                  we can measure the launch and improve the Game. You can turn
                  remote collection off at any time in the Game by opening
                  Settings and disabling SHARE ANONYMOUS GAMEPLAY DATA. Your
                  choice is saved on your device and immediately stops new
                  Analytics events, crash reports, breadcrumbs, and diagnostic
                  context from being sent through our Firebase integration.
                </p>

                <h2 className={h2Class}>5. Local Game Data</h2>
                <p className={pClass}>
                  Save data, settings, and detailed local telemetry files are
                  stored on your device. Local telemetry supports quality
                  assurance and is not automatically uploaded in its raw form.
                  Deleting the Game and its data through iOS removes this local
                  information from the device, subject to any iCloud or device
                  backup settings you control through Apple.
                </p>

                <h2 className={h2Class}>6. Retention</h2>
                <ul className={ulClass}>
                  <li className={liClass}>
                    User-level and event-level Google Analytics data is
                    configured for a retention period of 14 months.
                  </li>
                  <li className={liClass}>
                    Crashlytics keeps crash stack traces and associated
                    installation identifiers for 90 days before beginning
                    deletion from live and backup systems.
                  </li>
                  <li className={liClass}>
                    Aggregated reports may remain available after underlying
                    user-level data expires. Data exported to our controlled
                    BigQuery project is retained while needed to analyze and
                    improve Keepsworn, unless it is deleted earlier or legal
                    obligations require a different period.
                  </li>
                </ul>

                <h2 className={h2Class}>7. Purchases</h2>
                <p className={pClass}>
                  Keepsworn is purchased through the Apple App Store. Apple
                  processes payment and account information under Apple&apos;s
                  own privacy policy. We do not receive your payment card
                  details. The Game contains no in-app purchases, subscriptions,
                  or third-party advertising.
                </p>

                <h2 className={h2Class}>8. Children&apos;s Privacy</h2>
                <p className={pClass}>
                  Keepsworn is a general-audience game and is not directed to
                  children under 13. We do not knowingly collect directly
                  identifying personal information from children. If you believe
                  a child has provided personal information to us, contact us so
                  we can investigate and take appropriate action.
                </p>

                <h2 className={h2Class}>9. International Processing</h2>
                <p className={pClass}>
                  Data may be processed and stored in countries other than your
                  own, including the United States, using the safeguards
                  provided by our service providers and applicable law.
                </p>

                <h2 className={h2Class}>10. Your Privacy Rights</h2>
                <p className={pClass}>
                  Depending on your location, you may have rights to access,
                  correct, delete, restrict, or object to certain processing of
                  personal data, request portability, or withdraw consent. The
                  Game does not create an account or collect a direct identity,
                  so we may need a relevant pseudonymous identifier to locate a
                  specific record. Contact us at contact@accelar.io with a
                  privacy request and we will explain the available process.
                </p>

                <h2 className={h2Class}>11. Changes to This Policy</h2>
                <p className={pClass}>
                  We may update this Privacy Policy when the Game, its service
                  providers, or applicable requirements change. The current
                  version will remain available on this page with its latest
                  update date.
                </p>

                <h2 className={h2Class}>12. Contact Us</h2>
                <p className={pClassTight}>
                  If you have questions about this Privacy Policy or
                  Keepsworn&apos;s data practices, please contact us at:
                </p>
                <div className="mb-10 rounded-sm bg-stroke p-8 md:p-9 lg:p-8 xl:p-9">
                  <p className="mb-2 text-base font-medium text-black">
                    <strong className="text-black">Accelar</strong>
                  </p>
                  <p className="mb-2 text-base font-medium text-black">
                    Email: contact@accelar.io
                  </p>
                  <p className="text-base font-medium text-black">
                    Website: www.accelar.io
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KeepswornPrivacyPolicyPage;
