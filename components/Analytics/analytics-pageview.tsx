"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { pageview, GA_MEASUREMENT_ID } from "@/lib/analytics";

export function AnalyticsPageview() {
  const pathname = usePathname();

  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
      pageview(pathname || "/");
    }
  }, [pathname]);

  return null;
}
