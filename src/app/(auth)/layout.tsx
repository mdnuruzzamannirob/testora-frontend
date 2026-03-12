import { Logo } from "@/components/Logo";

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
        <div className="relative flex h-[340px] w-[180px] items-center justify-center">
          <div className="relative h-[320px] w-[160px] overflow-hidden rounded-[32px] border-[6px] border-gray-800 bg-gray-800 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600" />
            <div className="absolute inset-0 flex flex-col gap-2 p-3">
              <div className="h-4 w-3/4 rounded bg-white/30" />
              <div className="h-20 w-full rounded-lg bg-white/20" />
              <div className="h-3 w-1/2 rounded bg-white/25" />
              <div className="h-3 w-2/3 rounded bg-white/25" />
              <div className="mt-1 h-8 w-full rounded-lg bg-white/20" />
              <div className="h-3 w-1/3 rounded bg-white/25" />
              <div className="flex gap-1">
                <div className="h-12 w-1/2 rounded-lg bg-teal-400/50" />
                <div className="h-12 w-1/2 rounded-lg bg-blue-400/50" />
              </div>
            </div>
          </div>
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
