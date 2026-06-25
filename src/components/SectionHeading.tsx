import { motion } from "framer-motion";

export function SectionHeading({
  kicker, title, subtitle, align = "center",
}: { kicker?: string; title: string; subtitle?: string; align?: "left" | "center" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col gap-3 ${align === "center" ? "items-center text-center" : "items-start text-left"}`}
    >
      {kicker && (
        <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.25em] text-yellow">
          {kicker}
        </span>
      )}
      <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle && <p className="max-w-2xl text-base text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
}
