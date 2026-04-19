"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { NAV_LINKS, DISCOVER_LINKS, SITE } from "@/lib/constants";
import Logo from "@/components/ui/Logo";
import { trackEvent } from "@/lib/analytics";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [discoverOpen, setDiscoverOpen] = useState(false);
  const discoverRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const headerBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(245, 242, 237, 0)", "rgba(245, 242, 237, 1)"]
  );

  const headerShadow = useTransform(
    scrollY,
    [0, 80],
    ["0 0 0 0 rgba(0,0,0,0)", "0 1px 3px 0 rgba(0,0,0,0.06)"]
  );

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close Discover dropdown on outside click or Escape
  useEffect(() => {
    if (!discoverOpen) return;
    function handleClick(e: MouseEvent) {
      if (discoverRef.current && !discoverRef.current.contains(e.target as Node)) {
        setDiscoverOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setDiscoverOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [discoverOpen]);

  return (
    <>
      <motion.header
        style={{ backgroundColor: headerBg, boxShadow: headerShadow }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo className="h-8 w-auto md:h-10 text-ink" />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-serif text-xs uppercase tracking-[1.8px] text-charcoal transition-colors duration-200 hover:text-ink"
              >
                {link.label}
              </Link>
            ))}

            {/* Discover dropdown */}
            <div className="relative" ref={discoverRef}>
              <button
                type="button"
                onClick={() => setDiscoverOpen((v) => !v)}
                onMouseEnter={() => setDiscoverOpen(true)}
                aria-haspopup="menu"
                aria-expanded={discoverOpen}
                className="font-serif flex items-center gap-1.5 text-xs uppercase tracking-[1.8px] text-charcoal transition-colors duration-200 hover:text-ink"
              >
                Discover
                <motion.span
                  animate={{ rotate: discoverOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-[10px] leading-none"
                  aria-hidden="true"
                >
                  &#9662;
                </motion.span>
              </button>
              <AnimatePresence>
                {discoverOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    onMouseLeave={() => setDiscoverOpen(false)}
                    role="menu"
                    className="absolute right-0 top-full mt-3 min-w-[14rem] bg-parchment py-2 shadow-lg ring-1 ring-ink/5"
                  >
                    {DISCOVER_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        role="menuitem"
                        onClick={() => setDiscoverOpen(false)}
                        className="block px-5 py-2.5 font-serif text-xs uppercase tracking-[1.8px] text-charcoal transition-colors duration-200 hover:bg-ink/5 hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <Link
              href="/availability#inquiry"
              onClick={() => trackEvent("cta_click", { location: "navbar_desktop" })}
              className="font-serif bg-brass px-5 py-2.5 text-xs uppercase tracking-[2.5px] text-ink transition-colors duration-200 hover:bg-brass-light"
            >
              Inquire Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-ink"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-6 bg-ink"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-ink"
              transition={{ duration: 0.3 }}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-parchment lg:hidden"
          >
            <nav className="flex flex-col items-center gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-serif text-2xl uppercase tracking-[1.8px] text-ink"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: NAV_LINKS.length * 0.05 }}
                className="w-16 h-px bg-brass"
                aria-hidden="true"
              />

              {DISCOVER_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: (NAV_LINKS.length + 1 + i) * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-serif text-base uppercase tracking-[1.8px] text-charcoal"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: (NAV_LINKS.length + DISCOVER_LINKS.length + 2) * 0.05 }}
              >
                <Link
                  href="/availability#inquiry"
                  onClick={() => {
                    trackEvent("cta_click", { location: "navbar_mobile" });
                    setMobileOpen(false);
                  }}
                  className="font-serif mt-4 inline-block bg-brass px-8 py-3 text-xs uppercase tracking-[2.5px] text-ink transition-colors duration-200 hover:bg-brass-light"
                >
                  Inquire Now
                </Link>
              </motion.div>
            </nav>

            <p className="absolute bottom-12 text-sm text-text-muted">
              {SITE.tagline}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
