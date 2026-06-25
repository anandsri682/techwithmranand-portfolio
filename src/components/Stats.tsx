import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { STATS } from "@/data/links";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toLocaleString() + suffix);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [inView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function Stats() {
  return (
    <section className="relative px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-4 rounded-3xl glass-strong p-6 sm:p-10 md:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-yellow text-glow sm:text-4xl md:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground sm:text-sm">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
