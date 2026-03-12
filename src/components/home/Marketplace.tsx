import { BookOpen } from "lucide-react";

const products = [
  { name: "Academic Textbook Collection", price: "€29.99", category: "Books" },
  { name: "Scientific Calculator", price: "€14.99", category: "Tools" },
  { name: "Premium Study Backpack", price: "€49.00", category: "Bags" },
  { name: "Engineering Tool Set", price: "€34.99", category: "Tools" },
  { name: "Premium Notebooks Set", price: "€14.66", category: "Stationery" },
];

const gradients = [
  "from-amber-100 to-orange-200",
  "from-teal-100 to-cyan-200",
  "from-slate-200 to-gray-300",
  "from-blue-100 to-indigo-200",
  "from-gray-100 to-slate-200",
];

function Marketplace() {
  return (
    <section className="bg-gray-50/70 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Marketplace Preview</h2>
          <p className="mt-2 text-sm text-gray-500">
            Browse our selection of physical study materials and tools
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {products.map((p, i) => (
            <div
              key={p.name}
              className="flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm"
            >
              <div
                className={`flex h-36 items-center justify-center bg-linear-to-br ${gradients[i]}`}
              >
                <BookOpen className="h-12 w-12 text-gray-400/60" />
              </div>
              <div className="flex flex-1 flex-col p-3">
                <p className="mb-1 text-xs leading-tight font-semibold text-gray-800">{p.name}</p>
                <p className="mb-2 text-xs text-gray-400">{p.category}</p>
                <p className="mb-2 text-sm font-bold text-gray-900">{p.price}</p>
                <button className="mt-auto flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 py-1.5 text-xs font-medium text-gray-700 transition hover:bg-gray-50">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Marketplace;
