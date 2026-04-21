import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Ankit Jha" },
      {
        name: "description",
        content:
          "Selected ML projects by Ankit Jha — BERT-based mental-health escalation, sentiment analysis with SVM, and more.",
      },
      { property: "og:title", content: "Projects — Ankit Jha" },
      {
        property: "og:description",
        content: "BERT, SVM, XGBoost — applied ML projects with measurable outcomes.",
      },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    index: "01",
    title: "AI-Powered Mental Health Emergency Escalation System",
    summary:
      "End-to-end NLP system that classifies severity, detects crises, extracts cultural risk factors, and predicts session duration — all to get critical cases in front of clinicians faster.",
    bullets: [
      "Multi-class severity classifier (Low / Medium / High / Critical) using fine-tuned BERT + SVM with NLP features (keywords, sentiment) and metadata (user history, time-of-day) — improved escalation accuracy by 25%.",
      "Crisis detection with DistilBERT + rule-based keyword matching, reducing false negatives by 40% for high-risk cases (suicidal ideation, self-harm).",
      "Custom spaCy NER model to extract culture-specific risk factors (e.g., 'academic pressure') from multilingual English/Hindi text.",
      "Session duration forecasting with XGBoost regression, reducing scheduling deviations by 30% vs. fixed rules.",
    ],
    stats: [
      { v: "<5m", l: "Critical case ETA" },
      { v: "95%", l: "SLA compliance" },
      { v: "+25%", l: "Accuracy gain" },
      { v: "−40%", l: "False negatives" },
    ],
    tech: ["Python", "PyTorch", "BERT", "DistilBERT", "spaCy", "XGBoost", "Hugging Face"],
  },
  {
    index: "02",
    title: "Sentiment Analysis of E-Commerce Product Reviews",
    summary:
      "Sentiment classification model that analyses customer reviews from Amazon, Flipkart, and BestBuy and labels them Positive, Negative, or Neutral.",
    bullets: [
      "Built a full text-classification pipeline: cleaning, tokenisation, TF-IDF vectorisation, and class-balanced training.",
      "Used SVM as the primary classifier — strong performance on the high-dimensional, sparse feature space typical of text.",
      "Compared against baseline Logistic Regression and Random Forest models for robustness.",
    ],
    stats: [
      { v: "3-class", l: "Sentiment labels" },
      { v: "SVM", l: "Primary model" },
      { v: "TF-IDF", l: "Features" },
      { v: "Python", l: "Stack" },
    ],
    tech: ["Python", "Pandas", "NumPy", "scikit-learn", "SVM"],
  },
];

function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
          Selected work
        </div>
        <h1 className="text-5xl md:text-6xl font-display leading-tight max-w-3xl">
          Projects with <em className="text-gradient-aurora not-italic">measurable</em> outcomes.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          A short list of the ML systems I've built — every claim is backed by a
          metric, not vibes.
        </p>
      </motion.div>

      <div className="mt-20 space-y-16">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="rounded-3xl border border-border bg-surface/40 p-8 md:p-12"
          >
            <div className="flex items-start gap-6 mb-6">
              <div className="font-mono text-sm text-primary mt-2">{p.index}</div>
              <h2 className="text-3xl md:text-4xl font-display flex-1">{p.title}</h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-8">
              {p.summary}
            </p>

            <div className="grid md:grid-cols-[1fr_auto] gap-10">
              <ul className="space-y-3">
                {p.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="text-primary mt-1.5 shrink-0">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-2 gap-3 content-start min-w-[220px]">
                {p.stats.map((s) => (
                  <div
                    key={s.l}
                    className="rounded-2xl bg-background/40 border border-border/60 p-4"
                  >
                    <div className="text-xl font-display text-gradient-aurora">{s.v}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1 font-mono">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/60 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full border border-border font-mono text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
