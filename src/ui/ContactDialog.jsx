import Dialog from "@/ui/Dialog";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export default function ContactDialog({ open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      eyebrow="Start a conversation"
      title="Let’s grow your food business."
      description="Tell us what you are building and our consulting team will help you find the clearest next step."
      className="max-w-lg"
    >
      <div className="space-y-3">
        {[
          [
            Mail,
            "mailto:info@overseasfoodconsultants.com",
            "info@overseasfoodconsultants.com",
          ],
          [Phone, "tel:+15101234567", "+1 (510) 123-4567"],
        ].map(([Icon, href, label], index) => (
          <motion.a
            key={href}
            href={href}
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.02] p-4 transition-colors duration-300 hover:border-[#03AAAE]/60 hover:bg-[#03AAAE]/10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#03AAAE]/15 text-[#03AAAE] transition duration-300 group-hover:bg-[#03AAAE] group-hover:text-white">
              <Icon className="size-5" />
            </span>
            <span className="break-all text-sm text-zinc-200">{label}</span>
          </motion.a>
        ))}
      </div>
    </Dialog>
  );
}
