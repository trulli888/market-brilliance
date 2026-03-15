import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle, Loader2 } from "lucide-react";

const EmailCaptureSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setErrorMsg("");

    const { error } = await supabase
      .from("email_signups")
      .insert({ email: email.trim() });

    if (error) {
      setStatus("error");
      setErrorMsg(error.message.includes("duplicate")
        ? "You're already on the list."
        : "Something went wrong. Try again.");
    } else {
      setStatus("success");
      setEmail("");
    }
  };

  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative max-w-2xl mx-auto"
      >
        <div className="rounded-2xl border border-border bg-card p-10 md:p-14 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6"
          >
            <Mail className="w-7 h-7 text-primary" />
          </motion.div>

          <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-3 tracking-tight">
            Stay Ahead of the Market
          </h2>
          <p className="text-muted-foreground font-mono text-sm md:text-base mb-8">
            Get notified when new premium assets drop.
          </p>

          {status === "success" ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center justify-center gap-3 py-4 text-primary font-mono"
            >
              <CheckCircle className="w-5 h-5" />
              <span>You're in. Welcome to the Vault.</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-secondary border-border font-mono text-sm placeholder:text-muted-foreground"
              />
              <Button
                type="submit"
                disabled={status === "loading"}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono font-semibold px-6 whitespace-nowrap"
              >
                {status === "loading" ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  "Join the Vault"
                )}
              </Button>
            </form>
          )}

          {status === "error" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-destructive text-sm font-mono mt-3"
            >
              {errorMsg}
            </motion.p>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default EmailCaptureSection;
