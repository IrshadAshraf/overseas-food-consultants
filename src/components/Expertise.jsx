import img1 from "@/assets/expertise/food safety laboratory scientists in white coats inspecting food samples, clinical clean environment.png";
import img2 from "@/assets/expertise/regulatory compliance documents legal books gavel scales of justice food industry, dark moody office.png";
import img3 from "@/assets/expertise/market research analytics data visualization charts graphs on screen food industry strategy, dark te.png";
import img4 from "@/assets/expertise/food product development chef creating innovative dishes modern kitchen laboratory, creative culinar.png";
import img5 from "@/assets/expertise/supply chain logistics warehouse food distribution aerial view trucks conveyor belts, industrial dar.png";
import img6 from "@/assets/expertise/supply chain logistics warehouse food distribution aerial view trucks conveyor belts, industrial dar (1).png";

import icon1 from "@/assets/expertise/Vector (23).png";
import icon2 from "@/assets/expertise/Vector (24).png";
import icon3 from "@/assets/expertise/Vector (25).png";
import icon4 from "@/assets/expertise/Vector (26).png";
import icon5 from "@/assets/expertise/Vector (27).png";
import Reveal from "@/ui/Reveal";
import { motion } from "framer-motion";
const cards = [
  [
    img1,
    icon1,
    "Food Safety & Quality Assurance",
    "Ensuring highest standards of food safety and quality compliance worldwide.",
  ],
  [
    img2,
    icon2,
    "Regulatory & Compliance",
    "Guidance on regulations and compliance worldwide for food businesses.",
  ],
  [
    img3,
    icon3,
    "Market Research & Strategy",
    "Market insights and strategies to grow your food business competitively.",
  ],
  [
    img4,
    icon4,
    "PRODUCT DEVELOPMENT & INNOVATION",
    "Innovative solutions for new products and optimization strategies.",
  ],
  [
    img5,
    icon5,
    "SUPPLY CHAIN &OPERATIONS",
    "Optimizing supply chains for efficiency and quality excellence.",
  ],
  [
    img6,
    icon2,
    "AUDIT & CERTIFICATION SUPPORT",
    "End-to-end support for ISO 22000, HACCP, FSSC 22000, BRCGS, and other food industry certifications.",
  ],
];
export default function Expertise() {
  return (
    <div className="relative overflow-hidden bg-black py-18 sm:py-20 lg:py-32">
      <motion.span
        animate={{ x: ["-15%", "55%", "-15%"], y: ["-20%", "35%", "-20%"], scale: [1, 1.25, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-0 top-0 size-[420px] rounded-full bg-[#03AAAE]/8 blur-[110px]"
      />
      <motion.span
        animate={{ x: ["20%", "-55%", "20%"], y: ["25%", "-20%", "25%"], scale: [0.9, 1.2, 0.9] }}
        transition={{ duration: 23, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="pointer-events-none absolute bottom-0 right-0 size-[520px] rounded-full bg-cyan-400/5 blur-[130px]"
      />
      <motion.div
        animate={{ opacity: [0.12, 0.25, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(3,170,174,.12)_1px,transparent_1px)] [background-size:42px_42px] [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]"
      />
      <div className="relative z-10 mx-auto w-[calc(100%-2rem)] max-w-[1650px] sm:w-[calc(100%-2.5rem)]">
        <Reveal className="text-center">
          <p className="text-[.72rem] font-extrabold uppercase leading-4 tracking-[.14em] text-[#03AAAE]">
            Our expertise
          </p>
          <h2 className="font-freeman mx-auto mt-4 max-w-2xl text-[clamp(1.5rem,4vw,4rem)] sm:text-[clamp(2.5rem,4vw,4rem)] font-normal leading-[1.02] tracking-tight text-white">
            Comprehensive
            <br />
            Consulting Services
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 items-start gap-3 [perspective:1400px] sm:items-stretch sm:gap-7 lg:grid-cols-3">
          {cards.map(([img, icon, title, text], i) => {
            const reveal = [
              { opacity: 0, x: -65, rotateY: 8 },
              { opacity: 0, y: 70, scale: 0.88 },
              { opacity: 0, x: 65, rotateY: -8 },
            ][i % 3];
            return (
              <motion.article
                key={title}
                initial={reveal}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotateY: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.78,
                  delay: (i % 3) * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                  scale: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                  rotateX: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                  rotateY: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                }}
                whileHover={{
                  scale: 1.01,
                  rotateX: 0.7,
                  rotateY: i % 2 === 0 ? 1.2 : -1.2,
                  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                }}
                className="group relative h-full transform-gpu overflow-hidden rounded-[1.25rem] p-px shadow-[0_20px_55px_rgba(0,0,0,.24)] transition-shadow duration-700 ease-in-out [backface-visibility:hidden] [transform-style:preserve-3d] will-change-transform hover:shadow-[0_30px_85px_rgba(3,170,174,.18)] sm:rounded-[1.75rem]"
              >
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="pointer-events-none absolute inset-[-120%] transform-gpu bg-[conic-gradient(from_90deg,transparent_0deg,transparent_260deg,#03AAAE_305deg,#7cecee_325deg,transparent_360deg)] opacity-55 will-change-transform"
                />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1.25rem-1px)] bg-[#1b1b1b] ring-1 ring-inset ring-white/[.06] sm:rounded-[calc(1.75rem-1px)]">
                  <div className="relative aspect-[183/101] w-full shrink-0 overflow-hidden">
                    <motion.img
                      src={img}
                      alt={title}
                      className="h-full w-full transform-gpu object-cover transition-transform duration-900 ease-in-out [backface-visibility:hidden] will-change-transform group-hover:scale-[1.08]"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b] via-transparent to-transparent opacity-70 transition-opacity duration-700 ease-in-out group-hover:opacity-25" />
                    <span className="absolute inset-0 bg-[#03AAAE]/0 mix-blend-color transition-colors duration-700 ease-in-out group-hover:bg-[#03AAAE]/20" />
                  </div>
                  <div className="relative flex-1 p-4 pb-5 pt-10 sm:p-8 sm:pt-16">
                    <span className="pointer-events-none absolute inset-0 origin-bottom scale-y-0 transform-gpu bg-[linear-gradient(145deg,rgba(3,170,174,.20),rgba(3,170,174,.05)_55%,transparent)] transition-transform duration-900 ease-in-out will-change-transform group-hover:scale-y-100" />
                    <span className="pointer-events-none absolute -bottom-24 -left-24 size-64 scale-50 transform-gpu rounded-full bg-[#03AAAE]/20 blur-3xl transition-transform duration-1000 ease-in-out will-change-transform group-hover:translate-x-20 group-hover:-translate-y-20 group-hover:scale-125" />
                    <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 transform-gpu bg-gradient-to-r from-transparent via-white/[.06] to-transparent transition-transform duration-[1200ms] ease-in-out will-change-transform group-hover:translate-x-[520%]" />
                    <motion.span
                      animate={{ y: [0, -4, 0], rotate: [0, 4, -3, 0], scale: [1, 1.06, 1] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.22 }}
                      className="absolute -top-5 left-4 z-10 grid size-10 transform-gpu place-items-center rounded-full border-[3px] border-[#1b1b1b] bg-[#27b2b7] shadow-[0_10px_28px_rgba(0,0,0,.3)] will-change-transform sm:-top-8 sm:left-8 sm:size-16 sm:border-[5px]"
                    >
                      <img
                        src={icon}
                        alt=""
                        className="size-5 object-contain brightness-0 sm:size-7"
                      />
                    </motion.span>
                    <h3 className="relative z-10 max-w-sm text-xs font-bold uppercase leading-5 text-white transition-transform duration-700 ease-in-out group-hover:translate-x-1 sm:text-xl sm:leading-8 xl:text-2xl">
                      {title}
                    </h3>
                    <p className="relative z-10 mt-3 text-[11px] leading-5 text-zinc-500 transition-[transform,color] duration-700 ease-in-out group-hover:translate-x-1 group-hover:text-zinc-200 sm:mt-4 sm:text-base sm:leading-8 xl:text-lg">
                      {text}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
