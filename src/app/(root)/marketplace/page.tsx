"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronRight, Search, ShoppingCart, SlidersHorizontal, X } from "lucide-react";
import { ROUTES } from "@/constants";
import { useAppDispatch } from "@/store/hooks";
import { addToCart } from "@/store/slices/cartSlice";
import PageHero from "@/components/common/PageHero";
import { cn } from "@/lib/utils";

const CATEGORIES: Record<string, string[]> = {
  "All Products": [],
  "Scientific Calculators": ["Graphing", "Scientific", "Basic"],
  Books: ["Textbooks", "Study Guides", "Reference"],
  "School Bags": ["Backpacks", "Messenger Bags", "Pouches"],
  Notebooks: ["Ruled", "Grid", "Blank"],
  "Geometry & Math Tools": ["Sets", "Protractors", "Rulers"],
  Stationery: ["Pens", "Highlighters", "Markers"],
  "Study Accessories": ["Organizers", "Lamps", "Timers"],
};

const EDUCATION_LEVELS = ["All Levels", "School", "High School", "University"];

const PRODUCTS = [
  {
    id: "1",
    name: "Texas Instruments TI-84 Plus",
    category: "Scientific Calculators",
    sub: "Graphing",
    level: "University",
    desc: "Graphing calculator for advanced mathematics and sciences",
    price: 119.99,
    badge: null,
  },
  {
    id: "2",
    name: "Premium Student Backpack",
    category: "School Bags",
    sub: "Backpacks",
    level: "School",
    desc: "Durable backpack with laptop compartment",
    price: 49.99,
    badge: null,
  },
  {
    id: "3",
    name: "Professional Geometry Set",
    category: "Geometry & Math Tools",
    sub: "Sets",
    level: "High School",
    desc: "Complete geometry tool set for students",
    price: 16.99,
    badge: null,
  },
  {
    id: "4",
    name: "Casio FX-991EX Scientific Calculator",
    category: "Scientific Calculators",
    sub: "Scientific",
    level: "High School",
    desc: "Advanced scientific calculator for high school and university",
    price: 34.99,
    badge: "Best Sale",
  },
  {
    id: "5",
    name: "Physics Fundamentals Textbook",
    category: "Books",
    sub: "Textbooks",
    level: "University",
    desc: "Essential physics textbook for science students",
    price: 39.99,
    badge: "Best Sale",
  },
  {
    id: "6",
    name: "A4 Ruled Notebook Set",
    category: "Notebooks",
    sub: "Ruled",
    level: "School",
    desc: "Set of 3 premium quality notebooks",
    price: 12.99,
    badge: "Best Sale",
  },
  {
    id: "7",
    name: "Complete Mathematics Study Guide",
    category: "Books",
    sub: "Study Guides",
    level: "High School",
    desc: "Comprehensive mathematics reference for students",
    price: 29.99,
    badge: "New Arrival",
  },
  {
    id: "8",
    name: "Classic Messenger Bag",
    category: "School Bags",
    sub: "Messenger Bags",
    level: "University",
    desc: "Professional messenger bag for university students",
    price: 34.99,
    badge: null,
  },
  {
    id: "9",
    name: "Grid Notebook for Mathematics",
    category: "Notebooks",
    sub: "Grid",
    level: "High School",
    desc: "Grid notebook for math and technical drawing",
    price: 8.99,
    badge: null,
  },
  {
    id: "10",
    name: "Digital Protractor",
    category: "Geometry & Math Tools",
    sub: "Protractors",
    level: "University",
    desc: "Electronic angle measurement tool",
    price: 24.99,
    badge: "New Arrival",
  },
  {
    id: "11",
    name: "Premium Pen Set",
    category: "Stationery",
    sub: "Pens",
    level: "School",
    desc: "Set of 10 high-quality ballpoint pens",
    price: 14.99,
    badge: null,
  },
  {
    id: "12",
    name: "Highlighter Marker Set",
    category: "Stationery",
    sub: "Highlighters",
    level: "School",
    desc: "6-color highlighter set for studying",
    price: 9.99,
    badge: null,
  },
];

const BADGE_STYLE: Record<string, string> = {
  "Best Sale": "bg-primary text-white",
  "New Arrival": "bg-primary text-white",
};

const PRICE_MIN = 8;
const PRICE_MAX = 120;

type Product = (typeof PRODUCTS)[number];

