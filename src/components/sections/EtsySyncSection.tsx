import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ShoppingBag, MapPin, Clock } from "lucide-react";

const sales = [
  { user: "Designer in London", asset: "Enterprise UI System", time: "2m ago" },
  { user: "Studio in Tokyo", asset: "Geometric Icon Library", time: "5m ago" },
  { user: "Agency in New York", asset: "Minimal Brand Toolkit", time: "12m ago" },
  { user: "Freelancer in Berlin", asset: "Dashboard Template Pro", time: "18m ago" },
  { user: "Team in São Paulo", asset: "3D Asset Collection", time: "24m ago" },
  { user: "Startup in Singapore", asset: "Motion Graphics Pack", time: "31m ago" },
];

const EtsySyncSection = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prev) => (prev + 1) % sales.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="text-data text-primary mb-3 block">Etsy Real-Time Sync</span>
          <h2 className="text-4xl font-semibold tracking-tighter" style={{ letterSpacing: '-0.03em' }}>
            Verified Acquisitions
          </h2>
          <p className="text-muted-foreground mt-2">Live feed from our Etsy storefront.</p>
        </motion.div>

        {/* Live feed */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Recent sales list */}
          <div className="space-y-3">
            {sales.map((sale, i) => (
              <motion.div
                key={sale.asset}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`flex items-center gap-4 p-4 rounded-xl transition-colors duration-300 ${
                  i === visibleIndex ? 'bg-primary/5 card-shadow' : 'bg-card'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <ShoppingBag className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{sale.user}</p>
                  <p className="text-data text-muted-foreground">acquired {sale.asset}</p>
                </div>
                <span className="text-data text-muted-foreground shrink-0">{sale.time}</span>
              </motion.div>
            ))}
          </div>

          {/* Live notification preview */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={visibleIndex}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="card-shadow bg-card rounded-2xl p-6"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-data-up pulse-dot" />
                    <span className="text-data text-data-up">Live</span>
                  </div>
                  <p className="text-lg font-medium mb-2">{sales[visibleIndex].asset}</p>
                  <div className="flex items-center gap-4 text-data text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{sales[visibleIndex].user}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{sales[visibleIndex].time}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EtsySyncSection;
