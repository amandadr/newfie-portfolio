"use client";

import { useEffect } from "react";
import clientLogger from "@/utils/clientLogger";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error using client logger
    clientLogger.error(`Client Error: ${error.message}`, {
      stack: error.stack,
      digest: error.digest,
    });
  }, [error]);

  return (
    <div className="fullscreen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Something went wrong!
        </h2>
        <p className="text-gray-700 mb-4">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>
        <button
          onClick={reset}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
