"use client";

import Link from "next/link";
import { ShoppingCart, User, ChevronDown } from "lucide-react";
import { Logo } from "@/components/Logo";
import { ROUTES } from "@/constants";
import { useAppSelector } from "@/store/hooks";

const NAV_LINKS = [
  { label: "Home", href: ROUTES.HOME },
  { label: "About", href: ROUTES.ABOUT },
  { label: "Packages", href: ROUTES.PACKAGES },
  { label: "Marketplace", href: ROUTES.MARKETPLACE },
  { label: "Blog", href: "#" },
];

export function SiteNavbar() {
  const cartItems = useAppSelector((s) => s.cart.items);
  const { isAuthenticated, user } = useAppSelector((s) => s.auth);
  const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        <Logo size="md" />

        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm text-gray-600 transition hover:text-gray-900"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href={ROUTES.CART} className="relative p-1.5 text-gray-600 hover:text-gray-900">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {isAuthenticated && user ? (
            <button className="flex items-center gap-2 rounded-lg border border-gray-100 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <span className="hidden font-medium sm:block">{user.name}</span>
              <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
            </button>
          ) : (
            <>
              <Link
                href={ROUTES.LOGIN}
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Login
              </Link>
              <Link
                href={ROUTES.REGISTER}
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
