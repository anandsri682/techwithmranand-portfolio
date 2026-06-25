import { motion } from "framer-motion";
import {
  FaYoutube, FaInstagram, FaLinkedin, FaFacebook, FaXTwitter,
  FaWhatsapp, FaTelegram, FaGithub, FaGlobe, FaEnvelope,
} from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { LINKS } from "@/data/links";
import { SectionHeading } from "./SectionHeading";

const SOCIALS = [
  { name: "YouTube", desc: "Tutorials, AI & career videos", url: LINKS.youtube, Icon: FaYoutube, accent: "#FF0033" },
  { name: "Instagram", desc: "Daily reels & updates", url: LINKS.instagram, Icon: FaInstagram, accent: "#E1306C" },
  { name: "LinkedIn", desc: "Professional network", url: LINKS.linkedin, Icon: FaLinkedin, accent: "#0A66C2" },
  { name: "Facebook", desc: "Community & live sessions", url: LINKS.facebook, Icon: FaFacebook, accent: "#1877F2" },
  { name: "X (Twitter)", desc: "Quick thoughts & threads", url: LINKS.twitter, Icon: FaXTwitter, accent: "#ffffff" },
  { name: "WhatsApp", desc: "Join the community", url: LINKS.whatsapp, Icon: FaWhatsapp, accent: "#25D366" },
  { name: "Telegram", desc: "Resources & jobs channel", url: LINKS.telegram, Icon: FaTelegram, accent: "#229ED9" },
  { name: "GitHub", desc: "Code, projects & demos", url: LINKS.github, Icon: FaGithub, accent: "#ffffff" },
  { name: "Portfolio", desc: "My personal website", url: LINKS.portfolio, Icon: FaGlobe, accent: "var(--brand-yellow)" },
  { name: "Email", desc: "Business enquiries", url: LINKS.email, Icon: FaEnvelope, accent: "var(--brand-yellow)" },
];

export function SocialLinks() {
  return (
    <section id="links" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="All my links" title="Connect with me" subtitle="One tap to every platform I create on." />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SOCIALS.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl glass p-5 transition-shadow hover:shadow-[0_20px_50px_-20px_rgba(255,214,0,0.35)]"
            >
              <div
                className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                style={{ background: s.accent }}
              />
              <div className="relative flex items-center gap-4">
                <div
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-xl"
                  style={{ background: `color-mix(in oklab, ${s.accent} 18%, transparent)`, color: s.accent }}
                >
                  <s.Icon />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 font-semibold">
                    {s.name}
                  </div>
                  <div className="truncate text-xs text-muted-foreground">{s.desc}</div>
                </div>
                <FiArrowUpRight className="shrink-0 text-lg text-muted-foreground transition-all group-hover:rotate-45 group-hover:text-yellow" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
