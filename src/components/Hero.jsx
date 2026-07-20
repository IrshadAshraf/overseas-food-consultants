import hero from "@/assets/hero/image 1 (1).png";
import icon1 from "@/assets/hero/Vector (15).png";
import icon2 from "@/assets/hero/Vector (16).png";
import icon3 from "@/assets/hero/Vector (17).png";
import icon4 from "@/assets/hero/Vector (18).png";
import Button from "@/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const badges = [
  [
    icon1,
    "Food Businesses",
    "Excellence",
    "right-[2%] top-[26%] xl:right-[16.5%] xl:top-[27.5%]",
  ],
  [
    icon2,
    "Quality",
    "Assurance",
    "right-0 top-[41%] xl:right-[5.8%] xl:top-[42.5%]",
  ],
  [
    icon3,
    "Regulatory",
    "Compliance",
    "right-[2%] top-[56%] xl:right-[16.5%] xl:top-[57.5%]",
  ],
  [
    icon4,
    "Research &",
    "Innovation",
    "right-0 top-[71%] xl:right-[4%] xl:top-[72.5%]",
  ],
];
export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  return (
    <div
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden bg-black lg:min-h-[875px]"
    >
      <motion.img
        style={{ y }}
        src={hero}
        alt="Fresh food prepared for global food consulting"
        className="absolute inset-0 h-full w-full scale-[1.01] object-cover object-center opacity-95"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.96)_0%,rgba(0,0,0,.78)_29%,rgba(0,0,0,.28)_58%,rgba(0,0,0,.04)_82%),linear-gradient(0deg,rgba(0,0,0,.7)_0%,transparent_42%,rgba(0,0,0,.15)_100%)]" />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1650px] items-center px-6 pb-16 pt-32 lg:min-h-[875px] lg:px-10 lg:pb-10 lg:pt-36">
        <div className="max-w-[650px] md:max-w-[52%] lg:max-w-[650px]">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3 text-[.72rem] font-extrabold uppercase leading-4 tracking-[.14em] text-[#03AAAE] before:h-px before:w-8 before:bg-[#03AAAE]"
          >
            Accessibility solutions
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="mt-8 font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-[42px] font-black leading-[.94] tracking-[-.025em] text-white sm:text-[72px] md:text-[54px] lg:text-[82px] xl:text-[92px]"
          >
            Global <span className="block text-[#03AAAE]">Expertise Food</span>
            <span className="block">Industry</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 max-w-lg text-base leading-8 text-zinc-400 sm:text-lg"
          >
            Indulge in handcrafted dishes, fresh ingredients, and an
            unforgettable dining experience in a warm and elegant atmosphere.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-8 flex gap-3 sm:gap-5"
          >
            <Button
              icon={false}
              variant="connect"
              to="/#contact-us"
              className="min-w-[225px] text-base shadow-[0_18px_45px_rgba(3,170,174,.28)]"
            >
              Reserve a Table
            </Button>
            <Button
              variant="ghost"
              to="/#expertise"
              className="min-w-[180px] border-white/25 bg-black/20 py-[17px] text-base shadow-[inset_0_1px_0_rgba(255,255,255,.12)] backdrop-blur-md"
            >
              View Menu
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 z-20 hidden md:block">
        {badges.map(([icon, title, sub, position], i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.15 }}
            whileHover={{ x: -10, scale: 1.04 }}
            className={`${position} absolute flex h-[68px] w-[210px] items-center gap-3 rounded-2xl border border-[#03AAAE]/35 bg-black/10 px-3.5 shadow-[0_18px_45px_rgba(0,0,0,.3)] backdrop-blur-md lg:h-[74px] lg:w-[230px] lg:px-4 xl:h-[80px] xl:w-[260px] xl:gap-4 xl:px-5`}
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#24b2b8] shadow-[0_8px_24px_rgba(3,170,174,.25)] lg:size-12 xl:size-14">
              <img
                src={icon}
                alt=""
                className="size-5 object-contain brightness-0 invert lg:size-6 xl:size-7"
              />
            </span>
            <span>
              <b className="block text-xs text-white lg:text-sm xl:text-[15px]">
                {title}
              </b>
              <small className="text-xs text-zinc-400 xl:text-sm">{sub}</small>
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
