import { motion } from "framer-motion";
import anand from "@/assets/image.jpg";
import { PROFILE } from "@/data/links";

export function About() {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto"
        >
          <div className="absolute -inset-4 rounded-3xl bg-yellow/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 glass-strong p-2">
            <img src={anand} alt={PROFILE.name} loading="lazy" width={768} height={768} className="h-80 w-72 rounded-2xl object-cover sm:h-96 sm:w-80" />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-4 -right-4 rounded-2xl glass-strong px-4 py-3 text-sm shadow-xl"
          >
            <div className="font-semibold text-yellow">2+ Years</div>
            <div className="text-xs text-muted-foreground">Creating & Teaching</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.25em] text-yellow">
            About me
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Hi, I'm <span className="text-yellow text-glow">Anand</span> — creator & educator.
          </h2>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            I run <strong className="text-foreground">Tech with Mr Anand</strong>, where I simplify
            programming, AI tools, and career guidance for thousands of students every day. My mission is
            simple: make modern tech learnable for everyone, regardless of background.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Web Development", "Python", "AI Tools", "Career Coaching", "Internships"].map((t) => (
              <span key={t} className="rounded-full glass px-3 py-1.5 text-xs">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
