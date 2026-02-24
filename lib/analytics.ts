export const GA_MEASUREMENT_ID = "G-8V8ST6GR8N";

export function pageview(url: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "page_view", { page_path: url });
  }
}

export function event(action: string, params?: Record<string, string>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, params);
  }
}
