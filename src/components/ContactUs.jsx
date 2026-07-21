import approachBackground from "@/assets/approach/background aproach.jpg";
import Button from "@/ui/Button";
import ContactDialog from "@/ui/ContactDialog";
import Reveal from "@/ui/Reveal";
import { motion } from "framer-motion";
import { useState } from "react";
export default function ContactUs() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="relative overflow-hidden bg-[#03AAAE] py-16">
        <motion.div
          initial={{ opacity: 0, scale: 1.08 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,#236d70_0%,#249b9e_48%,#39c8cc_100%)]"
        />
        <motion.img
          src={approachBackground}
          alt=""
          animate={{
            x: ["0%", "-3%", "0%", "3%", "0%"],
            y: ["-3%", "0%", "3%", "0%", "-3%"],
            rotate: [0, 3, 0, -3, 0],
            scale: [1.06, 1.12, 1.06],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-[28%] -top-[30%] h-[160%] w-[92%] origin-center rounded-full object-cover object-right opacity-45 mix-blend-soft-light sm:w-[78%] md:w-[68%]"
        />
        <motion.img
          src={approachBackground}
          alt=""
          animate={{
            x: ["0%", "3%", "0%", "-3%", "0%"],
            y: ["3%", "0%", "-3%", "0%", "3%"],
            rotate: [0, -4, 0, 4, 0],
            scale: [1.16, 1.08, 1.16],
            opacity: [0.08, 0.16, 0.08],
          }}
          transition={{ duration: 33, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-[34%] -top-[18%] h-[136%] w-[82%] origin-center rounded-full object-cover object-right mix-blend-screen blur-[1px] sm:w-[68%] md:w-[58%]"
        />
        <motion.div
          animate={{
            x: ["0%", "-4%", "0%", "4%", "0%"],
            y: ["-4%", "0%", "4%", "0%", "-4%"],
            scale: [1, 1.12, 1],
          }}
          transition={{ duration: 27, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-[24%] -top-1/2 h-[180%] w-[70%] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,.14),transparent_65%)] blur-3xl"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#174f51]/80 via-[#174f51]/15 to-transparent" />
        <Reveal className="relative mx-auto flex w-[calc(100%-2rem)] max-w-[1650px] flex-col items-start justify-between gap-8 sm:w-[calc(100%-2.5rem)] md:flex-row md:items-center">
          <div className="flex items-center gap-6">
            <span className="grid size-16 shrink-0 place-items-center rounded-full border-2 border-white text-lg font-black text-white">
              OFC
            </span>
            <div>
              <h2 className="font-freeman text-sm font-normal text-white sm:text-xl lg:text-3xl">
                Ready to Elevate Your Food Business?
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-white/60">
                Let’s work together to create a safer, more successful, and
                sustainable future.
              </p>
            </div>
          </div>
          <motion.div whileHover={{ y: -6, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative overflow-hidden rounded-full p-px shadow-2xl">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-[150%] bg-[conic-gradient(from_90deg,transparent_0deg,transparent_245deg,white_290deg,#03AAAE_325deg,transparent_360deg)]"
            />
            <Button
              variant="dark"
              onClick={() => setOpen(true)}
              className="relative min-w-48 border-0 text-xs uppercase"
            >
              Let’s connect
            </Button>
          </motion.div>
        </Reveal>
      </div>
      <ContactDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}
