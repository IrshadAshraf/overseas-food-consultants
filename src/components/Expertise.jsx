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
    <div className="bg-black py-18 sm:py-20 lg:py-32">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1650px] sm:w-[calc(100%-2.5rem)]">
        <Reveal className="text-center">
          <p className="text-[.72rem] font-extrabold uppercase leading-4 tracking-[.14em] text-[#03AAAE]">
            Our expertise
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-[clamp(1.5rem,4vw,4rem)] sm:text-[clamp(2.5rem,4vw,4rem)] font-black leading-[1.02] tracking-tight text-white">
            Comprehensive
            <br />
            Consulting Services
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {cards.map(([img, icon, title, text], i) => (
            <Reveal key={title} delay={i * 0.12}>
              <motion.article
                whileHover={{ y: -12, rotateY: i === 0 ? 2 : -2 }}
                className="group overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#1b1b1b]"
              >
                <div className="h-52 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.3 }}
                    src={img}
                    alt={title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="relative p-6 pt-12">
                  <span className="absolute -top-6 grid size-12 place-items-center rounded-full border-4 border-[#1b1b1b] bg-[#03AAAE]">
                    <img
                      src={icon}
                      alt=""
                      className="size-6 object-contain brightness-0"
                    />
                  </span>
                  <h3 className="max-w-xs text-lg font-black uppercase leading-6 text-white">
                    {title}
                  </h3>
                  <p className="mt-4 leading-6 text-zinc-500">{text}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
