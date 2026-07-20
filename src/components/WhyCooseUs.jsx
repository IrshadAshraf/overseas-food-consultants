import i1 from "@/assets/why choose us/Vector (32).png";
import i2 from "@/assets/why choose us/Vector (33).png";
import i3 from "@/assets/why choose us/Vector (34).png";
import i4 from "@/assets/why choose us/Vector (35).png";
import img2 from "@/assets/why choose us/image 14.png";
import img1 from "@/assets/why choose us/image 15.png";
import Reveal from "@/ui/Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
const items = [
  [
    i1,
    "Global Expertise",
    "In-depth knowledge of food industry trends, regulations, and opportunities worldwide.",
  ],
  [
    i2,
    "Customized Solutions",
    "Practical solutions tailored to your business goals and specific market needs.",
  ],
  [
    i3,
    "Innovative Approach",
    "Leveraging innovation and data-driven insights for competitive advantage.",
  ],
  [
    i4,
    "Commitment to Quality",
    "Upholding the highest standards in food safety, quality, and compliance.",
  ],
];
export default function WhyCooseUs() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  return (
    <div ref={ref} className="overflow-hidden bg-black py-18 sm:py-20 lg:py-32">
      <div className="mx-auto grid w-[calc(100%-2rem)] max-w-[1650px] gap-14 sm:w-[calc(100%-2.5rem)] lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <Reveal>
            <p className="text-[.72rem] font-extrabold uppercase leading-4 tracking-[.14em] text-[#03AAAE]">
              Why choose us
            </p>
            <h2 className="mt-5 font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-[clamp(1.75rem,4vw,4rem)] sm:text-[clamp(2.5rem,4vw,4rem)] font-black leading-[1.02] tracking-tight text-white">
              Delivering Value at
              <br />
              Every Step
            </h2>
          </Reveal>
          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {items.map(([icon, title, text], i) => (
              <Reveal key={title} delay={i * 0.08}>
                <motion.article
                  whileHover={{ y: -8, rotateX: 3 }}
                  className="relative min-h-40 overflow-hidden rounded-xl border border-white/5 bg-[#191919] p-5 transition-colors duration-300 hover:border-[#03AAAE]/60 hover:bg-[#03AAAE]/10 hover:shadow-[0_20px_55px_rgba(3,170,174,.12)]"
                >
                  <span className="grid size-12 place-items-center rounded-full border border-white bg-[#03AAAE]">
                    <img
                      src={icon}
                      alt=""
                      className="size-6 object-contain brightness-0 invert"
                    />
                  </span>
                  <h3 className="mt-5 text-sm font-black uppercase text-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-xs leading-5 text-zinc-300">{text}</p>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
        <motion.div style={{ y }} className="grid h-135 grid-cols-2 gap-4">
          <img
            src={img1}
            alt="Chef creating food"
            className="mt-14 h-115 w-full rounded-xl object-bottom"
          />
          <div className="space-y-4">
            <img
              src={img2}
              alt="Prepared seafood"
              className="h-86.25 w-full rounded-xl object-cover"
            />
            <div className="flex flex-col justify-center min-h-50 rounded-xl bg-[#03AAAE] p-7 text-white">
              <b className="text-5xl">150+</b>
              <p className="mt-2 text-sm text-white/80">
                Community Townhalls
                <br />
                Hosted This Year
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
