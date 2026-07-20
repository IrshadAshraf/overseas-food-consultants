import p1 from "@/assets/team/professional female doctor scientist food safety expert in white lab coat, confident pose, dark stud.png";
import p2 from "@/assets/team/professional Indian male chef regulatory specialist in white chef coat, confident pose, dark studio.png";
import p3 from "@/assets/team/professional Asian female business strategy consultant, confident pose, dark professional background.png";
import p4 from "@/assets/team/professional male supply chain expert in business suit with glasses, confident pose, dark studio bac.png";
import Reveal from "@/ui/Reveal";
import { motion } from "framer-motion";
const team = [
  [p1, "Dr. Sarah Ahmed", "Food Safety Expert"],
  [p2, "Rahul Mehta", "Regulatory Specialist"],
  [p3, "Jessica Lee", "Market Strategy Consultant"],
  [p4, "David Wilson", "Supply Chain Expert"],
];
const stats = [
  ["25+", "Countries Served"],
  ["120+", "Projects Completed"],
  ["100+", "Happy Clients"],
  ["15+", "Years of Experience"],
];
export default function Team() {
  return (
    <div className="bg-black py-18 sm:py-20 lg:py-32">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1650px] sm:w-[calc(100%-2.5rem)]">
        <Reveal className="text-center">
          <p className="text-[.72rem] font-extrabold uppercase leading-4 tracking-[.14em] text-[#03AAAE]">
            Our team
          </p>
          <h2 className="mx-auto mt-4 max-w-lg font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-[clamp(1.75rem,4vw,4rem)] sm:text-[clamp(2.5rem,4vw,4rem)] font-black leading-[1.02] tracking-tight text-white">
            Meet Our Food
            <br />
            Industry Experts
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map(([img, name, role], i) => (
            <Reveal key={name} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -10, rotateY: i % 2 ? 2 : -2 }}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#1b1b1b]"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={img}
                    alt={name}
                    className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-110 group-hover:grayscale-0"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-black uppercase text-white">
                    {name}
                  </h3>
                  <p className="mt-1 text-xs text-[#03AAAE]">{role}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 grid gap-6 rounded-2xl border border-white/20 bg-[#03AAAE] px-8 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([num, label]) => (
            <div
              key={label}
              className="flex items-center justify-center gap-4 text-white"
            >
              <span className="size-2 rounded-full bg-white" />
              <span>
                <b className="block text-3xl">{num}</b>
                <small>{label}</small>
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </div>
  );
}
