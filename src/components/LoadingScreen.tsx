import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              className="h-14 w-14 rounded-full border-2 border-yellow/20 border-t-yellow"
            />
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              className="text-xs uppercase tracking-[0.4em] text-muted-foreground"
            >
              Tech with Mr Anand
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
