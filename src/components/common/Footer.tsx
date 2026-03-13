import Link from "next/link";
import { Logo } from "@/components/common/Logo";
import { ROUTES } from "@/constants";

const COLUMNS = [
  {
    heading: "Platform",
    links: [
      { label: "About Us", href: ROUTES.ABOUT },
      { label: "Features", href: "#" },
      { label: "Pricing", href: ROUTES.PACKAGES },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 pt-16 pb-10">
      <div className="app-container">
        <div className="mb-10 grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Logo />

            <p className="mt-3 text-sm text-gray-400">
              Your trusted partner in exam preparation and academic success.
            </p>
          </div>
          {/* Columns */}
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="mb-3 text-sm font-semibold tracking-widest text-gray-900 uppercase">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-1.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm font-medium text-gray-500 duration-200 hover:text-gray-900"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
          © 2026 Testora. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
