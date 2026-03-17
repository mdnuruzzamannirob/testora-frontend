import { Logo } from "@/components/common/Logo";
import { ROUTES } from "@/constants";
import Link from "next/link";

const COLUMNS = [
  {
    heading: "Product",
    links: [
      { label: "Packages", href: ROUTES.PACKAGES },
      { label: "Marketplace", href: ROUTES.MARKETPLACE },
      { label: "Download app", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: ROUTES.ABOUT },
      { label: "Blog", href: ROUTES.BLOG },
    ],
  },

  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: ROUTES.PRIVACY_POLICY },
      { label: "Terms of Service", href: ROUTES.TERMS_OF_SERVICE },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Contact", href: ROUTES.CONTACT },
      { label: "FAQ", href: `${ROUTES.CONTACT}#faq` },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-slate-50">
      <div className="app-container">
        <div className="grid grid-cols-2 gap-8 py-14 md:grid-cols-5 md:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Logo />

            <p className="mt-4 max-w-55 text-sm leading-6 text-slate-500">
              Your comprehensive exam preparation platform
            </p>
          </div>

          {/* Columns */}
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="mb-4 text-sm font-semibold text-slate-900">{col.heading}</h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-slate-500 duration-200 hover:text-slate-900"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 py-7 text-center text-sm text-slate-500">
          © 2026 Testora. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
