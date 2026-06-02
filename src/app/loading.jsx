"use client";

import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <Spinner color="success" size="lg" />
        <span className="text-sm text-green-600 font-medium">
          Loading...
        </span>
      </div>
    </div>
  );
}