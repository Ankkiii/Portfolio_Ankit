import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ankit Jha" },
      {
        name: "description",
        content: "Get in touch with Ankit Jha — open to ML internships and collaborations.",
      },
      { property: "og:title", content: "Contact — Ankit Jha" },
      {
        property: "og:description",
        content: "Open to ML internships and collaborations. Reach me by email or LinkedIn.",
      },
    ],
  }),
  component: Contact,
});

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "jhaankit9523@gmail.com",
    href: "mailto:jhaankit9523@gmail.com",
  },
  { icon: Phone, label: "Phone", value: "+91 82528 48161", href: "tel:+918252848161" },
  { icon: MapPin, label: "Based in", value: "Chennai, India", href: null },
  { icon: Linkedin, label: "LinkedIn", value: "Connect", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", value: "Follow", href: "https://github.com" },
];

function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
          Contact
        </div>
        <h1 className="text-5xl md:text-7xl font-display leading-tight">
          Let's build something
          <br />
          <em className="text-gradient-aurora not-italic">that matters.</em>
        </h1>
        <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          I'm currently open to <span className="text-foreground">ML / AI internships</span>{" "}
          and freelance collaborations on NLP and classification problems.
          Fastest reply is by email.
        </p>
      </motion.div>

      <div className="mt-16 grid sm:grid-cols-2 gap-4">
        {channels.map((c, i) => {
          const Icon = c.icon;
          const content = (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl border border-border bg-surface/40 p-6 hover:border-primary/40 hover:bg-surface/60 transition-all h-full"
            >
              <div className="flex items-start justify-between">
                <div className="h-10 w-10 rounded-xl bg-aurora flex items-center justify-center text-primary-foreground">
                  <Icon size={18} />
                </div>
                {c.href && (
                  <ArrowUpRight
                    size={18}
                    className="text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  />
                )}
              </div>
              <div className="mt-6">
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {c.label}
                </div>
                <div className="mt-1 text-lg font-display break-all">{c.value}</div>
              </div>
            </motion.div>
          );
          return c.href ? (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              {content}
            </a>
          ) : (
            <div key={c.label}>{content}</div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 rounded-3xl border border-border bg-aurora/10 p-8 md:p-12 text-center"
      >
        <p className="font-display text-2xl md:text-3xl max-w-2xl mx-auto leading-snug">
          "The best models are the ones you can{" "}
          <span className="text-gradient-aurora">explain to your grandma</span>{" "}
          — and the ones that ship."
        </p>
      </motion.div>
    </div>
  );
}
