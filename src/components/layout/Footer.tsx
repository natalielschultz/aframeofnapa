import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-parchment">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Top section */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Logo & tagline */}
          <div>
            <Link href="/" className="inline-block">
              <Logo className="h-8 w-auto text-parchment" />
            </Link>
            <p className="mt-3 text-sm text-text-muted">
              Mount Veeder &middot; Napa Valley &middot; California
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-text-muted">
              Explore
            </h3>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-parchment/80 transition-colors duration-200 hover:text-sage"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/remote-work-retreat-napa-valley"
                className="text-sm text-parchment/80 transition-colors duration-200 hover:text-sage"
              >
                Remote Work
              </Link>
              <Link
                href="/blog"
                className="text-sm text-parchment/80 transition-colors duration-200 hover:text-sage"
              >
                Journal
              </Link>
              <Link
                href="/press"
                className="text-sm text-parchment/80 transition-colors duration-200 hover:text-sage"
              >
                Press
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-text-muted">
              Contact
            </h3>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={`mailto:${SITE.email}`}
                className="text-parchment/80 transition-colors duration-200 hover:text-sage"
              >
                {SITE.email}
              </a>
              <a
                href={`https://instagram.com/${SITE.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-parchment/80 transition-colors duration-200 hover:text-sage"
              >
                @{SITE.instagram}
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 flex flex-col gap-4 border-t border-parchment/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-text-muted">
            &copy; {currentYear} {SITE.name}. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
            <Link
              href="/privacy-policy"
              className="text-text-muted transition-colors duration-200 hover:text-sage"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-text-muted transition-colors duration-200 hover:text-sage"
            >
              Terms &amp; Conditions
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
