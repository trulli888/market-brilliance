import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const gradientX = useTransform(mouseX, [0, 1], ["20%", "80%"]);
  const gradientY = useTransform(mouseY, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Reactive mesh gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: useTransform(
            [gradientX, gradientY],
            ([x, y]) =>
              `radial-gradient(ellipse 80% 50% at ${x} ${y}, hsl(210 100% 50% / 0.18), transparent),
               radial-gradient(ellipse 60% 40% at 80% 20%, hsl(180 100% 50% / 0.08), transparent),
               radial-gradient(ellipse 40% 60% at 10% 80%, hsl(210 100% 50% / 0.05), transparent)`
          ),
        }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <span className="text-data text-primary">Intelligence Marketplace · Live</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[0.95] mb-6"
          style={{ letterSpacing: '-0.04em' }}
        >
          Strategic Digital
          <br />
          <span className="text-primary">Assets.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto mb-10"
        >
          High-performance creative assets backed by real-time market intelligence.
          Every product is a strategic investment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-4"
        >
          <button className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm transition-all duration-200 hover:scale-[1.02] card-shadow">
            Enter the Vault
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-medium text-sm transition-all duration-200 hover:bg-secondary">
            View Etsy Store
            <ExternalLink className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 flex items-center justify-center gap-12 text-data text-muted-foreground"
        >
          <div>
            <span className="text-foreground text-xl font-semibold font-mono-data block">2,847</span>
            Assets Acquired
          </div>
          <div className="w-px h-8 bg-border" />
          <div>
            <span className="text-foreground text-xl font-semibold font-mono-data block">98.7%</span>
            Satisfaction
          </div>
          <div className="w-px h-8 bg-border" />
          <div>
            <span className="text-data-up text-xl font-semibold font-mono-data block">+24.3%</span>
            Demand Growth
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
