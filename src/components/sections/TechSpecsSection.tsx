import { motion } from "framer-motion";
import { useState } from "react";

const tabs = ["Compatibility", "Contents", "Licensing"];

const tabContent: Record<string, { items: { label: string; value: string }[] }> = {
  Compatibility: {
    items: [
      { label: "Design Tools", value: "Figma, Sketch, Adobe XD" },
      { label: "Frameworks", value: "React, Vue, Angular, Svelte" },
      { label: "CSS", value: "Tailwind CSS, CSS Modules, Styled Components" },
      { label: "Platforms", value: "Web, iOS, Android" },
      { label: "Browsers", value: "Chrome, Safari, Firefox, Edge" },
    ],
  },
  Contents: {
    items: [
      { label: "Components", value: "2,400+" },
      { label: "Page Templates", value: "180+" },
      { label: "Design Tokens", value: "500+" },
      { label: "Icon Variants", value: "3,200" },
      { label: "File Formats", value: ".fig, .sketch, .svg, .tsx" },
    ],
  },
  Licensing: {
    items: [
      { label: "License Type", value: "Commercial / Extended" },
      { label: "Team Size", value: "Unlimited seats" },
      { label: "Projects", value: "Unlimited usage" },
      { label: "Updates", value: "Lifetime access" },
      { label: "Support", value: "Priority email support" },
    ],
  },
};

const TechSpecsSection = () => {
  const [activeTab, setActiveTab] = useState("Compatibility");

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="text-data text-primary mb-3 block">Technical Specifications</span>
          <h2 className="text-4xl font-semibold tracking-tighter" style={{ letterSpacing: '-0.03em' }}>
            Built for Professionals
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Asset preview */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl card-shadow bg-card overflow-hidden h-96"
          >
            <div className="h-full gradient-mesh flex items-center justify-center relative">
              <div className="grid grid-cols-3 gap-3 p-8 w-full max-w-xs">
                {Array.from({ length: 9 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="aspect-square rounded-xl bg-primary/10 border border-primary/20"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tabbed specs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex gap-1 mb-6 p-1 bg-secondary rounded-xl">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeTab === tab
                      ? 'bg-card card-shadow text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="space-y-0">
              {tabContent[activeTab].items.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between py-4 ${
                    i < tabContent[activeTab].items.length - 1 ? 'border-b border-border' : ''
                  }`}
                >
                  <span className="text-muted-foreground text-sm">{item.label}</span>
                  <span className="font-mono-data text-sm text-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechSpecsSection;
