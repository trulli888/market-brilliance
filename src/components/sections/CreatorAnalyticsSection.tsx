import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts";

const stats = [
  { label: "Projects Launched", value: "14,200+", description: "Using our assets" },
  { label: "Countries Reached", value: "89", description: "Global distribution" },
  { label: "Avg. Time Saved", value: "120hrs", description: "Per project" },
  { label: "Return Clients", value: "78%", description: "Repeat acquisition rate" },
];

const chartData = [
  { name: "Q1'24", value: 2400 },
  { name: "Q2'24", value: 3200 },
  { name: "Q3'24", value: 4100 },
  { name: "Q4'24", value: 5800 },
  { name: "Q1'25", value: 6400 },
  { name: "Q2'25", value: 8200 },
];

const CreatorAnalyticsSection = () => {
  return (
    <section className="py-24 px-6 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <span className="text-data text-primary mb-3 block">Creator's Analytics</span>
          <h2 className="text-4xl font-semibold tracking-tighter" style={{ letterSpacing: '-0.03em' }}>
            Transparency is Our Currency
          </h2>
          <p className="text-muted-foreground mt-2 max-w-lg">
            Real metrics from real creators. See how our assets are performing in the field.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 mt-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl p-6 card-shadow bg-card"
            >
              <span className="text-data text-muted-foreground">{stat.label}</span>
              <p className="font-mono-data text-3xl font-bold text-foreground mt-2">{stat.value}</p>
              <p className="text-data text-muted-foreground mt-1">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl p-6 card-shadow bg-card"
        >
          <h3 className="text-sm font-medium mb-6">Successful Project Launches (Quarterly)</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chartData}>
              <XAxis
                dataKey="name"
                tick={{ fill: 'hsl(240, 5%, 55%)', fontSize: 11, fontFamily: 'JetBrains Mono' }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis hide />
              <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                {chartData.map((_, i) => (
                  <Cell key={i} fill={i === chartData.length - 1 ? 'hsl(210, 100%, 50%)' : 'hsl(240, 5%, 15%)'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
};

export default CreatorAnalyticsSection;
