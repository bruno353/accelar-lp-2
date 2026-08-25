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

const MiraPrivacyPolicyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Mira Privacy Policy"
        description="Last updated: August 25, 2026"
      />

      <section className="pb-16 pt-16 md:pb-20 md:pt-20 lg:pb-28 lg:pt-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <p className={pClass}>
                  This Privacy Policy applies to the Mira iOS application
                  (&quot;Mira&quot;, the &quot;App&quot;), operated by Accelar
                  (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). Mira is
                  a personal AI assistant that can chat with you, record and
                  transcribe audio, generate notes, and connect to third-party
                  services you choose. This policy explains what data the App
                  collects, how we collect it, how we use it, and who we share
                  it with.
                </p>

                <h2 className={h2Class}>1. Information We Collect</h2>
                <ul className={ulClass}>
                  <li className={liClass}>
                    <strong>Account Information:</strong> when you sign in with
                    Apple, we receive a unique identifier and, if you choose to
                    share them, your name and email address. Collected directly
                    from your sign-in.
                  </li>
                  <li className={liClass}>
                    <strong>Chat Messages:</strong> the messages, files, and
                    voice messages you send to the Mira assistant. Collected
                    when you use the chat.
                  </li>
                  <li className={liClass}>
                    <strong>Audio Recordings and Transcripts:</strong> audio you
                    record or import for transcription, and the resulting
                    transcripts and AI notes. Recordings and transcripts are
                    stored locally on your device; audio is transmitted to our
                    servers only for the purpose of transcription when you
                    request it.
                  </li>
                  <li className={liClass}>
                    <strong>Assistant Memory:</strong> summaries of your
                    conversations and, when you explicitly choose so, summaries
                    of your recordings, stored on our servers so the assistant
                    can remember context across sessions.
                  </li>
                  <li className={liClass}>
                    <strong>Connected Services Data:</strong> if you choose to
                    connect services such as email or calendar, the App accesses
                    the data needed to fulfill your requests (for example,
                    reading an email you asked to summarize). Connections use
                    OAuth; we never see or store your passwords.
                  </li>
                  <li className={liClass}>
                    <strong>Subscription and Usage Data:</strong> subscription
                    status, feature usage counters, and app analytics events
                    (such as screens viewed and errors), collected automatically
                    while you use the App.
                  </li>
                </ul>

                <h2 className={h2Class}>2. How We Use Your Information</h2>
                <ul className={ulClass}>
                  <li className={liClass}>
                    Provide the App&apos;s features: assistant responses, audio
                    transcription, AI notes, memory, and connected-service
                    actions you request.
                  </li>
                  <li className={liClass}>
                    Manage your account, subscription, and usage limits.
                  </li>
                  <li className={liClass}>
                    Improve the App through aggregated analytics and error
                    reports.
                  </li>
                  <li className={liClass}>
                    Comply with legal obligations and prevent abuse.
                  </li>
                </ul>
                <p className={pClass}>
                  We do not sell your personal information, and we do not use
                  your content for advertising.
                </p>

                <h2 className={h2Class}>3. AI Processing with Google Gemini</h2>
                <p className={pClassTight}>
                  Mira&apos;s intelligence is powered by Google&apos;s Gemini
                  API, a third-party AI service. To provide the App&apos;s core
                  features, the following data is sent to Google Gemini for
                  processing:
                </p>
                <ul className={ulClass}>
                  <li className={liClass}>
                    Your chat messages and any files or voice messages you
                    attach, to generate assistant responses.
                  </li>
                  <li className={liClass}>
                    Audio you record or import, to generate transcriptions,
                    speaker labels, and AI notes.
                  </li>
                  <li className={liClass}>
                    Content from connected services that you ask the assistant
                    to work with (for example, the text of an email you asked it
                    to summarize).
                  </li>
                </ul>
                <p className={pClass}>
                  This data is transmitted over encrypted connections and is
                  used solely to generate the responses, transcriptions, and
                  notes you requested. We use Google&apos;s paid API services,
                  which under Google&apos;s API terms do not use your data to
                  train their models. The App asks for your explicit permission
                  before sharing any data with this AI service, and you can
                  review Google&apos;s own commitments in the Gemini API terms
                  of service. If you do not grant permission, AI features are
                  not available, but no data is shared.
                </p>

                <h2 className={h2Class}>4. Who We Share Data With</h2>
                <ul className={ulClass}>
                  <li className={liClass}>
                    <strong>Google Gemini (Google LLC):</strong> AI processing
                    of chat messages, audio, and related content, as described
                    in Section 3.
                  </li>
                  <li className={liClass}>
                    <strong>Google Firebase:</strong> authentication, secure
                    backend infrastructure, and analytics.
                  </li>
                  <li className={liClass}>
                    <strong>RevenueCat:</strong> subscription management and
                    receipt validation.
                  </li>
                  <li className={liClass}>
                    <strong>Legal Authorities:</strong> if required by law or to
                    protect our rights, safety, and security.
                  </li>
                </ul>
                <p className={pClass}>
                  We only work with providers that offer protections equivalent
                  to those described in this policy, and we share the minimum
                  data needed for each feature.
                </p>

                <h2 className={h2Class}>5. Data Storage and Retention</h2>
                <p className={pClass}>
                  Your audio recordings, transcripts, and notes live on your
                  device. Assistant memory and usage records are stored on our
                  servers for as long as your account exists. Audio sent for
                  transcription is processed in memory and is not persisted on
                  our servers.
                </p>

                <h2 className={h2Class}>6. Deleting Your Data</h2>
                <p className={pClass}>
                  You can delete individual recordings and conversations inside
                  the App at any time. Deleting your account (Settings &gt;
                  Delete Account) removes your account data, assistant memory,
                  and usage records from our servers.
                </p>

                <h2 className={h2Class}>7. Your Rights</h2>
                <p className={pClass}>
                  Depending on your location (e.g., GDPR in the EU, LGPD in
                  Brazil, CCPA in California), you may have the right to access,
                  update, or delete your personal data, object to or restrict
                  certain processing, request data portability, and withdraw
                  consent at any time. To exercise your rights, contact us at
                  contact@accelar.io.
                </p>

                <h2 className={h2Class}>8. International Data Transfers</h2>
                <p className={pClass}>
                  Your information may be processed and stored in countries
                  other than your own, including the United States, with
                  appropriate safeguards in place.
                </p>

                <h2 className={h2Class}>9. Children&apos;s Privacy</h2>
                <p className={pClass}>
                  Mira is not directed to individuals under the age of 16. We do
                  not knowingly collect data from children.
                </p>

                <h2 className={h2Class}>10. Changes to This Policy</h2>
                <p className={pClass}>
                  We may update this Privacy Policy from time to time. The
                  updated version will be posted on this page with a new
                  &quot;Last updated&quot; date.
                </p>

                <h2 className={h2Class}>11. Contact Us</h2>
                <p className={pClassTight}>
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact us at:
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

export default MiraPrivacyPolicyPage;
