import PageHero from "@/components/common/PageHero";

const sections = [
  {
    title: "Introduction",
    paragraphs: [
      "Welcome to Testora, an educational platform providing online learning services, mobile applications, and a marketplace for educational resources.",
      "By accessing or using Testora, you agree to these Terms. If you disagree with any part of these Terms, please do not use our services.",
    ],
  },
  {
    title: "Acceptance of Terms",
    paragraphs: [
      "By creating an account, accessing our website, or using our mobile applications, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.",
    ],
  },
  {
    title: "Use of the Platform",
    paragraphs: [
      "Testora grants you a limited, non-exclusive, non-transferable license to access and use our platform for personal educational purposes.",
      "You may not use our platform for illegal or unauthorized purposes, or in any way that may damage, disable, or impair our services.",
    ],
  },
  {
    title: "Website and Mobile App Usage",
    bullets: [
      "You must use a supported browser or device",
      "You are responsible for maintaining internet connectivity",
      "You must keep your mobile app updated to the latest version",
      "Platform features may vary between web and mobile versions",
    ],
  },
  {
    title: "Accounts and Registration",
    bullets: [
      "You must provide accurate and complete information",
      "You are responsible for maintaining account security",
      "You must notify us immediately of unauthorized account use",
      "You may not share your credentials with others",
    ],
  },
  {
    title: "Packages and Mobile App Access",
    bullets: [
      "Access starts after your purchase is confirmed",
      "Package duration and included features depend on your selected package",
      "Subscriptions may auto-renew unless canceled before renewal",
      "Refunds are subject to our refund policy",
    ],
  },
  {
    title: "Marketplace Purchases",
    bullets: [
      "Transactions are between buyers and sellers",
      "Sellers are responsible for product quality and delivery",
      "Disputes should first be resolved with the seller",
      "All sales are subject to seller-specific terms and conditions",
    ],
  },
  {
    title: "User Responsibilities",
    bullets: [
      "Provide accurate and truthful information",
      "Respect intellectual property rights",
      "Maintain appropriate behavior in platform interactions",
      "Report violations or security issues",
    ],
  },
  {
    title: "Prohibited Use",
    bullets: [
      "Violating laws or regulations",
      "Distributing malware or harmful code",
      "Attempting unauthorized access to systems or data",
      "Posting false or misleading information",
    ],
  },
  {
    title: "Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, Testora and its affiliates shall not be liable for indirect, incidental, special, or consequential damages.",
      "Our total liability shall not exceed the amount you paid to Testora in the twelve months preceding the claim.",
    ],
  },
  {
    title: "Termination or Suspension",
    paragraphs: [
      "We may suspend or terminate access to Testora for violations of these Terms, fraudulent activities, or abuse of our services.",
    ],
  },
  {
    title: "Changes to the Terms",
    paragraphs: [
      "We may update these Terms from time to time. Material changes will be posted on this page with the updated effective date.",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <section className="flex-1 bg-slate-50">
      <PageHero
        title="Terms of Service"
        description="Please read these terms carefully before using Testora."
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
              <span className="font-semibold text-slate-800">Email:</span> legal@testora.com
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
