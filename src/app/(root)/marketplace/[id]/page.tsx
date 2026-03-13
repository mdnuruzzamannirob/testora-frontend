"use client";

import { use, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, Heart, Truck, ShieldCheck, RefreshCw, Check } from "lucide-react";
import { ROUTES } from "@/constants";
import { useAppDispatch } from "@/store/hooks";
import { addToCart } from "@/store/slices/cartSlice";
import { notFound } from "next/navigation";

const PRODUCTS: Record<
  string,
  {
    id: string;
    name: string;
    category: string;
    desc: string;
    longDesc: string;
    price: number;
    specs: { label: string; value: string }[];
    included: string[];
    related: { id: string; name: string; category: string; price: number }[];
  }
> = {
  "1": {
    id: "1",
    name: "Texas Instruments TI-84 Plus",
    category: "Scientific Calculators",
    desc: "Graphing calculator for advanced mathematics and sciences",
    longDesc:
      "The TI-84 Plus is a powerful graphing calculator perfect for advanced high school and university students. It offers comprehensive graphing capabilities, data analysis tools, and programming features. Approved for use in standardized tests including SAT, ACT, and AP exams.",
    price: 119.99,
    specs: [
      { label: "Display", value: "8-line by 16-character LCD" },
      { label: "Memory", value: "480 KB ROM, 24 KB RAM" },
      { label: "Power", value: "4 AAA Batteries" },
      { label: "Dimensions", value: "19 × 9 × 2.5 cm" },
      { label: "Weight", value: "220 grams" },
    ],
    included: ["1 Graphing Calculator", "1 USB Cable", "4 AAA Batteries", "1 Quick Start Guide"],
    related: [
      {
        id: "4",
        name: "Casio FX-991EX Scientific Calculator",
        category: "Scientific Calculators",
        price: 34.99,
      },
    ],
  },
  "2": {
    id: "2",
    name: "Premium Student Backpack",
    category: "School Bags",
    desc: "Durable backpack with laptop compartment",
    longDesc:
      "A premium student backpack designed for daily use. Features a padded laptop compartment, multiple pockets for organisation, ergonomic shoulder straps, and durable water-resistant fabric.",
    price: 49.99,
    specs: [
      { label: "Capacity", value: "30 litres" },
      { label: "Laptop Compartment", value: "Up to 15.6 inches" },
      { label: "Material", value: "Water-resistant polyester" },
      { label: "Dimensions", value: "45 × 30 × 15 cm" },
      { label: "Weight", value: "800 grams" },
    ],
    included: ["1 Backpack", "Rain Cover", "Waist Strap"],
    related: [{ id: "8", name: "Classic Messenger Bag", category: "School Bags", price: 34.99 }],
  },
  "3": {
    id: "3",
    name: "Professional Geometry Set",
    category: "Geometry & Math Tools",
    desc: "Complete geometry tool set for students",
    longDesc:
      "A comprehensive geometry set containing all the essential tools needed for mathematics and technical drawing. Includes a compass, protractor, set squares, and rulers all made from durable materials.",
    price: 16.99,
    specs: [
      { label: "Contents", value: "10-piece set" },
      { label: "Material", value: "Aluminium & ABS plastic" },
      { label: "Case", value: "Hard zipper case included" },
      { label: "Suitable For", value: "High school & university" },
    ],
    included: ["Compass", "Protractor", "2× Set Squares", "15cm Ruler", "30cm Ruler", "Hard Case"],
    related: [
      { id: "10", name: "Digital Protractor", category: "Geometry & Math Tools", price: 24.99 },
    ],
  },
  "4": {
    id: "4",
    name: "Casio FX-991EX Scientific Calculator",
    category: "Scientific Calculators",
    desc: "Advanced scientific calculator for high school and university",
    longDesc:
      "The Casio FX-991EX is one of the most advanced non-programmable scientific calculators available. It features a high-resolution LCD, spreadsheet function, and over 550 functions.",
    price: 34.99,
    specs: [
      { label: "Functions", value: "552 functions" },
      { label: "Display", value: "High-res natural textbook" },
      { label: "Power", value: "Solar + battery backup" },
      { label: "Memory", value: "40 variables" },
      { label: "Dimensions", value: "16.3 × 7.7 × 1.1 cm" },
    ],
    included: ["1 Calculator", "1 Slide-on Case", "1 Battery"],
    related: [
      {
        id: "1",
        name: "Texas Instruments TI-84 Plus",
        category: "Scientific Calculators",
        price: 119.99,
      },
    ],
  },
  "5": {
    id: "5",
    name: "Physics Fundamentals Textbook",
    category: "Books",
    desc: "Essential physics textbook for science students",
    longDesc:
      "A comprehensive physics textbook covering mechanics, thermodynamics, electromagnetism, waves, and modern physics. Includes worked examples, practice problems, and online resources.",
    price: 39.99,
    specs: [
      { label: "Pages", value: "680 pages" },
      { label: "Edition", value: "4th Edition (2025)" },
      { label: "Format", value: "Hardcover" },
      { label: "Level", value: "High school & undergraduate" },
    ],
    included: ["1 Textbook", "Access Code for Online Resources"],
    related: [
      { id: "7", name: "Complete Mathematics Study Guide", category: "Books", price: 29.99 },
    ],
  },
  "6": {
    id: "6",
    name: "A4 Ruled Notebook Set",
    category: "Notebooks",
    desc: "Set of 3 premium quality notebooks",
    longDesc:
      "A set of 3 premium A4 ruled notebooks with thick cream-white paper that prevents ink bleed-through. Ideal for lecture notes, study notes, and journaling.",
    price: 12.99,
    specs: [
      { label: "Count", value: "3 notebooks" },
      { label: "Ruling", value: "8mm ruled" },
      { label: "Pages", value: "200 pages each" },
      { label: "Paper Weight", value: "80 gsm" },
      { label: "Size", value: "A4 (297 × 210 mm)" },
    ],
    included: ["3× A4 Ruled Notebooks"],
    related: [
      { id: "9", name: "Grid Notebook for Mathematics", category: "Notebooks", price: 8.99 },
    ],
  },
  "7": {
    id: "7",
    name: "Complete Mathematics Study Guide",
    category: "Books",
    desc: "Comprehensive mathematics reference for students",
    longDesc:
      "A complete mathematics reference guide covering algebra, geometry, trigonometry, calculus, statistics, and more. Perfect for exam revision and homework support.",
    price: 29.99,
    specs: [
      { label: "Pages", value: "520 pages" },
      { label: "Edition", value: "Latest Edition" },
      { label: "Format", value: "Softcover" },
      { label: "Level", value: "Secondary & A-level" },
    ],
    included: ["1 Study Guide"],
    related: [{ id: "5", name: "Physics Fundamentals Textbook", category: "Books", price: 39.99 }],
  },
  "8": {
    id: "8",
    name: "Classic Messenger Bag",
    category: "School Bags",
    desc: "Professional messenger bag for university students",
    longDesc:
      "A stylish and functional messenger bag with a dedicated laptop sleeve, multiple organisational pockets, and an adjustable cross-body strap. Suitable for daily commutes.",
    price: 34.99,
    specs: [
      { label: "Capacity", value: "15 litres" },
      { label: "Laptop Sleeve", value: "Up to 13 inches" },
      { label: "Material", value: "Canvas with leather trim" },
      { label: "Strap", value: "Adjustable shoulder strap" },
    ],
    included: ["1 Messenger Bag", "Removable Shoulder Pad"],
    related: [{ id: "2", name: "Premium Student Backpack", category: "School Bags", price: 49.99 }],
  },
  "9": {
    id: "9",
    name: "Grid Notebook for Mathematics",
    category: "Notebooks",
    desc: "Grid notebook for math and technical drawing",
    longDesc:
      "A high-quality grid notebook specifically designed for mathematics, physics, and technical drawing. The 5mm grid pattern is printed in light blue ink so it doesn't interfere with your drawings.",
    price: 8.99,
    specs: [
      { label: "Ruling", value: "5mm grid" },
      { label: "Pages", value: "160 pages" },
      { label: "Paper Weight", value: "90 gsm" },
      { label: "Size", value: "A4 (297 × 210 mm)" },
    ],
    included: ["1× Grid Notebook"],
    related: [{ id: "6", name: "A4 Ruled Notebook Set", category: "Notebooks", price: 12.99 }],
  },
  "10": {
    id: "10",
    name: "Digital Protractor",
    category: "Geometry & Math Tools",
    desc: "Electronic angle measurement tool",
    longDesc:
      "A precision digital protractor with a built-in LCD display that shows exact angle measurements to 0.1° accuracy. Ideal for geometry, carpentry, and technical drawing.",
    price: 24.99,
    specs: [
      { label: "Accuracy", value: "±0.1 degrees" },
      { label: "Range", value: "0–360°" },
      { label: "Display", value: "LCD digital" },
      { label: "Power", value: "1× LR44 battery" },
    ],
    included: ["1 Digital Protractor", "1 Battery", "Carrying Pouch"],
    related: [
      {
        id: "3",
        name: "Professional Geometry Set",
        category: "Geometry & Math Tools",
        price: 16.99,
      },
    ],
  },
  "11": {
    id: "11",
    name: "Premium Pen Set",
    category: "Stationery",
    desc: "Set of 10 high-quality ballpoint pens",
    longDesc:
      "A set of 10 premium ballpoint pens offering smooth, consistent ink flow. Includes 5 blue, 3 black, and 2 red pens. Comfortable grip for extended writing sessions.",
    price: 14.99,
    specs: [
      { label: "Count", value: "10 pens" },
      { label: "Tip Size", value: "0.7mm medium" },
      { label: "Ink Type", value: "Oil-based ballpoint" },
      { label: "Colors", value: "Blue, Black, Red" },
    ],
    included: ["10× Ballpoint Pens", "Reusable Pouch"],
    related: [{ id: "12", name: "Highlighter Marker Set", category: "Stationery", price: 9.99 }],
  },
  "12": {
    id: "12",
    name: "Highlighter Marker Set",
    category: "Stationery",
    desc: "6-color highlighter set for studying",
    longDesc:
      "A vibrant set of 6 chisel-tip highlighters in assorted colours. The water-based ink dries quickly, resists smearing, and is compatible with all paper types including textbooks.",
    price: 9.99,
    specs: [
      { label: "Count", value: "6 highlighters" },
      { label: "Tip", value: "Chisel tip (1–5mm)" },
      { label: "Ink", value: "Water-based, fast-drying" },
      { label: "Colors", value: "Yellow, Pink, Green, Orange, Blue, Purple" },
    ],
    included: ["6× Highlighter Markers"],
    related: [{ id: "11", name: "Premium Pen Set", category: "Stationery", price: 14.99 }],
  },
};

