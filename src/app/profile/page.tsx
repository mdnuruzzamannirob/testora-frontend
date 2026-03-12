"use client";

import { useState } from "react";
import Link from "next/link";
import { User, ShoppingBag, Package, LogOut, Lock, Mail, CheckCircle } from "lucide-react";
import { SiteNavbar } from "@/components/SiteNavbar";
import { SiteFooter } from "@/components/SiteFooter";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { logout } from "@/store/slices/authSlice";
import { ROUTES } from "@/constants";

type SidebarTab = "profile" | "orders" | "packages";

export default function ProfilePage() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const [activeTab, setActiveTab] = useState<SidebarTab>("profile");
  const [form, setForm] = useState({
    fullName: user?.name ?? "John Doe",
    email: user?.email ?? "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    city: "San Francisco",
    address: "123 Main Street, CA 94102",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <SiteNavbar />

        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
        <h1 className="mb-1 text-2xl font-extrabold text-gray-900">Account / Profile</h1>
        <p className="mb-8 text-sm text-gray-500">
          Manage your personal information and account settings
        </p>

        <div className="flex flex-col gap-6 md:flex-row">
          {/* Sidebar */}
          <aside className="w-full shrink-0 self-start rounded-2xl bg-white p-4 shadow-sm md:w-52">
            <nav className="space-y-1">
              <button
                onClick={() => setActiveTab("profile")}
                className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                  activeTab === "profile"
                    ? "bg-blue-600 text-white shadow"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <User className="h-4 w-4" />
                Account / Profile
              </button>
              <Link
                href={ROUTES.ORDERS}
                className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <ShoppingBag className="h-4 w-4" />
                My Orders
              </Link>
              <Link
                href={ROUTES.MY_PACKAGES}
                className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <Package className="h-4 w-4" />
                My Packages
              </Link>
              <button
                onClick={() => dispatch(logout())}
                className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Blue Header Card */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 p-6 text-white shadow-md">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                  <User className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-extrabold">{form.fullName}</h2>
                  <p className="text-sm text-blue-100">{form.email}</p>
                  <p className="mt-1 text-xs text-blue-200">One account works across Web and App</p>
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <section className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-bold text-gray-900">Personal Information</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Full Name", name: "fullName", type: "text" },
                  { label: "Email Address", name: "email", type: "email" },
                  { label: "Phone Number", name: "phone", type: "tel" },
                  { label: "City", name: "city", type: "text" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="mb-1 block text-xs font-medium text-gray-700">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name as keyof typeof form]}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-xs font-medium text-gray-700">
                    Address <span className="font-normal text-gray-400">(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>
            </section>

            {/* Account Settings */}
            <section className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-bold text-gray-900">Account Settings</h3>
              <div className="divide-y divide-gray-100">
                <div className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50">
                      <Lock className="h-4 w-4 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Change Password</p>
                      <p className="text-xs text-gray-400">
                        Update your password to keep your account secure
                      </p>
                    </div>
                  </div>
                  <button className="rounded-lg border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50">
                    Change
                  </button>
                </div>
                <div className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50">
                      <Mail className="h-4 w-4 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Manage Login Details</p>
                      <p className="text-xs text-gray-400">Update email or phone number</p>
                    </div>
                  </div>
                  <button className="rounded-lg border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50">
                    Manage
                  </button>
                </div>
              </div>
            </section>

            {/* My Packages */}
            <section className="rounded-2xl bg-blue-50 p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-bold text-gray-900">My Packages</h3>
              <div className="mb-4 flex items-start justify-between rounded-xl border border-blue-100 bg-white p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100">
                    <Package className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Premium Learning Package</p>
                    <p className="text-xs text-gray-400">Status: Active</p>
                    <p className="text-xs text-gray-400">Expires: Dec 31, 2024</p>
                  </div>
                </div>
                <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-[10px] font-semibold text-green-700">
                  Active
                </span>
              </div>
              <div className="mb-4 flex items-start gap-2 rounded-xl border border-blue-200 bg-blue-100 p-3">
                <span className="mt-0.5 text-blue-500">ℹ️</span>
                <p className="text-xs text-blue-800">
                  <span className="font-semibold">Note:</span> Purchased packages are used inside
                  the Testora mobile app
                </p>
              </div>
              <Link
                href={ROUTES.MY_PACKAGES}
                className="inline-block rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
              >
                View My Packages
              </Link>
            </section>

            {/* Connected Experience */}
            <section className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-sm font-bold text-gray-900">Connected Experience</h3>
              <ul className="space-y-2">
                {[
                  "Same Account across Multiple Platforms",
                  "Access via Website (testora.com)",
                  "Access via Testora Mobile App",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 shrink-0 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Bottom Action Bar */}
            <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
              <button className="rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
                Save Changes
              </button>
              <button className="rounded-xl border border-gray-200 px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Cancel
              </button>
              <button
                onClick={() => dispatch(logout())}
                className="ml-auto rounded-xl bg-red-50 px-6 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-100"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
