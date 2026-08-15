'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import the animated content - only on client, never on server
const ServicesAnimated = dynamic(() => import('./ServicesAnimated'), {
  ssr: false,
  loading: () => (
    <div className="space-y-8">
      {/* Section Head Skeleton */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-20">
        <div>
          <div className="h-4 w-24 bg-gray-400/20 rounded mb-3" />
          <div className="h-12 bg-gray-400/20 rounded w-3/4 mb-2" />
          <div className="h-10 bg-gray-400/20 rounded w-2/3" />
        </div>
        <div className="h-20 bg-gray-400/20 rounded" />
      </div>

      {/* Mini Services Skeleton */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-20 md:mb-28">
        {[1, 2].map((i) => (
          <div key={i} className="bg-white/[0.03] rounded-2xl p-8 border border-white/10 h-32" />
        ))}
      </div>

      {/* Process Section Skeleton */}
      <div className="mb-10 md:mb-14">
        <div className="h-4 w-24 bg-gray-400/20 rounded mb-3" />
        <div className="h-10 bg-gray-400/20 rounded w-2/3" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="bg-white/[0.03] rounded-xl p-5 md:p-6 border border-white/10 h-24" />
        ))}
      </div>
    </div>
  ),
});

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-28 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Suspense fallback={null}>
          <ServicesAnimated />
        </Suspense>
      </div>
    </section>
  );
}
