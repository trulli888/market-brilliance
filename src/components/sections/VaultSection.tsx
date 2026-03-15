import { motion } from "framer-motion";
import { ArrowRight, FileArchive, Monitor, Shield } from "lucide-react";

const tags = [
  { label: "4.2 GB", icon: FileArchive },
  { label: "4K RAW", icon: Monitor },
  { label: "Commercial License", icon: Shield },
];

const VaultSection = () => {
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
          <span className="text-data text-primary mb-3 block">The Vault</span>
          <h2 className="text-4xl font-semibold tracking-tighter" style={{ letterSpacing: '-0.03em' }}>
            Featured Collection
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl card-shadow bg-card overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Visual */}
            <div className="relative h-80 md:h-auto min-h-[400px] overflow-hidden">
              <div className="absolute inset-0 gradient-mesh" />
              {/* Concentric glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="w-64 h-64 rounded-full border border-primary/20"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute w-48 h-48 rounded-full border border-accent/20"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute w-32 h-32 rounded-full border border-primary/30"
                />
                <div className="absolute w-16 h-16 rounded-full bg-primary/20 blur-xl" />
              </div>
              {/* Floating tags */}
              {tags.map((tag, i) => (
                <motion.div
                  key={tag.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="absolute card-shadow bg-card/90 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-2 text-data"
                  style={{
                    top: `${25 + i * 25}%`,
                    left: i % 2 === 0 ? '8%' : 'auto',
                    right: i % 2 !== 0 ? '8%' : 'auto',
                  }}
                >
                  <tag.icon className="w-3 h-3 text-primary" />
                  {tag.label}
                </motion.div>
              ))}
            </div>

            {/* Details */}
            <div className="p-10 flex flex-col justify-center">
              <span className="text-data text-accent mb-4 block">Limited Edition · 47 Remaining</span>
              <h3 className="text-3xl font-semibold tracking-tight mb-4">
                The Complete Design System Bundle
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A comprehensive collection of 2,400+ components, 180+ page templates,
                and a complete design token architecture. Built for teams that ship fast.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono-data text-4xl font-bold text-primary">$499</span>
                <span className="text-data text-muted-foreground line-through">$799</span>
                <span className="text-data text-data-up bg-data-up/10 px-2 py-1 rounded">-37%</span>
              </div>
              <button className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm transition-all duration-200 hover:scale-[1.02] card-shadow w-fit">
                Acquire License
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VaultSection;
