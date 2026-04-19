import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Summit House Napa",
  description: "How Summit House Napa collects, uses, and protects your information.",
  alternates: { canonical: "/privacy-policy" },
  robots: "noindex, follow",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 md:px-12">
        <h1 className="font-serif font-extralight uppercase tracking-[4px] text-[32px] md:text-5xl text-ink mb-4">
          Privacy Policy
        </h1>
        <p className="font-sans text-sm uppercase tracking-[0.2em] text-brass mb-8">
          Effective April 18, 2026
        </p>
        <div className="space-y-6 font-sans text-base text-text leading-relaxed">
          <p>
            This policy explains what we — Summit House Napa — do with the
            information you share with us at summithousenapa.com (the &ldquo;Site&rdquo;).
          </p>

          <h2 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink pt-4">What we collect</h2>
          <p>
            When you contact us or book a stay, we collect what you give us:
            your name, email, phone, dates, and whatever you write in your
            message. If you book, our payment processor collects what&apos;s
            needed to charge the deposit and balance. When you visit the Site,
            our hosting and analytics providers log standard technical data
            (IP address, browser, pages viewed) so the Site works and we can
            measure traffic. The Site is intended for adults; we don&apos;t
            knowingly collect information from children under 13, and will
            delete it if we learn we have.
          </p>

          <h2 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink pt-4">What we do with it</h2>
          <p>
            We use your information to respond to your inquiry, run your
            reservation, operate the Site, and meet our tax and legal
            obligations. We don&apos;t sell it, we don&apos;t share it for
            advertising, and we don&apos;t send marketing emails unless you ask
            us to.
          </p>

          <h2 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink pt-4">Who we share it with</h2>
          <p>
            Only the service providers we need to run the business — our
            website host, email provider, form tool, and payment processor —
            and only for the work they do for us. We may also disclose
            information when required by law, or as part of a sale or
            reorganization of the business. A current list of providers is
            available on request.
          </p>

          <h2 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink pt-4">How long we keep it</h2>
          <p>
            Only as long as we need it — through your inquiry and stay, plus a
            reasonable period afterward for tax and accounting records. Then
            we delete or de-identify it.
          </p>

          <h2 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink pt-4">Security</h2>
          <p>
            We use reasonable safeguards. No system is perfectly secure.
          </p>

          <h2 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink pt-4">Your California rights</h2>
          <p>
            If you&apos;re a California resident, you can ask us to tell you
            what we have, delete it, correct it, opt out of sale or sharing
            (we don&apos;t do either), or limit how we use sensitive
            information. Email{" "}
            <a
              href="mailto:stay@summithousenapa.com"
              className="text-brass hover:text-ink transition-colors"
            >
              stay@summithousenapa.com
            </a>{" "}
            and include enough detail for us to verify who you are. We&apos;ll
            respond within the time the law requires.
          </p>

          <h2 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink pt-4">Changes</h2>
          <p>
            If we change this policy, we&apos;ll update the effective date
            above.
          </p>

          <h2 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink pt-4">Contact</h2>
          <p>
            <a
              href="mailto:stay@summithousenapa.com"
              className="text-brass hover:text-ink transition-colors"
            >
              stay@summithousenapa.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
