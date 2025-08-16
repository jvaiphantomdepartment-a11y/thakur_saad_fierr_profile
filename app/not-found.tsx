"use client";

import { FuzzyText } from "@/components/animated";

const RootNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col gap-y-4">
      <FuzzyText baseIntensity={0.2}>404</FuzzyText>
      <p className="text-2xl text-gray-400">Page Not Found</p>
    </div>
  );
};

export default RootNotFound;
