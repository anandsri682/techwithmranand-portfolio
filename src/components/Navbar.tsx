import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Links", href: "#links" },
  { label: "Content", href: "#content" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-3 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6 ${
        scrolled ? "glass-strong mx-3 sm:mx-auto" : "bg-transparent mx-3 sm:mx-auto"
      }`}
    >
      <a href="#home" className="flex items-center gap-2 font-display font-bold">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-yellow text-primary-foreground glow-yellow">
          A
        </span>
        <span className="hidden text-sm sm:inline">Tech with Mr Anand</span>
      </a>

      <nav className="hidden items-center gap-1 md:flex">
        {NAV.map((n) => (
          <a
            key={n.href}
            href={n.href}
            className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
          >
            {n.label}
          </a>
        ))}
      </nav>

      <a
        href="#contact"
        className="hidden rounded-xl bg-yellow px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 md:inline-block"
      >
        Let's Talk
      </a>

      <button
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
        className="grid h-10 w-10 place-items-center rounded-xl glass md:hidden"
      >
        <div className="flex h-4 w-5 flex-col justify-between">
          <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }} className="h-0.5 w-full bg-foreground" />
          <motion.span animate={{ opacity: open ? 0 : 1 }} className="h-0.5 w-full bg-foreground" />
          <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }} className="h-0.5 w-full bg-foreground" />
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass-strong absolute left-0 right-0 top-full mt-2 flex flex-col gap-1 rounded-2xl p-3 md:hidden"
          >
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
