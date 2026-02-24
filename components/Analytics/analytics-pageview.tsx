"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { pageview, GA_MEASUREMENT_ID } from "@/lib/analytics";

export function AnalyticsPageview() {
  const pathname = usePathname();
  const initialized = useRef(false);

  // Load gtag.js script once on mount
  useEffect(() => {
    if (initialized.current || !GA_MEASUREMENT_ID) return;
    initialized.current = true;

    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: window.location.pathname,
    });
  }, []);

  // Track page views on route changes
  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
      pageview(pathname || "/");
    }
  }, [pathname]);

  return null;
}
