import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", value: 4200, growth: 12 },
  { month: "Feb", value: 4800, growth: 14 },
  { month: "Mar", value: 5100, growth: 6 },
  { month: "Apr", value: 6200, growth: 22 },
  { month: "May", value: 5800, growth: -6 },
  { month: "Jun", value: 7100, growth: 22 },
  { month: "Jul", value: 7800, growth: 10 },
  { month: "Aug", value: 8400, growth: 8 },
  { month: "Sep", value: 9200, growth: 10 },
  { month: "Oct", value: 10100, growth: 10 },
  { month: "Nov", value: 11400, growth: 13 },
  { month: "Dec", value: 12800, growth: 12 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card card-shadow rounded-xl px-4 py-3">
      <p className="text-data text-muted-foreground mb-1">{label}</p>
      <p className="font-mono-data text-lg font-semibold text-foreground">${payload[0].value.toLocaleString()}</p>
      <p className="text-data text-data-up">+{payload[0].payload.growth}% MoM</p>
    </div>
  );
};

const DashboardSection = () => {
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
          <span className="text-data text-primary mb-3 block">Live Intelligence</span>
          <h2 className="text-4xl font-semibold tracking-tighter" style={{ letterSpacing: '-0.03em' }}>
            Global Asset Appreciation
          </h2>
          <p className="text-muted-foreground mt-2">Real-time market valuation of digital assets in our portfolio.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl p-6 card-shadow bg-card"
        >
          {/* Stats row */}
          <div className="flex items-center gap-8 mb-8 pb-6 border-b border-border">
            <div>
              <span className="text-data text-muted-foreground">Total Value</span>
              <p className="font-mono-data text-3xl font-bold text-foreground">$12,800</p>
            </div>
            <div>
              <span className="text-data text-muted-foreground">12M Growth</span>
              <p className="font-mono-data text-3xl font-bold text-data-up">+204%</p>
            </div>
            <div>
              <span className="text-data text-muted-foreground">Avg. Monthly</span>
              <p className="font-mono-data text-3xl font-bold text-foreground">$7,825</p>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(210, 100%, 50%)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="hsl(210, 100%, 50%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis
                dataKey="month"
                tick={{ fill: 'hsl(240, 5%, 55%)', fontSize: 11, fontFamily: 'JetBrains Mono' }}
                axisLine={{ stroke: 'rgba(255,255,255,0.08)' }}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: 'hsl(240, 5%, 55%)', fontSize: 11, fontFamily: 'JetBrains Mono' }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="value"
                stroke="hsl(210, 100%, 50%)"
                strokeWidth={2}
                fill="url(#areaGrad)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardSection;
