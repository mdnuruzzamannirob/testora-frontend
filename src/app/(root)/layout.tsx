import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-dvh flex-col">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
