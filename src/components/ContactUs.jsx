import Button from "@/ui/Button";
import ContactDialog from "@/ui/ContactDialog";
import Reveal from "@/ui/Reveal";
import { motion } from "framer-motion";
import { useState } from "react";
const backgroundRings = [
  ["-right-[18%] -top-[48%] size-[2280px]", 16, 5, 3],
  ["-right-[10%] -top-[30%] size-[1830px]", 14, -4, -3],
  ["-right-[2%] -top-[12%] size-[1410px]", 12, 4, 2],
  ["right-[8%] top-[8%] size-[990px]", 10, -3, -2],
  ["right-[16%] top-[25%] size-[615px]", 8, 2, 2],
];
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
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {backgroundRings.map(([position, duration, driftX, driftY], index) => (
            <motion.span
              key={position}
              animate={{
                x: ["0%", `${driftX}%`, "0%", `${-driftX}%`, "0%"],
                y: ["0%", `${driftY}%`, "0%", `${-driftY}%`, "0%"],
                rotate: [90, index % 2 === 0 ? 102 : 78, 90],
                scale: [1, 1.04 + index * 0.01, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.35,
              }}
              className={`absolute rounded-full border-[20px] border-[#0f5f62]/70 shadow-[inset_0_0_24px_rgba(5,42,44,.18),0_0_28px_rgba(5,42,44,.14)] ${position}`}
            />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#174f51]/80 via-[#174f51]/15 to-transparent" />
        <Reveal className="relative mx-auto flex w-[calc(100%-2rem)] max-w-[1650px] flex-col items-start justify-between gap-8 sm:w-[calc(100%-2.5rem)] md:flex-row md:items-center lg:px-12">
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
