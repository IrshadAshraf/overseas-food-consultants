import portrait from "@/assets/testimonials/professional female chef in dark kitchen working confidently with stainless steel equipment, dramati.png";
import avatar from "@/assets/testimonials/avatar-2.jpg (1).png";
import Reveal from "@/ui/Reveal";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";
const reviews = [
  {
    name: "Michael Brown",
    role: "CEO, FreshBite Foods",
    text: "Overseas Food Consultants transformed our food safety standards and helped us expand into global markets with confidence.",
  },
  {
    name: "Aisha Khan",
    role: "Founder, Harvest Table",
    text: "Their practical guidance brought clarity to our growth plan and helped our team build systems that truly last.",
  },
  {
    name: "Daniel Cho",
    role: "Operations Director",
    text: "A thoughtful, experienced team that understands both regulation and the realities of running a food business.",
  },
];
export default function Testimonials() {
  const [active, setActive] = useState(0);
  const r = reviews[active];
  return (
    <div className="bg-[#161616]">
      <div className="grid min-h-[500px] lg:grid-cols-[.43fr_.57fr]">
        <div className="relative hidden overflow-hidden lg:block">
          <motion.img
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            src={portrait}
            alt="Professional chef"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#161616]" />
        </div>
        <div className="flex items-center px-6 py-20 lg:px-16">
          <div className="w-full max-w-3xl">
            <Reveal>
              <p className="text-[.72rem] font-extrabold uppercase leading-4 tracking-[.14em] text-[#03AAAE]">
                Testimonials
              </p>
              <h2 className="mt-4 font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-[clamp(2.5rem,4vw,4rem)] font-black leading-[1.02] tracking-[-.025em] text-white">
                What Our Clients Say
              </h2>
            </Reveal>
            <AnimatePresence mode="wait">
              <motion.article
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                className="mt-9 rounded-2xl border border-white/8 bg-[#1b1b1b] p-7 md:p-9"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={avatar}
                    alt={r.name}
                    className="size-12 rounded-full border-2 border-[#03AAAE] object-cover"
                  />
                  <div>
                    <b className="text-sm text-white">{r.name}</b>
                    <span className="block text-xs text-zinc-500">
                      {r.role}
                    </span>
                    <div className="mt-1 flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="size-3 fill-[#03AAAE] text-[#03AAAE]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-sm italic leading-7 text-zinc-400">
                  “{r.text}”
                </p>
              </motion.article>
            </AnimatePresence>
            <div className="mt-6 flex gap-3">
              {reviews.map((_, i) => (
                <button
                  aria-label={`Show testimonial ${i + 1}`}
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-[#03AAAE]" : "w-2 bg-zinc-600"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
