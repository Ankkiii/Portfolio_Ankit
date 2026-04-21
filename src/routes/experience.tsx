import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Ankit Jha" },
      {
        name: "description",
        content:
          "Internships and roles — JSW, CITTAA Health Services, Prodigy Infotech. AI/ML and web development experience.",
      },
      { property: "og:title", content: "Experience — Ankit Jha" },
      {
        property: "og:description",
        content: "AI/ML internships at JSW and CITTAA, plus web dev at Prodigy Infotech.",
      },
    ],
  }),
  component: Experience,
});

const experience = [
  {
    role: "AIML Intern",
    company: "JSW",
    period: "16 Jun 2025 – 15 Jul 2025",
    bullets: [
      "Contributed to an HR Helpdesk Ticket Classification system, leveraging NLP and ML to automate ticket categorisation and improve task routing.",
      "Trained and fine-tuned a Transformer-based text classifier (MiniLM / BERT) to accurately classify employee support requests across multiple categories.",
      "Supported integration of the ML model into RPA workflows, enabling faster response times and reduced manual intervention.",
      "Gained hands-on experience with end-to-end AI deployment — preprocessing, training, and integration with enterprise automation.",
    ],
  },
  {
    role: "AIML Intern",
    company: "CITTAA Health Services Pvt Ltd",
    period: "From 7 May 2025",
    bullets: [
      "Contributed to an AI-driven Emergency Case Escalation System, using NLP and ML to analyse mental-health cases and optimise psychologist matching.",
      "Built multiclass classification models for severity assessment (Transformer-based) and binary/multilabel classifiers for crisis detection (BERT), prioritising false-negative reduction in high-stakes scenarios.",
      "Supported the design of a hybrid recommendation system for psychologist matching, balancing specialisation with workload.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Prodigy Infotech",
    period: "Aug 2024 – Sep 2024",
    bullets: [
      "Contributed to dynamic websites for small businesses, focused on front-end implementation.",
      "Used HTML, CSS, and JavaScript to build engaging and user-friendly interfaces.",
    ],
  },
];

function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
          Experience
        </div>
        <h1 className="text-5xl md:text-6xl font-display leading-tight">
          Three internships. <em className="text-gradient-aurora not-italic">One thread:</em> shipping models.
        </h1>
      </motion.div>

      <div className="mt-20 relative">
        <div className="absolute left-3 top-2 bottom-2 w-px bg-border hidden sm:block" />

        <div className="space-y-12">
          {experience.map((e, i) => (
            <motion.div
              key={e.role + e.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative sm:pl-12"
            >
              <div className="absolute left-0 top-2 hidden sm:flex h-6 w-6 items-center justify-center">
                <div className="h-2.5 w-2.5 rounded-full bg-primary glow" />
              </div>

              <div className="rounded-2xl border border-border bg-surface/40 p-6 md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-2xl font-display">{e.role}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{e.period}</span>
                </div>
                <div className="text-primary font-medium mb-4">{e.company}</div>
                <ul className="space-y-2.5">
                  {e.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="text-primary mt-1.5 shrink-0">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
