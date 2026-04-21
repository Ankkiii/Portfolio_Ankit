import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ankit Jha — ML Engineer & CS Student" },
      {
        name: "description",
        content:
          "Aspiring Machine Learning Engineer building NLP systems for mental health, classification, and real-world AI.",
      },
      { property: "og:title", content: "Ankit Jha — ML Engineer & CS Student" },
      {
        property: "og:description",
        content: "Portfolio of Ankit Jha — NLP, classification, and applied AI.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative max-w-6xl mx-auto px-6 pt-20 pb-32 grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface/50 text-xs font-mono text-muted-foreground mb-6"
          >
            <Sparkles size={12} className="text-primary" />
            Available for ML internships
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display leading-[0.95] tracking-tight"
          >
            Building <em className="text-gradient-aurora not-italic">intelligent</em>
            <br />
            systems that
            <br />
            <span className="text-muted-foreground italic font-light">listen.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            I'm <span className="text-foreground">Ankit Jha</span> — a CS
            undergraduate at SRM training transformers for crisis detection,
            sentiment analysis, and HR automation. Currently focused on NLP
            and classification under uncertainty.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-aurora px-6 py-3 text-sm font-medium text-primary-foreground glow hover:scale-[1.02] transition-transform"
            >
              View projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-surface transition-colors"
            >
              Get in touch
            </Link>
          </motion.div>

          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 font-mono text-xs text-muted-foreground">
            <div>
              <div className="text-2xl font-display text-foreground">8.23</div>
              <div>CGPA · 5th Sem</div>
            </div>
            <div>
              <div className="text-2xl font-display text-foreground">3</div>
              <div>AI/ML internships</div>
            </div>
            <div>
              <div className="text-2xl font-display text-foreground">95%</div>
              <div>SLA on critical cases</div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border/60 bg-surface"
        >
          <img
            src={heroImg}
            alt="Neural network portrait representing Ankit Jha"
            width={1024}
            height={1280}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-background/40 border border-border/40 rounded-2xl p-4">
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary">Now</div>
            <div className="text-sm mt-1">
              Fine-tuning BERT for multilingual mental-health triage.
            </div>
          </div>
        </motion.div>
      </section>

      {/* Marquee skills */}
      <section className="border-y border-border/40 py-6 overflow-hidden bg-surface/30">
        <div className="flex gap-12 animate-[scroll_40s_linear_infinite] whitespace-nowrap font-mono text-sm text-muted-foreground">
          {[
            "Python",
            "PyTorch",
            "Hugging Face",
            "scikit-learn",
            "TensorFlow",
            "XGBoost",
            "spaCy",
            "BERT",
            "DistilBERT",
            "Pandas",
            "NumPy",
            "C++",
          ]
            .concat([
              "Python",
              "PyTorch",
              "Hugging Face",
              "scikit-learn",
              "TensorFlow",
              "XGBoost",
              "spaCy",
              "BERT",
            ])
            .map((s, i) => (
              <span key={i} className="flex items-center gap-12">
                {s}
                <span className="text-primary">◆</span>
              </span>
            ))}
        </div>
        <style>{`@keyframes scroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
      </section>

      {/* Featured */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
              01 — Featured
            </div>
            <h2 className="text-4xl md:text-5xl font-display max-w-2xl">
              An AI system that triages mental-health crises in under 5 minutes.
            </h2>
          </div>
        </div>

        <Link
          to="/projects"
          className="group block rounded-3xl border border-border bg-surface/60 p-8 md:p-12 hover:border-primary/40 transition-colors"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-display mb-4">
                Mental Health Emergency Escalation System
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Multi-class severity classifier with fine-tuned BERT + SVM,
                DistilBERT crisis detection, custom spaCy NER for cultural risk
                factors, and XGBoost session-duration forecasting. Reduced
                escalation time on critical cases to under 5 minutes.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs">
                {["BERT", "DistilBERT", "spaCy", "XGBoost", "PyTorch"].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full border border-border text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 content-start">
              <Stat label="Escalation accuracy" value="+25%" />
              <Stat label="False negatives" value="−40%" />
              <Stat label="SLA compliance" value="95%" />
              <Stat label="Critical case ETA" value="<5m" />
            </div>
          </div>
          <div className="mt-8 inline-flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all">
            See all projects <ArrowRight size={14} />
          </div>
        </Link>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-background/40 border border-border/60 p-4">
      <div className="text-2xl font-display text-gradient-aurora">{value}</div>
      <div className="text-xs text-muted-foreground mt-1 font-mono">{label}</div>
    </div>
  );
}
