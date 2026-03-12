"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ShoppingCart, ChevronDown, ShoppingBag, UserCircle2, LogOut, Package } from "lucide-react";
import { Logo } from "@/components/Logo";
import { ROUTES } from "@/constants";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { logout } from "@/store/slices/authSlice";

const NAV_LINKS = [
  { label: "Home", href: ROUTES.HOME },
  { label: "About", href: ROUTES.ABOUT },
  { label: "Packages", href: ROUTES.PACKAGES },
  { label: "Marketplace", href: ROUTES.MARKETPLACE },
  { label: "Blog", href: ROUTES.BLOG },
];

export function SiteNavbar() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((s) => s.cart.items);
  const { isAuthenticated, user } = useAppSelector((s) => s.auth);
  const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((o) => !o)}
                className="flex items-center gap-2 rounded-lg border border-gray-100 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                  <UserCircle2 className="h-5 w-5 text-blue-500" />
                </div>
                <span className="hidden font-medium sm:block">{user.name}</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 text-gray-400 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-52 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg">
                  {/* Header */}
                  <div className="border-b border-gray-100 px-4 py-3">
                    <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-400">{user.email}</p>
                  </div>
                  {/* Links */}
                  <div className="py-1">
                    <Link
                      href={ROUTES.ORDERS}
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <ShoppingBag className="h-4 w-4 text-gray-400" />
                      My Orders
                    </Link>
                    <Link
                      href={ROUTES.PROFILE}
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <UserCircle2 className="h-4 w-4 text-gray-400" />
                      Account / Profile
                    </Link>
                    <Link
                      href={ROUTES.MY_PACKAGES}
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <Package className="h-4 w-4 text-gray-400" />
                      My Packages
                    </Link>
                  </div>
                  <div className="border-t border-gray-100 py-1">
                    <button
                      onClick={() => {
                        dispatch(logout());
                        setDropdownOpen(false);
                      }}
                      className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50"
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
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
