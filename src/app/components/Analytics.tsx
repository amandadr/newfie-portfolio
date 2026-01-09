"use client";
import { useEffect } from "react";
import { getCLS, getFID, getFCP, getLCP, getTTFB, Metric } from "web-vitals";
import clientLogger from "@/utils/clientLogger";

// Send metrics to our logging API
function sendToAnalytics(metric: Metric) {
  const body = JSON.stringify(metric);

  // Log performance metrics with safe property access
  const metricData: any = {
    value: metric.value,
    delta: metric.delta,
    id: metric.id,
  };

  // Add optional properties if they exist
  if ("rating" in metric) {
    metricData.rating = (metric as any).rating;
  }
  if ("navigationType" in metric) {
    metricData.navigationType = (metric as any).navigationType;
  }

  clientLogger.info(`Web Vital: ${metric.name}`, metricData);

  // Send to analytics if available
  if (
    typeof window !== "undefined" &&
    "navigator" in window &&
    "sendBeacon" in navigator
  ) {
    navigator.sendBeacon("/api/analytics", body);
  }
}

export default function Analytics() {
  useEffect(() => {
    // Track Core Web Vitals
    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics);

    // Log page load time
    window.addEventListener("load", () => {
      const loadTime = performance.now();
      clientLogger.info("Page Load Time", { loadTime: Math.round(loadTime) });
    });

    // Track page visibility changes
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        clientLogger.debug("Page became hidden");
      } else {
        clientLogger.debug("Page became visible");
      }
    });
  }, []);

  return null; // This component doesn't render anything
}
