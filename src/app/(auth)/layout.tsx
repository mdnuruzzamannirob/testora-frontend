import { Logo } from "@/components/common/Logo";
import Image from "next/image";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Left panel */}
      <div className="relative hidden w-[42%] shrink-0 flex-col items-center justify-center overflow-hidden bg-[#E8F0FE] lg:flex">
        <div className="absolute top-5 left-6">
          <Logo size="md" />
        </div>
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Practice Anywhere</h2>
          <p className="mt-1 text-sm text-gray-500">Same account on both Web and App</p>
        </div>
        {/* Phone mockup illustration */}
        <div className="relative flex h-auto w-48 items-center justify-center">
          <Image
            src="/banner.png"
            alt="Hero"
            width={300}
            height={560}
            className="h-auto w-64 md:w-full"
          />
        </div>
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -top-8 -right-8 h-40 w-40 rounded-full bg-indigo-200/40 blur-3xl" />
      </div>

      {/* Right panel */}
      <div className="flex flex-1 flex-col bg-white">
        <div className="flex justify-center px-4 pt-6 lg:hidden">
          <Logo size="md" />
        </div>
        <div className="flex flex-1 items-center justify-center px-4 py-10">{children}</div>
      </div>
    </div>
  );
}
