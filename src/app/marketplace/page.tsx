"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, SlidersHorizontal, X } from "lucide-react";
import { SiteNavbar } from "@/components/SiteNavbar";
import { SiteFooter } from "@/components/SiteFooter";
import { ROUTES } from "@/constants";
import { useAppDispatch } from "@/store/hooks";
import { addToCart } from "@/store/slices/cartSlice";

const CATEGORIES = [
  "All Products",
  "Scientific Calculators",
  "Books",
  "School Bags",
  "Notebooks",
  "Geometry & Math Tools",
  "Stationery",
  "Study Accessories",
];

const EDUCATION_LEVELS = ["All Levels", "School", "High School", "University"];

const PRODUCTS = [
  {
    id: "1",
    name: "Texas Instruments TI-84 Plus",
    category: "Scientific Calculators",
    desc: "Graphing calculator for advanced mathematics and sciences",
    price: 119.99,
    badge: null,
  },
  {
    id: "2",
    name: "Premium Student Backpack",
    category: "School Bags",
    desc: "Durable backpack with laptop compartment",
    price: 49.99,
    badge: null,
  },
  {
    id: "3",
    name: "Professional Geometry Set",
    category: "Geometry & Math Tools",
    desc: "Complete geometry tool set for students",
    price: 16.99,
    badge: null,
  },
  {
    id: "4",
    name: "Casio FX-991EX Scientific Calculator",
    category: "Scientific Calculators",
    desc: "Advanced scientific calculator for high school and university",
    price: 34.99,
    badge: "Best Sale",
  },
  {
    id: "5",
    name: "Physics Fundamentals Textbook",
    category: "Books",
    desc: "Essential physics textbook for science students",
    price: 39.99,
    badge: "Best Sale",
  },
  {
    id: "6",
    name: "A4 Ruled Notebook Set",
    category: "Notebooks",
    desc: "Set of 3 premium quality notebooks",
    price: 12.99,
    badge: "Best Sale",
  },
  {
    id: "7",
    name: "Complete Mathematics Study Guide",
    category: "Books",
    desc: "Comprehensive mathematics reference for students",
    price: 29.99,
    badge: "New Arrival",
  },
  {
    id: "8",
    name: "Classic Messenger Bag",
    category: "School Bags",
    desc: "Professional messenger bag for university students",
    price: 34.99,
    badge: null,
  },
  {
    id: "9",
    name: "Grid Notebook for Mathematics",
    category: "Notebooks",
    desc: "Grid notebook for math and technical drawing",
    price: 8.99,
    badge: null,
  },
  {
    id: "10",
    name: "Digital Protractor",
    category: "Geometry & Math Tools",
    desc: "Electronic angle measurement tool",
    price: 24.99,
    badge: "New Arrival",
  },
  {
    id: "11",
    name: "Premium Pen Set",
    category: "Stationery",
    desc: "Set of 10 high-quality ballpoint pens",
    price: 14.99,
    badge: null,
  },
  {
    id: "12",
    name: "Highlighter Marker Set",
    category: "Stationery",
    desc: "6-color highlighter set for studying",
    price: 9.99,
    badge: null,
  },
];

const BADGE_STYLE: Record<string, string> = {
  "Best Sale": "bg-blue-500 text-white",
  "New Arrival": "bg-green-500 text-white",
};

