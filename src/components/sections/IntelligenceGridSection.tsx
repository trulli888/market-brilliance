import { motion } from "framer-motion";
import { Star, TrendingUp, Eye } from "lucide-react";

const products = [
  { name: "Enterprise UI System", price: "$189", score: 98, scarcity: "Limited", views: "12.4K", category: "UI Kit", image: "linear-gradient(135deg, hsl(210 100% 50% / 0.3), hsl(180 100% 50% / 0.1))" },
  { name: "Geometric Icon Library", price: "$79", score: 94, scarcity: "Available", views: "8.7K", category: "Icons", image: "linear-gradient(135deg, hsl(180 100% 50% / 0.3), hsl(210 100% 50% / 0.1))" },
  { name: "Minimal Brand Toolkit", price: "$249", score: 97, scarcity: "Scarce", views: "15.2K", category: "Branding", image: "linear-gradient(135deg, hsl(240 50% 50% / 0.3), hsl(210 100% 50% / 0.1))" },
  { name: "Dashboard Template Pro", price: "$149", score: 96, scarcity: "Available", views: "9.1K", category: "Template", image: "linear-gradient(135deg, hsl(210 80% 40% / 0.3), hsl(180 60% 40% / 0.1))" },
  { name: "3D Asset Collection", price: "$299", score: 99, scarcity: "Limited", views: "21.3K", category: "3D", image: "linear-gradient(135deg, hsl(280 60% 50% / 0.3), hsl(210 100% 50% / 0.1))" },
  { name: "Motion Graphics Pack", price: "$129", score: 92, scarcity: "Available", views: "6.8K", category: "Motion", image: "linear-gradient(135deg, hsl(160 84% 39% / 0.3), hsl(210 100% 50% / 0.1))" },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

const IntelligenceGridSection = () => {
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
          <span className="text-data text-primary mb-3 block">Intelligence Grid</span>
          <h2 className="text-4xl font-semibold tracking-tighter" style={{ letterSpacing: '-0.03em' }}>
            High-Performance Assets
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {products.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              className="group rounded-2xl p-3 card-shadow hover:card-shadow-hover transition-shadow duration-300 bg-card cursor-pointer"
            >
              {/* Image area */}
              <div
                className="rounded-xl h-48 mb-3 flex items-end p-4 relative overflow-hidden"
                style={{ background: p.image }}
              >
                {/* Hover overlay with score */}
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-mono-data text-4xl font-bold text-primary">{p.score}</div>
                    <div className="text-data text-muted-foreground mt-1">Market Score</div>
                    <div className="text-data text-accent mt-2">Scarcity: {p.scarcity}</div>
                  </div>
                </div>
                <span className="text-data bg-background/60 backdrop-blur-sm px-2 py-1 rounded-md relative z-10">{p.category}</span>
              </div>

              <div className="px-1 pb-1">
                <h3 className="font-medium text-sm mb-2">{p.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-mono-data text-lg font-semibold text-primary">{p.price}</span>
                  <div className="flex items-center gap-3 text-data text-muted-foreground">
                    <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{p.views}</span>
                    <span className="flex items-center gap-1"><Star className="w-3 h-3" />{p.score}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IntelligenceGridSection;