export default function MarketplacePage() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState("All Products");
  const [activeSub, setActiveSub] = useState("");
  const [expandedCat, setExpandedCat] = useState("");
  const [activeLevel, setActiveLevel] = useState("All Levels");
  const [minPrice, setMinPrice] = useState(PRICE_MIN);
  const [maxPrice, setMaxPrice] = useState(PRICE_MAX);
  const [showFilters, setShowFilters] = useState(false);
  const [visibleCount, setVisibleCount] = useState(9);

  const minPct = ((minPrice - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100;
  const maxPct = ((maxPrice - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100;

  function handleCatClick(cat: string) {
    setActiveCat(cat);
    setActiveSub("");
    setExpandedCat((prev) => (prev === cat ? "" : cat));
    setVisibleCount(9);
  }

  function handleAddToCart(product: Product) {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        category: product.category,
      })
    );
  }

  const filtered = useMemo(
    () =>
      PRODUCTS.filter((p) => {
        const matchCat = activeCat === "All Products" || p.category === activeCat;
        const matchSub = !activeSub || p.sub === activeSub;
        const matchLevel = activeLevel === "All Levels" || p.level === activeLevel;
        const matchPrice = p.price >= minPrice && p.price <= maxPrice;
        const q = search.trim().toLowerCase();
        const matchSearch =
          !q ||
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.sub.toLowerCase().includes(q) ||
          p.desc.toLowerCase().includes(q);

        return matchCat && matchSub && matchLevel && matchPrice && matchSearch;
      }),
    [activeCat, activeSub, activeLevel, minPrice, maxPrice, search]
  );

  const visible = filtered.slice(0, visibleCount);

  const hasActiveFilters =
    activeCat !== "All Products" ||
    activeSub !== "" ||
    activeLevel !== "All Levels" ||
    minPrice > PRICE_MIN ||
    maxPrice < PRICE_MAX ||
    search.trim() !== "";

  function resetFilters() {
    setActiveCat("All Products");
    setActiveSub("");
    setExpandedCat("");
    setActiveLevel("All Levels");
    setMinPrice(PRICE_MIN);
    setMaxPrice(PRICE_MAX);
    setSearch("");
    setVisibleCount(9);
  }

  function handleBuyNow(product: Product) {
    handleAddToCart(product);
    router.push(ROUTES.CHECKOUT);
  }

  function handleMinPriceChange(value: number) {
    setMinPrice(Math.min(value, maxPrice - 1));
    setVisibleCount(9);
  }

  function handleMaxPriceChange(value: number) {
    setMaxPrice(Math.max(value, minPrice + 1));
    setVisibleCount(9);
  }

  return (
    <section className="flex-1">
      <PageHero
        title="Marketplace"
        description="Essential tools for school and university students"
      />

      <div className="app-container sm:py-10">
        {/* Search + controls */}
        <div className="mb-6 flex items-center gap-3">
          <div className="relative w-full">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products, categories, or study essentials"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setVisibleCount(9);
              }}
              className="focus:border-primary focus:ring-primary/10 w-full rounded-md border border-gray-200 bg-white py-2.5 pr-4 pl-9 text-sm text-gray-700 focus:ring-2 focus:outline-none"
            />
          </div>

          <button
            className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm whitespace-nowrap text-gray-600 lg:hidden"
            onClick={() => setShowFilters(!showFilters)}
            type="button"
          >
            <SlidersHorizontal className="h-4 w-4" />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Sidebar */}
          <aside className={`${showFilters ? "block" : "hidden"} w-full shrink-0 lg:block lg:w-72`}>
            <div className="no-scrollbar rounded-2xl border border-gray-200 bg-white p-4 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-sm font-bold text-gray-900">Filter Products</h3>
                {hasActiveFilters && (
                  <button
                    onClick={resetFilters}
                    type="button"
                    className="inline-flex items-center gap-1 rounded bg-red-50 px-2 py-1 text-xs font-semibold text-red-600"
                  >
                    <X className="h-3 w-3" /> Reset
                  </button>
                )}
              </div>

              {/* Dual range price slider */}
              <div className="mb-5">
                <p className="mb-3 text-xs font-semibold tracking-wide text-gray-500 uppercase">
                  Price Range
                </p>

                <div className="relative mb-3 h-6">
                  <div className="absolute top-1/2 h-0.75 w-full -translate-y-1/2 rounded-full bg-gray-200" />
                  <div
                    className="bg-primary absolute top-1/2 h-0.75 -translate-y-1/2 rounded-full"
                    style={{ left: `${minPct}%`, width: `${maxPct - minPct}%` }}
                  />

                  <input
                    type="range"
                    min={PRICE_MIN}
                    max={PRICE_MAX}
                    step={1}
                    value={minPrice}
                    onChange={(e) => handleMinPriceChange(Number(e.target.value))}
                    className="[&::-webkit-slider-thumb]:border-primary [&::-moz-range-thumb]:border-primary pointer-events-none absolute inset-0 h-full w-full cursor-pointer appearance-none bg-transparent [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:bg-white [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:bg-white"
                    style={{ zIndex: minPrice > PRICE_MAX - 20 ? 5 : 3 }}
                  />

                  <input
                    type="range"
                    min={PRICE_MIN}
                    max={PRICE_MAX}
                    step={1}
                    value={maxPrice}
                    onChange={(e) => handleMaxPriceChange(Number(e.target.value))}
                    className="[&::-webkit-slider-thumb]:border-primary [&::-moz-range-thumb]:border-primary pointer-events-none absolute inset-0 h-full w-full cursor-pointer appearance-none bg-transparent [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:bg-white [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:bg-white"
                    style={{ zIndex: 4 }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>${minPrice}</span>
                  <span className="text-primary font-semibold">${maxPrice}</span>
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {[25, 50, 80, 120].map((cap) => (
                    <button
                      key={cap}
                      type="button"
                      onClick={() => {
                        setMinPrice(PRICE_MIN);
                        setMaxPrice(cap);
                        setVisibleCount(9);
                      }}
                      className={`rounded-full border px-2.5 py-1 text-xs font-medium ${
                        maxPrice === cap && minPrice === PRICE_MIN
                          ? "border-primary bg-primary text-white"
                          : "border-gray-200 bg-white text-gray-600"
                      }`}
                    >
                      Under ${cap}
                    </button>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="mb-5">
                <h4 className="mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase">
                  Categories
                </h4>
                <ul className="space-y-0.5">
                  {Object.entries(CATEGORIES).map(([cat, subs]) => (
                    <li key={cat}>
                      <button
                        onClick={() => handleCatClick(cat)}
                        type="button"
                        className={`flex w-full items-center justify-between rounded-md px-2.5 py-1.5 text-left text-xs ${
                          activeCat === cat ? "bg-primary text-white" : "text-gray-600"
                        }`}
                      >
                        <span>{cat}</span>
                        {subs.length > 0 && (
                          <span
                            className={`text-[10px] ${activeCat === cat ? "text-white/70" : "text-gray-400"}`}
                          >
                            <ChevronRight
                              size={14}
                              className={cn(
                                "transition duration-200",
                                expandedCat === cat ? "rotate-90" : "rotate-0"
                              )}
                            />
                          </span>
                        )}
                      </button>

                      {expandedCat === cat && subs.length > 0 && (
                        <ul className="mt-0.5 ml-3 space-y-0.5">
                          {subs.map((sub) => (
                            <li key={sub}>
                              <button
                                type="button"
                                onClick={() => {
                                  setActiveSub((p) => (p === sub ? "" : sub));
                                  setVisibleCount(9);
                                }}
                                className={`w-full rounded-md px-2.5 py-1 text-left text-xs ${
                                  activeSub === sub ? "text-primary font-semibold" : "text-gray-500"
                                }`}
                              >
                                {sub}
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Education level */}
              <div className="mb-4">
                <h4 className="mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase">
                  Education Level
                </h4>
                <ul className="space-y-0.5">
                  {EDUCATION_LEVELS.map((l) => (
                    <li key={l}>
                      <button
                        onClick={() => {
                          setActiveLevel(l);
                          setVisibleCount(9);
                        }}
                        type="button"
                        className={`w-full rounded-md px-2.5 py-1.5 text-left text-xs ${
                          activeLevel === l ? "bg-primary text-white" : "text-gray-600"
                        }`}
                      >
                        {l}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="my-4 flex items-center justify-between gap-4">
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-gray-900">{filtered.length}</span> product
                {filtered.length !== 1 ? "s" : ""} found
              </p>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  type="button"
                  className="flex items-center gap-1 rounded-md border border-red-600 bg-white px-3 py-1.5 text-xs font-semibold text-red-600"
                >
                  <X className="h-3.5 w-3.5" /> Clear Filters
                </button>
              )}
            </div>

            {visible.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-gray-200 py-20 text-center text-sm text-gray-400">
                No products found. Try adjusting your filters.
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {visible.map((p) => (
                  <div
                    key={p.id}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white"
                  >
                    {p.badge && (
                      <span
                        className={`absolute top-3 left-3 z-10 rounded-full px-2 py-0.5 text-[10px] font-bold ${BADGE_STYLE[p.badge]}`}
                      >
                        {p.badge}
                      </span>
                    )}

                    <Link href={`${ROUTES.MARKETPLACE}/${p.id}`}>
                      <div className="from-primary/5 flex h-44 items-center justify-center bg-linear-to-br to-blue-50">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white ring-4 ring-white">
                          <ShoppingCart className="text-primary h-8 w-8" />
                        </div>
                      </div>
                    </Link>

                    <div className="flex flex-1 flex-col p-4">
                      <p className="text-primary mb-0.5 text-[10px] font-semibold tracking-wide uppercase">
                        {p.category} · {p.level}
                      </p>

                      <Link
                        href={`${ROUTES.MARKETPLACE}/${p.id}`}
                        className="mb-1 text-sm font-bold text-gray-900"
                      >
                        {p.name}
                      </Link>

                      <p className="mb-3 flex-1 text-xs text-gray-500">{p.desc}</p>

                      <div className="mb-3 flex items-center justify-between">
                        <span className="text-base font-extrabold text-gray-900">
                          ${p.price.toFixed(2)}
                        </span>
                        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-600">
                          Ready to ship
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => handleAddToCart(p)}
                          className="border-primary text-primary rounded-md border px-3 py-2 text-xs font-semibold"
                        >
                          Add to Cart
                        </button>
                        <button
                          type="button"
                          onClick={() => handleBuyNow(p)}
                          className="bg-primary rounded-md px-3 py-2 text-xs font-semibold text-white"
                        >
                          Buy Now
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
                  type="button"
                  onClick={() => setVisibleCount((n) => n + 6)}
                  className="rounded-md border border-gray-200 px-6 py-2.5 text-sm font-medium text-gray-700"
                >
                  Load More Products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
