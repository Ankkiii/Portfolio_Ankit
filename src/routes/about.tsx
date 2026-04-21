import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ankit Jha" },
      {
        name: "description",
        content:
          "About Ankit Jha — CS undergraduate at SRM, ML engineer in training, focused on NLP and applied AI.",
      },
      { property: "og:title", content: "About — Ankit Jha" },
      {
        property: "og:description",
        content: "CS undergrad at SRM specialising in NLP and classification.",
      },
    ],
  }),
  component: About,
});

const skills = {
  Languages: ["C", "C++", "Python", "DSA", "OOP"],
  "ML / Frameworks": ["scikit-learn", "TensorFlow", "PyTorch", "NumPy", "Pandas", "XGBoost", "Random Forest"],
  Concepts: [
    "Feature Engineering",
    "Cross Validation",
    "Hyperparameter Tuning",
    "Supervised Learning",
    "Unsupervised Learning",
    "Logistic Regression",
    "Decision Trees",
    "SVM",
  ],
  Tools: ["Jupyter", "Google Colab", "VS Code"],
};

function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
          About
        </div>
        <h1 className="text-5xl md:text-6xl font-display leading-tight max-w-3xl">
          A CS student turning <em className="text-gradient-aurora not-italic">research papers</em> into
          shipped systems.
        </h1>
      </motion.div>

      <div className="mt-16 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm Ankit Jha, a Bachelor of Technology student in Computer Science
            at <span className="text-foreground">SRM Institute of Science and Technology, Chennai</span>{" "}
            (currently 5th semester, CGPA 8.23).
          </p>
          <p>
            My focus is Machine Learning — specifically NLP and classification.
            I like the messy edge of the field: imbalanced classes, multilingual
            text, false-negative-sensitive domains, and models that have to be
            right when it matters most. Mental-health triage and HR automation
            are where I've spent most of my time so far.
          </p>
          <p>
            I work in Python with PyTorch and Hugging Face, fine-tune
            transformers like BERT and DistilBERT, and reach for XGBoost and SVM
            when the data calls for it. I care about feature engineering,
            evaluation that reflects real cost, and code that someone else can
            read six months later.
          </p>
          <p>
            Outside the editor: I'm originally from Madhubani, Bihar, and I'm
            currently looking for an ML internship where I can ship models into
            production.
          </p>
        </div>

        <aside className="space-y-8">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
              Education
            </div>
            <div className="border-l-2 border-primary pl-4">
              <div className="font-display text-lg">SRM Institute of Science & Technology</div>
              <div className="text-sm text-muted-foreground">B.Tech CSE · CGPA 8.23</div>
              <div className="text-xs font-mono text-muted-foreground mt-1">Aug 2023 – Jun 2027</div>
            </div>
            <div className="border-l-2 border-border pl-4 mt-4">
              <div className="font-display text-lg">Saraswati Vidya Mandir</div>
              <div className="text-sm text-muted-foreground">12th Grade · 74.6%</div>
              <div className="text-xs font-mono text-muted-foreground mt-1">Mar 2020 – Apr 2022</div>
            </div>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
              Certifications
            </div>
            <ul className="space-y-2 text-sm">
              <li>C & C++ — Udemy</li>
              <li>Introduction to Databases — Meta (Coursera)</li>
            </ul>
          </div>
        </aside>
      </div>

      {/* Skills */}
      <section className="mt-24">
        <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
          Toolkit
        </div>
        <h2 className="text-3xl md:text-4xl font-display mb-10">What I work with</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([group, items]) => (
            <div
              key={group}
              className="rounded-2xl border border-border bg-surface/40 p-6"
            >
              <div className="font-display text-lg mb-4">{group}</div>
              <ul className="space-y-2 font-mono text-sm text-muted-foreground">
                {items.map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="text-primary">›</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
