import { Check } from "lucide-react";

function Packages() {
  const packages = [
    {
      name: "Semimatura Package",
      features: [
        "Semimatura subject coverage",
        "Past exam questions",
        "Full exam tests",
        "Detailed analytics",
        "Performance tracking",
      ],
      price: null,
      featured: false,
    },
    {
      name: "Matura Package",
      features: [
        "Complete Matura subject coverage",
        "Full exam simulations",
        "Detailed analytics",
        "Performance tracking",
      ],
      price: null,
      featured: false,
    },
    {
      name: "Entrance Exam Package",
      features: [
        "Preparation for top selected universities",
        "Faculty specific content",
        "Specialized practice tests",
        "Targeted preparation",
      ],
      price: null,
      featured: false,
    },
    {
      name: "Full Access Package",
      features: [
        "Complete access to all categories",
        "Semimatura, Matura & Entrance Exams",
        "All practice tests",
        "Priority analytics support",
      ],
      badge: "POPULAR",
      note: "Does not include Architecture or electives exquisite",
      price: null,
      featured: true,
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Choose Your Package</h2>
          <p className="mt-2 text-sm text-gray-500">
            Select the package that best fits your exam preparation needs
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-2xl border p-5 shadow-sm transition hover:shadow-md ${
                pkg.featured
                  ? "border-blue-500 bg-blue-600 text-white shadow-blue-200"
                  : "border-gray-100 bg-white"
              }`}
            >
              {pkg.featured && "badge" in pkg && pkg.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-3 py-0.5 text-xs font-bold text-gray-900">
                  {pkg.badge}
                </span>
              )}
              <h3
                className={`mb-4 text-base font-bold ${pkg.featured ? "text-white" : "text-gray-900"}`}
              >
                {pkg.name}
              </h3>
              <ul className="mb-5 flex flex-1 flex-col gap-2">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${pkg.featured ? "text-blue-200" : "text-blue-500"}`}
                    />
                    <span className={pkg.featured ? "text-blue-100" : "text-gray-600"}>{f}</span>
                  </li>
                ))}
              </ul>
              {"note" in pkg && pkg.note && (
                <p className="mb-3 text-xs text-blue-200">{pkg.note}</p>
              )}
              <button
                className={`w-full rounded-lg py-2.5 text-sm font-semibold transition ${
                  pkg.featured
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "border border-blue-500 text-blue-600 hover:bg-blue-50"
                }`}
              >
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Packages;
