import { motion } from "framer-motion";
import {
  Layout, Palette, Type, Image, Box, Layers, Brush,
  Monitor, Smartphone, Figma, PenTool, Grid3X3,
} from "lucide-react";
import { useState } from "react";

const categories = [
  { name: "UI Kits", icon: Layout },
  { name: "Color Systems", icon: Palette },
  { name: "Typography", icon: Type },
  { name: "Photography", icon: Image },
  { name: "3D Assets", icon: Box },
  { name: "Templates", icon: Layers },
  { name: "Illustrations", icon: Brush },
  { name: "Desktop", icon: Monitor },
  { name: "Mobile", icon: Smartphone },
  { name: "Design Files", icon: Figma },
  { name: "Vector Art", icon: PenTool },
  { name: "Patterns", icon: Grid3X3 },
];

const CategoryMatrixSection = () => {
  const [active, setActive] = useState<string | null>(null);

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
          <span className="text-data text-primary mb-3 block">Category Matrix</span>
          <h2 className="text-4xl font-semibold tracking-tighter" style={{ letterSpacing: '-0.03em' }}>
            Browse by Discipline
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = active === cat.name;
            return (
              <motion.button
                key={cat.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActive(isActive ? null : cat.name)}
                className={`flex flex-col items-center gap-2 py-5 px-2 rounded-2xl transition-all duration-200 ${
                  isActive ? 'bg-primary/10 card-shadow' : 'hover:bg-secondary'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} strokeWidth={1.5} />
                <span className={`text-data ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>{cat.name}</span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryMatrixSection;