export default function MarketplacePage() {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [activeLevel, setActiveLevel] = useState("All Levels");
  const [showFilters, setShowFilters] = useState(false);
  const [visibleCount, setVisibleCount] = useState(9);

  const filtered = PRODUCTS.filter((p) => {
    const matchCat = activeCategory === "All Products" || p.category === activeCategory;
    const matchSearch =
      search === "" ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const visible = filtered.slice(0, visibleCount);

  return (
    <main className="min-h-screen bg-white">
      <SiteNavbar />

      {/* Page header */}
      <div className="border-b border-gray-100 bg-white px-4 py-6 sm:px-6 sm:py-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-extrabold text-gray-900">Marketplace</h1>
          <p className="mt-1 text-sm text-gray-500">
            Essential tools for school and university students
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
        {/* Search + meta */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-xs rounded-lg border border-gray-200 py-2 pr-3 pl-9 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>
          <button
            className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 lg:hidden"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>
          <span className="ml-auto text-xs text-gray-400">Showing {filtered.length} products</span>
        </div>

        <div className="flex gap-6">
          {/* Sidebar filters */}
          <aside className={`${showFilters ? "block" : "hidden"} w-48 shrink-0 lg:block`}>
            <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
              <div className="mb-5">
                <h3 className="mb-2.5 text-xs font-semibold tracking-wider text-gray-900 uppercase">
                  Category
                </h3>
                <ul className="flex flex-col gap-1">
                  {CATEGORIES.map((c) => (
                    <li key={c}>
                      <button
                        onClick={() => setActiveCategory(c)}
                        className={`w-full rounded px-2 py-1 text-left text-xs transition ${
                          activeCategory === c
                            ? "bg-blue-50 font-semibold text-blue-700"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        {c}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-5">
                <h3 className="mb-2.5 text-xs font-semibold tracking-wider text-gray-900 uppercase">
                  Education Level
                </h3>
                <ul className="flex flex-col gap-1">
                  {EDUCATION_LEVELS.map((l) => (
                    <li key={l}>
                      <button
                        onClick={() => setActiveLevel(l)}
                        className={`w-full rounded px-2 py-1 text-left text-xs transition ${
                          activeLevel === l
                            ? "bg-blue-50 font-semibold text-blue-700"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        {l}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-xs font-semibold tracking-wider text-gray-900 uppercase">
                  Price Range
                </h3>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>$8</span>
                  <span>$120</span>
                </div>
                <input type="range" min={8} max={120} className="mt-1 w-full accent-blue-600" />
              </div>

              {(activeCategory !== "All Products" || activeLevel !== "All Levels") && (
                <button
                  onClick={() => {
                    setActiveCategory("All Products");
                    setActiveLevel("All Levels");
                  }}
                  className="mt-4 flex items-center gap-1 text-xs text-red-500 hover:underline"
                >
                  <X className="h-3 w-3" />
                  Reset Filters
                </button>
              )}
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {visible.length === 0 ? (
              <div className="py-20 text-center text-sm text-gray-400">
                No products found. Try adjusting your filters.
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {visible.map((p) => (
                  <div
                    key={p.id}
                    className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md"
                  >
                    {p.badge && (
                      <span
                        className={`absolute top-3 left-3 z-10 rounded-full px-2 py-0.5 text-[10px] font-bold ${BADGE_STYLE[p.badge]}`}
                      >
                        {p.badge}
                      </span>
                    )}
                    <Link href={`${ROUTES.MARKETPLACE}/${p.id}`}>
                      <div className="flex h-44 items-center justify-center bg-blue-50/60">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                          <ShoppingCart className="h-8 w-8 text-blue-400" />
                        </div>
                      </div>
                    </Link>
                    <div className="flex flex-1 flex-col p-4">
                      <p className="mb-0.5 text-[10px] font-medium text-blue-600">{p.category}</p>
                      <Link
                        href={`${ROUTES.MARKETPLACE}/${p.id}`}
                        className="mb-1 text-sm font-bold text-gray-900 hover:underline"
                      >
                        {p.name}
                      </Link>
                      <p className="mb-2 flex-1 text-xs text-gray-400">{p.desc}</p>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-base font-extrabold text-gray-900">
                          ${p.price.toFixed(2)}
                        </span>
                        <button
                          onClick={() =>
                            dispatch(
                              addToCart({
                                id: p.id,
                                name: p.name,
                                price: p.price,
                                category: p.category,
                              })
                            )
                          }
                          className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {visibleCount < filtered.length && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setVisibleCount((n) => n + 6)}
                  className="rounded-lg border border-gray-200 px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Load More Products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
