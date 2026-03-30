import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animation/FadeIn";
import InquiryForm from "@/components/sections/InquiryForm";
import FAQ from "@/components/sections/FAQ";
import { PRICING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Availability & Monthly Rates | A-Frame of Napa",
};

const calendarMonths = [
  { month: "April 2026", status: "Available" },
  { month: "May 2026", status: "Booked" },
  { month: "June 2026", status: "Inquire" },
  { month: "July 2026", status: "Available" },
  { month: "August 2026", status: "Booked" },
  { month: "September 2026", status: "Booked" },
  { month: "October 2026", status: "Inquire" },
  { month: "November 2026", status: "Available" },
  { month: "December 2026", status: "Available" },
  { month: "January 2027", status: "Available" },
  { month: "February 2027", status: "Inquire" },
  { month: "March 2027", status: "Available" },
];

const steps = [
  {
    number: "01",
    title: "Submit Your Inquiry",
    description:
      "Use the form below to share your preferred dates, group size, and anything else you'd like us to know. There's no commitment at this stage — just a conversation starter.",
  },
  {
    number: "02",
    title: "A Personal Call with Your Host",
    description:
      "Within 24 hours, your host will reach out to discuss your stay in detail — answering questions, sharing local recommendations, and making sure the A-Frame is the right fit for your trip.",
  },
  {
    number: "03",
    title: "Confirm & Book",
    description:
      "Once everything feels right, you'll receive a booking agreement and invoice. A 50% deposit secures your dates, with the balance due 30 days before check-in.",
  },
];

// Determine current season based on month (March 2026 context)
function getCurrentSeasonName(): string {
  const month = new Date().getMonth();
  return month >= 5 && month <= 10 ? "Peak Season" : "Off-Peak";
}

export default function AvailabilityPage() {
  const currentSeason = getCurrentSeasonName();

  return (
    <>
      <Hero
        image="/images/living-room-full-chandelier.jpg"
        title="Availability & Rates"
        subtitle="Extended stays on Mount Veeder, priced by season."
      />

      {/* Seasonal Rate Table */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading
              title="Seasonal Rates"
              subtitle="Monthly pricing reflects the rhythm of Napa Valley — from the quiet beauty of winter to the electric energy of harvest season."
            />
          </FadeIn>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRICING.seasons.map((season, i) => {
              const isCurrent = season.name === currentSeason;
              return (
                <FadeIn key={season.name} delay={i * 0.1}>
                  <div
                    className={`relative border p-8 md:p-10 flex flex-col gap-4 h-full ${
                      isCurrent
                        ? "border-brass bg-white"
                        : "border-charcoal/10 bg-white"
                    }`}
                  >
                    {isCurrent && (
                      <span className="absolute top-0 right-0 bg-brass text-ink font-sans text-[10px] uppercase tracking-[0.2em] px-4 py-1.5">
                        Current Season
                      </span>
                    )}
                    <h3 className="font-serif text-xl md:text-2xl text-ink">
                      {season.name}
                    </h3>
                    <p className="font-sans text-xs uppercase tracking-[0.15em] text-text-muted">
                      {season.months}
                    </p>
                    <p className="font-serif text-3xl md:text-4xl text-brass leading-tight">
                      {season.range}
                    </p>
                    <div className="bg-brass h-px w-12" aria-hidden="true" />
                    <p className="font-sans text-sm text-text-muted leading-relaxed">
                      {season.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
          <FadeIn delay={0.4}>
            <p className="mt-8 font-sans text-sm text-text-muted text-center">
              All rates are per calendar month. Pricing varies within each range
              based on specific dates and length of stay.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <FadeIn className="lg:col-span-5">
              <SectionHeading
                title="What's Included"
                subtitle="Every monthly stay comes with the essentials — and then some."
                align="left"
              />
            </FadeIn>
            <FadeIn delay={0.2} className="lg:col-span-7">
              <ul className="space-y-5">
                {PRICING.includes.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="text-brass mt-1 text-lg leading-none">
                      &mdash;
                    </span>
                    <span className="font-sans text-base text-text leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Availability Calendar Placeholder */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading
              title="Availability"
              subtitle="A rolling 12-month view. Inquire for exact dates and holds."
            />
          </FadeIn>
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {calendarMonths.map((item) => {
              const statusStyles = {
                Available: "border-brass/40 bg-white",
                Booked: "border-charcoal/10 bg-parchment/50",
                Inquire: "border-charcoal/20 bg-white",
              };
              const badgeStyles = {
                Available:
                  "bg-brass/10 text-brass",
                Booked:
                  "bg-charcoal/5 text-text-muted",
                Inquire:
                  "bg-surface text-charcoal",
              };
              return (
                <FadeIn key={item.month}>
                  <div
                    className={`border p-5 flex flex-col items-center gap-3 text-center ${
                      statusStyles[item.status as keyof typeof statusStyles]
                    }`}
                  >
                    <span className="font-sans text-sm text-ink font-medium">
                      {item.month}
                    </span>
                    <span
                      className={`font-sans text-[10px] uppercase tracking-[0.15em] px-3 py-1 ${
                        badgeStyles[item.status as keyof typeof badgeStyles]
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <div id="inquiry">
        <SectionHeading title="Inquire About Your Stay" />
        <InquiryForm />
      </div>

      {/* How It Works */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading
              title="How It Works"
              subtitle="Booking directly is simple, personal, and always pressure-free."
            />
          </FadeIn>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.15}>
                <div className="flex flex-col gap-4">
                  <span className="font-serif text-5xl text-brass/20">
                    {step.number}
                  </span>
                  <h3 className="font-serif text-xl text-ink">{step.title}</h3>
                  <p className="font-sans text-sm text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <FAQ />
    </>
  );
}
