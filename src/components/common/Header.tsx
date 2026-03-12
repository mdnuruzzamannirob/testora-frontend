"use client";

import Link from "next/link";
import { APP_NAME } from "@/constants";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold text-gray-900 dark:text-white">
          {APP_NAME}
        </Link>
        <nav className="flex items-center gap-6">{/* Navigation items will go here */}</nav>
      </div>
    </header>
  );
}
