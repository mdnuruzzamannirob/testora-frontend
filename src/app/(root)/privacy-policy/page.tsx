import PageHero from "@/components/common/PageHero";

const sections = [
  {
    title: "Introduction",
    paragraphs: [
      "Welcome to Testora. We are committed to protecting your privacy and safeguarding your personal information.",
      "This Privacy Policy explains how we collect, use, and protect your data when you use our website, mobile applications, and marketplace services.",
    ],
  },
  {
    title: "Information We Collect",
    bullets: [
      "Personal identification information (name, email, phone)",
      "Account credentials and authentication data",
      "Educational progress and usage data",
      "Payment and billing information",
      "Customer support communications",
    ],
  },
  {
    title: "How We Use Your Information",
    bullets: [
      "To provide and maintain our educational services",
      "To process payments and manage your account",
      "To send service updates and educational notifications",
      "To improve features and user experience",
      "To comply with legal obligations",
    ],
  },
  {
    title: "Account and Login Data",
    paragraphs: [
      "When you create an account, we securely store login information such as email and encrypted password.",
      "You are responsible for maintaining the confidentiality of your account credentials.",
    ],
  },
  {
    title: "Package and Purchase Information",
    bullets: [
      "Payment method details processed by trusted payment partners",
      "Billing address and purchase records",
      "Subscription status and renewal dates",
    ],
  },
  {
    title: "Marketplace and Order Information",
    bullets: [
      "Shipping and delivery details",
      "Order and transaction information",
      "Buyer and seller communication related to orders",
      "Tracking and fulfillment status",
    ],
  },
  {
    title: "Cookies and Analytics",
    bullets: [
      "Essential cookies for platform functionality",
      "Performance cookies to improve service quality",
      "Preference cookies to remember settings",
      "Analytics tools to understand platform usage",
    ],
  },
  {
    title: "Data Sharing and Third Parties",
    bullets: [
      "Service providers who help operate our platform",
      "Payment and infrastructure partners",
      "Legal authorities when required by law",
      "Educational partners for collaborative programs",
    ],
  },
  {
    title: "Data Security",
    bullets: [
      "Encryption of data in transit and at rest",
      "Access controls and authentication mechanisms",
      "Regular security reviews and monitoring",
      "Secure storage and backup procedures",
    ],
  },
  {
    title: "Your Rights and Choices",
    bullets: [
      "Access and review your personal data",
      "Request correction of inaccurate information",
      "Request deletion where applicable",
      "Withdraw consent and manage communication preferences",
    ],
  },
  {
    title: "Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy periodically to reflect legal or operational changes.",
      "The updated version will be posted on this page and your continued use means acceptance of those changes.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="flex-1 bg-slate-50">
      <PageHero
        title="Privacy Policy"
        description="Learn how Testora collects, uses, and protects your information."
        className="from-primary/8"
      />

      <div className="app-container py-10">
        <article className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-8">
          <div className="space-y-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="mb-3 text-3xl font-semibold text-slate-900">{section.title}</h2>

                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mb-3 text-sm leading-relaxed text-slate-600">
                    {paragraph}
                  </p>
                ))}

                {!!section.bullets?.length && (
                  <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-600">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <section className="mt-8 rounded-xl border border-gray-200 bg-slate-50 p-4 sm:p-5">
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">Contact Information</h2>
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-slate-800">Email:</span> privacy@testora.com
            </p>
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-slate-800">Support:</span> support@testora.com
            </p>
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-slate-800">Address:</span> Testora Legal
              Department, 123 Education Street, Suite 400, San Francisco, CA 94105
            </p>
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-slate-800">Phone:</span> +1 (555) 123-4567
            </p>
          </section>
        </article>
      </div>
    </section>
  );
}
