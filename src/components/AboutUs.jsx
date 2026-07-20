import i1 from "@/assets/about us/Vector (20).png";
import i2 from "@/assets/about us/Vector (21).png";
import i3 from "@/assets/about us/Vector (22).png";
import Button from "@/ui/Button";
import Reveal from "@/ui/Reveal";
import { motion } from "framer-motion";
const features = [
  [
    i1,
    "Global Experience",
    "Years of experience across diverse markets and food sectors worldwide.",
  ],
  [
    i2,
    "Tailored Solutions",
    "Customized strategies designed to meet your unique challenges and goals.",
  ],
  [
    i3,
    "Sustainable Growth",
    "Driving long-term value through innovation and best practices.",
  ],
];
export default function AboutUs() {
  return (
    <div className="bg-[#151515] py-18 sm:py-20 lg:py-32">
      <div className="mx-auto grid w-[calc(100%-2rem)] max-w-[1650px] items-center gap-14 sm:w-[calc(100%-2.5rem)] lg:grid-cols-[.8fr_1.2fr]">
        <Reveal>
          <p className="text-[.72rem] font-extrabold uppercase leading-4 tracking-[.14em] text-[#03AAAE]">
            Elevating your food business
          </p>
          <h2 className="mt-5 font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-[clamp(1.5rem,3vw,4rem)] sm:text-[clamp(2rem,3vw,4rem)] md:text-[clamp(2.5rem,3vw,4rem)] font-black leading-[1.02] tracking-tight text-white">
            Your Partner in Food Industry Success
          </h2>
          <p className="mt-5 max-w-xl text-[.92rem] leading-7 text-[#92929d]">
            We provide expert advice and technical guidance to food businesses
            worldwide. From food safety to market strategy, we help you achieve
            operational excellence and sustainable growth.
          </p>
          <Button className="mt-7" to="/#why-choose-us">
            About us
          </Button>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {features.map(([icon, title, text], i) => (
            <Reveal key={title} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -10, rotateX: 3, rotateY: i === 1 ? 0 : 3 }}
                className="relative min-h-60 md:min-h-70 lg:min-h-85 xl:min-h-70 overflow-hidden rounded-2xl border border-white/8 bg-[#191919] p-7 transition-colors duration-300 hover:border-[#03AAAE]/70 hover:bg-[#03AAAE]/10 hover:shadow-[0_20px_60px_rgba(3,170,174,.12)]"
              >
                <span className="grid size-12 place-items-center rounded-full border border-[#03AAAE] bg-[#03AAAE]/5">
                  <img className="size-6 object-contain" src={icon} alt="" />
                </span>
                <h3 className="mt-6 font-bold text-white">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-zinc-500">{text}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
