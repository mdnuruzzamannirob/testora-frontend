import PageHero from "@/components/common/PageHero";
import { Mail, MapPin, Phone } from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+01568125",
  },
  {
    icon: Mail,
    title: "Email us",
    value: "example@gmail.com",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Street 24, Kosovo, Serbia",
  },
];

const faqs = [
  {
    question: "How do I buy a package on Testora?",
    answer:
      "Go to the Packages page, choose the package that fits your exam, and complete checkout. After payment, the package is available in your account.",
  },
  {
    question: "Does the same account work on both website and mobile app?",
    answer:
      "Yes. Your Testora account is synchronized across web and mobile, so your progress and purchases stay connected.",
  },
  {
    question: "Are marketplace products physical or digital?",
    answer:
      "Marketplace listings can be digital or physical depending on the seller. Each product clearly states its type before purchase.",
  },
  {
    question: "How can I contact Testora support?",
    answer:
      "Use the contact form on this page or email support directly. Our team responds as quickly as possible during support hours.",
  },
  {
    question: "Where can I use my purchased packages?",
    answer:
      "Purchased packages are available anywhere you are logged in, including web and mobile apps.",
  },
  {
    question: "How do I track my marketplace orders?",
    answer:
      "You can track your orders from your profile orders section. Shipping updates are shown there for physical products.",
  },
];

export default function ContactPage() {
  return (
    <section className="flex-1 bg-slate-50">
      <PageHero
        title="Contact & FAQs"
        description="We're here to help. Whether you have questions about our packages, need technical support, or want to learn more about Testora, our team is ready to assist you."
        className="from-primary/8"
      />

      <div className="app-container space-y-8 py-10">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-8">
          <div className="mb-7 text-center">
            <p className="text-primary text-lg">Find us</p>
            <h2 className="text-4xl font-bold text-slate-900">Contact us</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm transition outline-none focus:border-blue-300"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm transition outline-none focus:border-blue-300"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="How can we help you?"
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm transition outline-none focus:border-blue-300"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={6}
                  placeholder="Please provide as much detail as possible..."
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm transition outline-none focus:border-blue-300"
                />
              </div>

              <button
                type="button"
                className="bg-primary hover:bg-primary/90 inline-flex rounded-lg px-6 py-2.5 text-sm font-medium text-white transition"
              >
                Send Message
              </button>
            </form>

            <div className="space-y-6 lg:pl-6">
              {contactDetails.map(({ icon: Icon, title, value }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="mt-0.5 rounded-full bg-slate-100 p-2 text-slate-700">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>
                    <p className="mt-1 text-lg text-slate-500">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="faq" className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-8">
          <h2 className="mb-1 text-center text-4xl font-bold text-slate-900">FAQs</h2>
          <p className="mb-6 text-lg text-slate-600">Frequently Asked Questions</p>

          <div className="space-y-3">
            {faqs.map((item, index) => (
              <details
                key={item.question}
                open={index === 0}
                className="rounded-xl border border-gray-200"
              >
                <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-slate-800">
                  {item.question}
                </summary>
                <p className="border-t border-gray-200 px-4 py-3 text-sm leading-relaxed text-slate-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
