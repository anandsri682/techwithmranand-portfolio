import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setVisible(true);
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-50 h-[400px] w-[400px] rounded-full"
      style={{
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--brand-yellow) 14%, transparent), transparent 60%)",
        mixBlendMode: "screen",
      }}
      animate={{ x: pos.x - 200, y: pos.y - 200 }}
      transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
    />
  );
}
