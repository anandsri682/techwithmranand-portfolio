import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base radial gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, color-mix(in oklab, var(--brand-yellow) 12%, transparent), transparent 70%), radial-gradient(ellipse 50% 40% at 80% 80%, color-mix(in oklab, var(--brand-yellow) 6%, transparent), transparent 70%)",
        }}
      />
      {/* Tech grid */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Floating glowing orbs */}
      {[
        { size: 380, x: "-10%", y: "10%", delay: 0, color: "var(--brand-yellow)" },
        { size: 280, x: "85%", y: "20%", delay: 2, color: "var(--brand-yellow)" },
        { size: 320, x: "60%", y: "75%", delay: 4, color: "var(--brand-yellow)" },
        { size: 220, x: "5%", y: "70%", delay: 1, color: "var(--brand-yellow)" },
      ].map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, color-mix(in oklab, ${orb.color} 25%, transparent), transparent 70%)`,
            filter: "blur(40px)",
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 18 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}

      {/* Particles */}
      {Array.from({ length: 24 }).map((_, i) => {
        const left = (i * 37) % 100;
        const top = (i * 53) % 100;
        const dur = 8 + (i % 7);
        return (
          <motion.div
            key={`p-${i}`}
            className="absolute h-1 w-1 rounded-full bg-yellow/70"
            style={{ left: `${left}%`, top: `${top}%` }}
            animate={{ y: [0, -40, 0], opacity: [0, 1, 0] }}
            transition={{ duration: dur, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
          />
        );
      })}

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 50%, transparent 40%, var(--background) 100%)",
        }}
      />
    </div>
  );
}
