import type { Metadata } from "next";
import { Google_Sans } from "next/font/google";
import ReduxProvider from "@/store/ReduxProvider";
import "./globals.css";
import { cn } from "@/lib/utils";

const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Testora - E Learning Platform for Students",
  description:
    "Testora is an online platform that provides a wide range of learning materials and practice tests for students to prepare for exams and assessments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={cn("antialiased", googleSans.className)}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
