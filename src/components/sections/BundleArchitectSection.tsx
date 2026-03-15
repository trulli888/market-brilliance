import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, X, ShoppingBag } from "lucide-react";

const availableAssets = [
  { id: "1", name: "Enterprise UI System", price: 189 },
  { id: "2", name: "Geometric Icon Library", price: 79 },
  { id: "3", name: "Minimal Brand Toolkit", price: 249 },
  { id: "4", name: "Dashboard Template Pro", price: 149 },
  { id: "5", name: "3D Asset Collection", price: 299 },
  { id: "6", name: "Motion Graphics Pack", price: 129 },
];

const BundleArchitectSection = () => {
  const [bundle, setBundle] = useState<string[]>([]);

  const addToBundle = (id: string) => {
    if (!bundle.includes(id) && bundle.length < 3) {
      setBundle([...bundle, id]);
    }
  };

  const removeFromBundle = (id: string) => {
    setBundle(bundle.filter((b) => b !== id));
  };

  const bundledAssets = availableAssets.filter((a) => bundle.includes(a.id));
  const total = bundledAssets.reduce((s, a) => s + a.price, 0);
  const discount = bundle.length >= 3 ? 0.25 : bundle.length >= 2 ? 0.15 : 0;
  const discountedTotal = total * (1 - discount);

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
          <span className="text-data text-primary mb-3 block">Bundle Architect</span>
          <h2 className="text-4xl font-semibold tracking-tighter" style={{ letterSpacing: '-0.03em' }}>
            Build Your Portfolio
          </h2>
          <p className="text-muted-foreground mt-2">Select up to 3 assets. More items = bigger discount.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Asset picker */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
            {availableAssets.map((asset) => {
              const inBundle = bundle.includes(asset.id);
              return (
                <motion.button
                  key={asset.id}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => inBundle ? removeFromBundle(asset.id) : addToBundle(asset.id)}
                  className={`p-4 rounded-xl text-left transition-all duration-200 ${
                    inBundle ? 'bg-primary/10 card-shadow border border-primary/20' : 'bg-card card-shadow hover:card-shadow-hover'
                  } ${!inBundle && bundle.length >= 3 ? 'opacity-40 cursor-not-allowed' : ''}`}
                  disabled={!inBundle && bundle.length >= 3}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">{asset.name}</p>
                      <p className="font-mono-data text-primary mt-1">${asset.price}</p>
                    </div>
                    {inBundle ? (
                      <X className="w-4 h-4 text-primary" />
                    ) : (
                      <Plus className="w-4 h-4 text-muted-foreground" />
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Bundle summary */}
          <div className="rounded-2xl card-shadow bg-card p-6 h-fit sticky top-8">
            <div className="flex items-center gap-2 mb-6">
              <ShoppingBag className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Your Bundle</span>
              <span className="text-data text-muted-foreground ml-auto">{bundle.length}/3</span>
            </div>

            <div className="space-y-3 mb-6 min-h-[120px]">
              <AnimatePresence mode="popLayout">
                {bundledAssets.map((asset) => (
                  <motion.div
                    key={asset.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center justify-between p-3 rounded-lg bg-secondary"
                  >
                    <span className="text-sm truncate">{asset.name}</span>
                    <span className="font-mono-data text-xs text-muted-foreground">${asset.price}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
              {bundle.length === 0 && (
                <p className="text-data text-muted-foreground text-center py-8">Select assets to build your bundle</p>
              )}
            </div>

            {bundle.length > 0 && (
              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Subtotal</span>
                  <span className="font-mono-data">${total}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-sm text-data-up">
                    <span>Bundle Discount</span>
                    <span className="font-mono-data">-{Math.round(discount * 100)}%</span>
                  </div>
                )}
                <div className="flex justify-between text-lg font-semibold pt-2">
                  <span>Total</span>
                  <span className="font-mono-data text-primary">${Math.round(discountedTotal)}</span>
                </div>
              </div>
            )}

            <button
              disabled={bundle.length === 0}
              className="w-full mt-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm transition-all duration-200 hover:scale-[1.02] card-shadow disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Acquire Bundle
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BundleArchitectSection;
