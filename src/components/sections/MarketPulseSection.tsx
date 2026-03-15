import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

const categories = [
  { name: "UI Kits", change: +2.4, volume: "1.2K" },
  { name: "Icon Sets", change: +5.1, volume: "890" },
  { name: "Mockups", change: -1.2, volume: "2.1K" },
  { name: "Templates", change: +3.8, volume: "1.8K" },
  { name: "Illustrations", change: +1.9, volume: "640" },
  { name: "Fonts", change: +4.2, volume: "950" },
  { name: "Textures", change: -0.6, volume: "430" },
  { name: "3D Assets", change: +7.3, volume: "1.5K" },
  { name: "Branding Kits", change: +2.1, volume: "720" },
  { name: "Social Media", change: +6.8, volume: "3.2K" },
];

const TickerItem = ({ name, change, volume }: { name: string; change: number; volume: string }) => {
  const isUp = change >= 0;
  return (
    <div className="flex items-center gap-4 px-6 py-3 shrink-0">
      <span className="text-sm font-medium text-foreground whitespace-nowrap">{name}</span>
      <div className={`flex items-center gap-1 text-data ${isUp ? 'text-data-up' : 'text-data-down'}`}>
        {isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
        {isUp ? '+' : ''}{change}%
      </div>
      <span className="text-data text-muted-foreground">VOL {volume}</span>
      {/* Sparkline SVG */}
      <svg width="48" height="16" viewBox="0 0 48 16" className="shrink-0">
        <motion.path
          d={isUp ? "M0,14 L8,10 L16,12 L24,6 L32,8 L40,3 L48,2" : "M0,4 L8,6 L16,5 L24,10 L32,8 L40,12 L48,13"}
          fill="none"
          stroke={isUp ? 'hsl(160, 84%, 39%)' : 'hsl(0, 72%, 51%)'}
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
};

const MarketPulseSection = () => {
  const doubled = [...categories, ...categories];

  return (
    <section className="py-4 border-y border-border overflow-hidden">
      <div className="flex items-center">
        <div className="shrink-0 px-6 py-3 border-r border-border">
          <span className="text-data text-primary">Market Pulse</span>
        </div>
        <div className="overflow-hidden flex-1">
          <div className="ticker-scroll flex">
            {doubled.map((cat, i) => (
              <TickerItem key={`${cat.name}-${i}`} {...cat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketPulseSection;
