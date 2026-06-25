import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";
import anand from "@/assets/anand.jpg";
import { LINKS, PROFILE } from "@/data/links";

const TITLES = ["Tech with Mr Anand", "Learn. Build. Grow.", "Tech • AI • Career"];

function useTypewriter(words: string[], speed = 70, pause = 1600) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setI((p) => p + 1);
      return;
    }
    const t = setTimeout(
      () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
      deleting ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [text, deleting, i, words, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(TITLES);

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center px-4 pt-28 pb-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative animate-float"
        >
          <span className="absolute inset-0 rounded-full border-2 border-yellow animate-pulse-ring" />
          <span className="absolute -inset-3 rounded-full border border-yellow/40 animate-pulse-ring" style={{ animationDelay: "0.8s" }} />
          <div className="relative rounded-full p-[3px] glow-yellow"
            style={{ background: "conic-gradient(from 0deg, var(--brand-yellow), transparent 30%, var(--brand-yellow) 60%, transparent 90%, var(--brand-yellow))" }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{ background: "conic-gradient(from 0deg, var(--brand-yellow), transparent 35%, var(--brand-yellow-glow) 65%, transparent)" }}
            />
            <div className="relative h-36 w-36 overflow-hidden rounded-full border-2 border-background sm:h-44 sm:w-44">
              <img src={anand} alt={PROFILE.name} width={768} height={768} className="h-full w-full object-cover" />
            </div>
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-yellow" />
          <span className="text-muted-foreground">Available for collabs</span>
        </motion.div>

        {/* Title */}
        <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
          <span className="text-glow bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
            {typed}
          </span>
          <span className="ml-1 inline-block w-[3px] translate-y-1 bg-yellow animate-blink" style={{ height: "0.85em" }} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-5 text-sm font-medium uppercase tracking-[0.3em] text-yellow"
        >
          {PROFILE.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          {PROFILE.bio}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <CTAButton href={"https://www.youtube.com/@mr_anandtechintelugu"} primary icon={<FaYoutube />}>Subscribe on YouTube</CTAButton>
          <CTAButton href={LINKS.instagram} icon={<FaInstagram />}>Follow on Instagram</CTAButton>
          <CTAButton href={"chat.whatsapp.com/JV0ATdAohDG9EyZTJHwC9J?mode=wwt"} icon={<FaWhatsapp />}>Join WhatsApp</CTAButton>
        </motion.div>
      </div>
    </section>
  );
}

function CTAButton({
  href, children, icon, primary,
}: { href: string; children: React.ReactNode; icon: React.ReactNode; primary?: boolean }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-xl px-5 py-3 text-sm font-semibold transition-shadow ${
        primary
          ? "bg-yellow text-primary-foreground glow-yellow"
          : "glass text-foreground hover:bg-white/10"
      }`}
    >
      <span className="text-base">{icon}</span>
      <span>{children}</span>
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    </motion.a>
  );
}
