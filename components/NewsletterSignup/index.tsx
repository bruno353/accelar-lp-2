"use client";

import { useState } from "react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfuI10yWFkAzRcuEeZ7kKsV-EhR3EyglhFQVggzi0zxgBFW_A/formResponse";
const ENTRY_APP = "entry.686438519";
const ENTRY_EMAIL = "entry.822388459";
const APP_NAME = "accelar";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");

    try {
      const formData = new URLSearchParams();
      formData.append(ENTRY_APP, APP_NAME);
      formData.append(ENTRY_EMAIL, email);

      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      setStatus("success");
      setEmail("");

      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "newsletter_signup", { app: APP_NAME });
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="border-t border-gray-200 py-16 sm:py-20">
      <div className="container max-w-6xl mx-auto px-4 text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-black opacity-40 mb-4">
          Weekly letter
        </p>
        <h2 className="text-2xl sm:text-3xl font-light text-black max-w-lg mx-auto leading-tight">
          Deep tech, AI agents, and the science of peak performance
        </h2>
        <p className="mt-3 text-sm text-black opacity-50 max-w-md mx-auto leading-relaxed">
          One letter per week for builders who think different. No spam, unsubscribe anytime.
        </p>

        {status === "success" ? (
          <div className="mt-8 inline-flex items-center gap-2 border border-black/20 px-6 py-3">
            <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-black text-sm font-light">
              You&apos;re in. We&apos;ll be in touch.
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full sm:flex-1 px-4 py-3 border border-gray-300 bg-transparent text-black placeholder:text-gray-400 outline-none focus:border-black transition-colors text-sm"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto px-8 py-3 border border-black text-black text-sm font-light hover:bg-black hover:text-[#F8F8F0] transition-all duration-200 disabled:opacity-60"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-3 text-sm text-red-600 opacity-70">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
}
