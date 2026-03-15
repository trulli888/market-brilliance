import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavigationBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span className="font-semibold text-sm tracking-tight">VAULT</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Assets", "Intelligence", "Bundles", "Etsy Store"].map((item) => (
            <a key={item} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden md:block px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium transition-all duration-200 hover:scale-[1.02]">
            Enter Vault
          </button>
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t border-border glass"
        >
          <div className="px-6 py-4 space-y-3">
            {["Assets", "Intelligence", "Bundles", "Etsy Store"].map((item) => (
              <a key={item} href="#" className="block text-sm text-muted-foreground hover:text-foreground">
                {item}
              </a>
            ))}
            <button className="w-full mt-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium">
              Enter Vault
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default NavigationBar;
