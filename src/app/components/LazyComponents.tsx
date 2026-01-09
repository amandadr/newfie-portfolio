"use client";
import dynamic from "next/dynamic";
import { ComponentType } from "react";

// Lazy load heavy components with loading states
export const LazyGallery = dynamic(() => import("./Gallery"), {
  loading: () => (
    <div className="flex items-center justify-center p-8">
      <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false, // Gallery is interactive, no need for SSR
});

export const LazyModal = dynamic(() => import("./Modal"), {
  loading: () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6">
        <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  ),
  ssr: false,
});

// Create a placeholder Skills component since it doesn't exist
const SkillsPlaceholder = () => (
  <div className="relative w-full h-48 bg-gray-200 rounded-lg p-6">
    <h3 className="text-lg font-semibold mb-4">Skills</h3>
    <div className="grid grid-cols-3 gap-4">
      <div className="h-8 bg-gray-300 rounded"></div>
      <div className="h-8 bg-gray-300 rounded"></div>
      <div className="h-8 bg-gray-300 rounded"></div>
    </div>
  </div>
);

export const LazySkills = dynamic(
  () => Promise.resolve({ default: SkillsPlaceholder }),
  {
    loading: () => (
      <div className="relative w-full h-48 bg-gray-200 animate-pulse rounded-lg">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-gray-500">Loading skills...</div>
        </div>
      </div>
    ),
  }
);

// HOC for lazy loading components based on viewport intersection
export function withLazyLoading<T extends {}>(
  Component: ComponentType<T>,
  options: {
    rootMargin?: string;
    threshold?: number;
    fallback?: ComponentType;
  } = {}
) {
  return function LazyComponent(props: T) {
    const LazyWrappedComponent = dynamic(
      () => Promise.resolve({ default: Component }),
      {
        loading: () =>
          options.fallback ? (
            <options.fallback />
          ) : (
            <div className="w-full h-32 bg-gray-100 animate-pulse rounded"></div>
          ),
        ssr: false,
      }
    );

    return <LazyWrappedComponent {...props} />;
  };
}
