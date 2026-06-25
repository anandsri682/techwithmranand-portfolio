import { motion } from "framer-motion";
import {
  FiCode, FiCpu, FiBookOpen, FiBriefcase, FiBell, FiCompass,
} from "react-icons/fi";
import { SectionHeading } from "./SectionHeading";

const CARDS = [
  { Icon: FiCode, title: "Programming Tutorials", desc: "Hands-on guides on web dev, Python, DSA, and more.", grad: "from-yellow/30 to-orange-500/20" },
  { Icon: FiCpu, title: "AI & Technology", desc: "Latest tools, models and how to use them in real work.", grad: "from-purple-500/30 to-pink-500/20" },
  { Icon: FiBookOpen, title: "Educational Updates", desc: "Exam news, syllabus changes, government schemes.", grad: "from-emerald-500/30 to-teal-500/20" },
  { Icon: FiBriefcase, title: "Internship Opportunities", desc: "Curated internships for students and freshers.", grad: "from-blue-500/30 to-cyan-500/20" },
  { Icon: FiBell, title: "Job Notifications", desc: "Off-campus drives, walk-ins and remote roles.", grad: "from-rose-500/30 to-red-500/20" },
  { Icon: FiCompass, title: "Career Guidance", desc: "Roadmaps, resume tips and interview prep.", grad: "from-amber-500/30 to-yellow/30" },
];

export function Content() {
  return (
    <section id="content" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="What I share" title="Content that helps you grow" subtitle="Practical, no-fluff content built for students and early-career professionals." />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl glass p-6"
            >
              <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${c.grad} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-yellow/15 text-2xl text-yellow transition-transform group-hover:scale-110 group-hover:rotate-6">
                <c.Icon />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
