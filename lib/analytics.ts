export const GA_MEASUREMENT_ID = "G-8V8ST6GR8N";

export function pageview(path: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: path,
      page_location: window.location.origin + path,
    });
  }
}

export function event(action: string, params?: Record<string, string>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, params);
  }
}
