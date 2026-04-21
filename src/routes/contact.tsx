import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} {...props}>
    <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.2 1.78 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .98-.31 3.21 1.18a11.1 11.1 0 0 1 5.85 0c2.23-1.49 3.21-1.18 3.21-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.26 5.68.42.36.79 1.07.79 2.16v3.2c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12.02C23.5 5.74 18.27.5 12 .5Z" />
  </svg>
);
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
  </svg>
);

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
  { icon: LinkedinIcon, label: "LinkedIn", value: "Connect", href: "https://linkedin.com" },
  { icon: GithubIcon, label: "GitHub", value: "Follow", href: "https://github.com" },
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
