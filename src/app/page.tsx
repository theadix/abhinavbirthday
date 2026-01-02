"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">SMM Panel</h1>
      <p className="text-gray-500">
        Professional Social Media Marketing Services
      </p>

      <div className="flex gap-4">
        <Link
          href="/homepage"
          className="px-6 py-3 bg-blue-600 text-white rounded"
        >
          Go to Homepage
        </Link>

        <Link
          href="/pricing-packages"
          className="px-6 py-3 bg-gray-800 text-white rounded"
        >
          View Pricing
        </Link>
      </div>
    </main>
  );
}
