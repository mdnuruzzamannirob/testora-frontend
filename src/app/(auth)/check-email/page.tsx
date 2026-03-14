"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Mail, ArrowLeft } from "lucide-react";
import { ROUTES } from "@/constants";

function CheckEmailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") ?? "";

  const maskedEmail = email
    ? email.replace(/(.{2})(.*)(@.*)/, (_, a, b, c) => a + "*".repeat(Math.max(1, b.length)) + c)
    : "your email";

  return (
    <div className="w-full max-w-100 text-center">
      {/* Icon */}
      <div className="mb-5 flex justify-center">
        <div className="bg-primary/5 flex h-16 w-16 items-center justify-center rounded-2xl">
          <Mail className="text-primary h-8 w-8" />
        </div>
      </div>

      <h2 className="mb-1 text-2xl font-bold text-gray-900">Check Your Email</h2>
      <p className="mb-4 text-sm text-gray-500">
        We sent password reset instructions to your email address.
      </p>

      {/* Masked email */}
      <div className="mb-5 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700">
        {maskedEmail}
      </div>

      {/* Send OTP button */}
      <button
        onClick={() => router.push(`${ROUTES.VERIFY_CODE}?email=${encodeURIComponent(email)}`)}
        className="bg-primary hover:bg-primary/90 mb-3 w-full rounded-lg py-2.5 text-sm font-semibold text-white transition"
      >
        Send OTP
      </button>

      <button className="mb-5 w-full rounded-lg border border-gray-200 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
        Change Email
      </button>

      <p className="mb-4 text-xs text-gray-400">
        Didn&apos;t receive the OTP? Check your spam folder or request a resend again.
      </p>

      <Link
        href={ROUTES.LOGIN}
        className="flex items-center justify-center gap-1.5 text-sm text-gray-500 hover:text-gray-700"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to Login
      </Link>
    </div>
  );
}

export default function CheckEmailPage() {
  return (
    <Suspense>
      <CheckEmailContent />
    </Suspense>
  );
}