// ─────────────────────────────────────────────

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = PRODUCTS[id] ?? null;
  if (!product) notFound();

  const dispatch = useAppDispatch();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    for (let i = 0; i < qty; i++) {
      dispatch(
        addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          category: product.category,
        })
      );
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <section className="flex-1">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        {/* Breadcrumb */}
        <Link
          href={ROUTES.MARKETPLACE}
          className="mb-6 flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Marketplace
        </Link>

        {/* Main content */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Left — images */}
          <div>
            <div className="flex h-80 w-full items-center justify-center overflow-hidden rounded-2xl bg-blue-50">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-100">
                <ShoppingCart className="h-12 w-12 text-blue-400" />
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex h-16 w-16 cursor-pointer items-center justify-center overflow-hidden rounded-lg border-2 border-gray-100 bg-gray-50 hover:border-blue-400"
                >
                  <ShoppingCart className="h-7 w-7 text-gray-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Right — details */}
          <div>
            <p className="mb-1 text-xs font-medium text-blue-600">{product.category}</p>
            <h1 className="mb-1 text-2xl font-extrabold text-gray-900">{product.name}</h1>
            <p className="mb-4 text-sm text-gray-500">{product.desc}</p>
            <div className="mb-1 text-3xl font-extrabold text-gray-900">
              ${product.price.toFixed(2)}
            </div>
            <p className="mb-4 flex items-center gap-1.5 text-sm font-medium text-green-600">
              <Check className="h-4 w-4" /> In Stock
            </p>
            <div className="mb-4 border-t border-gray-100 pt-4">
              <p className="mb-2 text-sm font-semibold text-gray-800">Description</p>
              <p className="text-sm text-gray-500">{product.longDesc}</p>
            </div>
            <div className="mb-4">
              <p className="mb-2 text-sm font-semibold text-gray-800">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50"
                >
                  −
                </button>
                <span className="w-6 text-center text-sm font-semibold">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>
            <div className="mb-3 flex gap-3">
              <button
                onClick={handleAddToCart}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              >
                <ShoppingCart className="h-4 w-4" />
                {added ? "Added!" : "Add to Cart"}
              </button>
              <button className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:text-red-500">
                <Heart className="h-5 w-5" />
              </button>
            </div>
            <button className="w-full rounded-lg border border-gray-200 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50">
              Buy Now
            </button>
            <div className="mt-4 grid grid-cols-3 gap-3 border-t border-gray-100 pt-4 text-center">
              {[
                { icon: Truck, label: "Free Shipping" },
                { icon: ShieldCheck, label: "Secure Payment" },
                { icon: RefreshCw, label: "Easy Returns" },
              ].map((b) => (
                <div key={b.label} className="flex flex-col items-center gap-1">
                  <b.icon className="h-5 w-5 text-gray-400" />
                  <span className="text-[10px] text-gray-500">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specs + Included */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-4 font-bold text-gray-900">Specifications</h2>
            <table className="w-full">
              <tbody>
                {product.specs.map((s) => (
                  <tr key={s.label} className="border-b border-gray-50">
                    <td className="py-2.5 text-xs text-gray-500">{s.label}</td>
                    <td className="py-2.5 text-right text-xs font-medium text-gray-800">
                      {s.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-4 font-bold text-gray-900">What&apos;s Included</h2>
            <ul className="flex flex-col gap-2">
              {product.included.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <Check className="h-4 w-4 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Shipping info */}
        <div className="mt-6 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 font-bold text-gray-900">Shipping Information</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                title: "Delivery Time",
                body: "Standard delivery within 3–5 business days. Express shipping available at checkout.",
              },
              {
                title: "Shipping Cost",
                body: "Free shipping on all orders over $50. Standard shipping $5.99 for orders under $50.",
              },
              {
                title: "Return Policy",
                body: "30-day return policy for unopened items in original packaging. Full refund guaranteed.",
              },
            ].map((info) => (
              <div key={info.title}>
                <p className="mb-1 text-sm font-semibold text-gray-800">{info.title}</p>
                <p className="text-xs text-gray-500">{info.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        {product.related.length > 0 && (
          <div className="mt-10">
            <h2 className="mb-5 text-xl font-bold text-gray-900">Related Products</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {product.related.map((r) => (
                <Link
                  key={r.id}
                  href={`${ROUTES.MARKETPLACE}/${r.id}`}
                  className="flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md"
                >
                  <div className="flex h-32 items-center justify-center bg-blue-50">
                    <ShoppingCart className="h-10 w-10 text-blue-300" />
                  </div>
                  <div className="p-3">
                    <p className="text-[10px] text-blue-600">{r.category}</p>
                    <p className="mt-0.5 text-xs font-semibold text-gray-900">{r.name}</p>
                    <p className="mt-1 text-sm font-bold text-gray-900">${r.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
