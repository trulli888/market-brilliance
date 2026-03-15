import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  { q: "What file formats are included?", a: "All assets ship with Figma, Sketch, Adobe XD source files, plus production-ready SVG, PNG, and React/Vue components." },
  { q: "Can I use these commercially?", a: "Yes. All licenses include unlimited commercial usage across unlimited projects and clients. No attribution required." },
  { q: "How do updates work?", a: "Once acquired, you receive lifetime access to all future updates. New components and templates are added monthly." },
  { q: "Is there team licensing?", a: "Every license includes unlimited seats. Your entire team can access and use the assets from day one." },
  { q: "What's your refund policy?", a: "We offer a 30-day satisfaction guarantee. If the assets don't meet your standards, we'll process a full refund." },
  { q: "Do you offer custom work?", a: "Yes. Contact us for enterprise-grade custom design systems, bespoke icon sets, and white-label solutions." },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 border-y border-border">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="text-data text-primary mb-3 block">Knowledge Base</span>
          <h2 className="text-4xl font-semibold tracking-tighter" style={{ letterSpacing: '-0.03em' }}>
            Frequently Asked
          </h2>
        </motion.div>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="border-b border-border"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="text-sm font-medium group-hover:text-primary transition-colors">{faq.q}</span>
                <span className="font-mono-data text-lg text-muted-foreground shrink-0 ml-4 w-6 text-center">
                  {open === i ? '−' : '+'}
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
