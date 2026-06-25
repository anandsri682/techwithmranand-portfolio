import { motion } from "framer-motion";
import { useState } from "react";
import { FiCopy, FiCheck, FiMail } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaHandshake } from "react-icons/fa6";
import { LINKS, PROFILE } from "@/data/links";
import { SectionHeading } from "./SectionHeading";
import { toast } from "sonner";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    toast.success("Email copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const items = [
    { Icon: FiMail, label: "Business Email", value: PROFILE.email, href: LINKS.email },
    { Icon: FaWhatsapp, label: "WhatsApp", value: "Quick chat", href: LINKS.whatsapp },
    { Icon: FaInstagram, label: "Instagram DM", value: PROFILE.handle, href: LINKS.instagram },
    { Icon: FaHandshake, label: "Collaboration", value: "Let's build together", href: LINKS.email },
  ];

  return (
    <section id="contact" className="relative px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading kicker="Get in touch" title="Let's work together" subtitle="Open to brand collaborations, sponsorships and student initiatives." />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map((it, i) => (
            <motion.a
              key={it.label}
              href={it.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="group flex items-center gap-4 rounded-2xl glass p-5 hover:bg-white/[0.06]"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-yellow/15 text-xl text-yellow">
                <it.Icon />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{it.label}</div>
                <div className="truncate font-semibold">{it.value}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col items-center gap-4 rounded-3xl glass-strong p-8 text-center sm:p-12"
        >
          <h3 className="text-2xl font-bold sm:text-3xl">Drop a message</h3>
          <p className="max-w-xl text-sm text-muted-foreground">
            Tap below to copy my email, or use any of the channels above.
          </p>
          <button
            onClick={copyEmail}
            className="group inline-flex items-center gap-2 rounded-xl bg-yellow px-6 py-3 font-semibold text-primary-foreground glow-yellow transition-transform hover:scale-105"
          >
            {copied ? <FiCheck /> : <FiCopy />}
            <span>{copied ? "Copied!" : PROFILE.email}</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
