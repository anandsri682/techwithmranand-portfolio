import {
  FaYoutube, FaInstagram, FaLinkedin, FaXTwitter, FaGithub, FaWhatsapp, FaTelegram,
} from "react-icons/fa6";
import { LINKS, PROFILE } from "@/data/links";

const SOCIAL = [
  { Icon: FaYoutube, url: LINKS.youtube, label: "YouTube" },
  { Icon: FaInstagram, url: LINKS.instagram, label: "Instagram" },
  { Icon: FaLinkedin, url: LINKS.linkedin, label: "LinkedIn" },
  { Icon: FaXTwitter, url: LINKS.twitter, label: "X" },
  { Icon: FaWhatsapp, url: LINKS.whatsapp, label: "WhatsApp" },
  { Icon: FaTelegram, url: LINKS.telegram, label: "Telegram" },
  { Icon: FaGithub, url: LINKS.github, label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/5 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-yellow text-primary-foreground">A</span>
          {PROFILE.name}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {SOCIAL.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="grid h-10 w-10 place-items-center rounded-xl glass text-muted-foreground transition-all hover:text-yellow hover:scale-110"
            >
              <s.Icon />
            </a>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          Made with <span className="text-yellow">❤️</span> by {PROFILE.name}
        </p>
        <p className="text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
