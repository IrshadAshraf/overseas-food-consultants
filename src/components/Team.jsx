import p1 from "@/assets/team/professional female doctor scientist food safety expert in white lab coat, confident pose, dark stud.png";
import p2 from "@/assets/team/professional Indian male chef regulatory specialist in white chef coat, confident pose, dark studio.png";
import p3 from "@/assets/team/professional Asian female business strategy consultant, confident pose, dark professional background.png";
import p4 from "@/assets/team/professional male supply chain expert in business suit with glasses, confident pose, dark studio bac.png";
import { animate, motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

const team = [
  [p1, "Dr. Sarah Ahmed", "Food Safety Expert"],
  [p2, "Rahul Mehta", "Regulatory Specialist"],
  [p3, "Jessica Lee", "Market Strategy Consultant"],
  [p4, "David Wilson", "Supply Chain Expert"],
  [p3, "Maya Chen", "Sustainability Consultant"],
  [p4, "Omar Hassan", "Operations Strategist"],
  [p1, "Dr. Elena Rossi", "Quality Assurance Director"],
  [p2, "Arjun Patel", "Product Development Chef"],
  [p4, "Daniel Brooks", "Global Sourcing Advisor"],
  [p3, "Sophia Nguyen", "Consumer Insights Lead"],
  [p2, "Mateo Silva", "Compliance Auditor"],
  [p1, "Dr. Amina Yusuf", "Food Science Specialist"],
];

const stats = [
  [25, "Countries Served"],
  [120, "Projects Completed"],
  [100, "Happy Clients"],
  [15, "Years of Experience"],
];

const cardBorders = [
  "conic-gradient(from 0deg,transparent 12%,#03AAAE 26%,rgba(255,255,255,.7) 31%,transparent 40%,transparent 76%,rgba(3,170,174,.45) 88%,transparent 96%)",
  "conic-gradient(from 180deg,rgba(3,170,174,.35),transparent 20%,rgba(255,255,255,.75) 31%,transparent 42%,#03AAAE 66%,transparent 80%)",
  "conic-gradient(from 45deg,transparent 8%,rgba(3,170,174,.55) 21%,#03AAAE 28%,rgba(255,255,255,.7) 33%,transparent 43%,transparent 69%,rgba(3,170,174,.45) 82%,transparent 93%)",
  "conic-gradient(from 90deg,transparent 10%,rgba(255,255,255,.75) 18%,#03AAAE 27%,transparent 38% 62%,rgba(3,170,174,.55) 72%,transparent 84%)",
];

function AnimatedStat({ value, label, index }) {
  const ref = useRef();
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    const controls = animate(0, value, {
      duration: 1.8,
      delay: index * 0.12,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, index, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28, scale: 0.88 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.75,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -5, scale: 1.04 }}
      className="group relative flex min-w-0 items-center justify-center gap-2 text-white sm:gap-4"
    >
      <span className="relative grid size-3 place-items-center">
        <motion.span
          animate={{ scale: [1, 2.1, 1], opacity: [0.8, 0, 0.8] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.3 }}
          className="absolute inset-0 rounded-full border border-white"
        />
        <span className="size-2 rounded-full bg-white shadow-[0_0_12px_white]" />
      </span>
      <span>
        <b className="block text-2xl tabular-nums sm:text-4xl">
          {displayValue}+
        </b>
        <small className="block text-[.6rem] leading-4 text-white/75 transition-colors duration-500 group-hover:text-white sm:text-xs">
          {label}
        </small>
      </span>
    </motion.div>
  );
}

function TeamCard({ member, originalIndex, direction, position }) {
  const [img, name, role] = member;

  return (
    <motion.article
      layout="position"
      layoutId={name}
      initial={{
        opacity: 0,
        x: direction > 0 ? 90 : -90,
        y: 45,
        rotate: direction > 0 ? 3 : -3,
        scale: 0.9,
      }}
      animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
      transition={{
        layout: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
        duration: 0.75,
        delay: position * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -8 }}
      className="group relative min-w-0 shrink-0 basis-full transform-gpu overflow-hidden rounded-2xl p-px [backface-visibility:hidden] [perspective:900px] [will-change:transform] sm:basis-[calc(50%-8px)] lg:basis-[calc(25%-12px)]"
    >
      <motion.span
        animate={{ rotate: originalIndex % 2 === 0 ? [0, 360] : [360, 0] }}
        transition={{
          duration: 12 + originalIndex * 2,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ background: cardBorders[originalIndex % cardBorders.length] }}
        className="pointer-events-none absolute -inset-[70%] transform-gpu opacity-45 transition-opacity duration-700 [will-change:transform] group-hover:opacity-100"
      />
      <div className="relative transform-gpu overflow-hidden rounded-[15px] bg-[#1b1b1b] ring-1 ring-inset ring-white/10 [backface-visibility:hidden]">
        <div className="relative aspect-square w-full overflow-hidden border-b border-white/10">
          <motion.img
            src={img}
            alt={name}
            animate={{
              x: ["-1.5%", "1.5%", "-1.5%"],
              y: ["1%", "-1.5%", "1%"],
              scale: [1.04, 1.09, 1.04],
            }}
            transition={{
              x: {
                duration: 12 + originalIndex,
                repeat: Infinity,
                ease: "easeInOut",
              },
              y: {
                duration: 9 + originalIndex,
                repeat: Infinity,
                ease: "easeInOut",
              },
              scale: {
                duration: 8 + originalIndex,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="h-full w-full transform-gpu object-cover object-top transition-[filter] duration-700 [backface-visibility:hidden] [will-change:transform] group-hover:saturate-125"
          />
          <span className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#1b1b1b] via-transparent to-[#03AAAE]/5" />
          <motion.span
            animate={{ x: ["-150%", "190%"] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              repeatDelay: 3 + originalIndex,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -top-1/2 h-[200%] w-12 rotate-[22deg] bg-white/[.07] blur-lg"
          />
          <motion.span
            initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 + position * 0.08 }}
            className="absolute right-4 top-4 grid size-9 place-items-center rounded-full border border-white/15 bg-black/35 text-[.65rem] font-black text-white/70 backdrop-blur-md"
          >
            0{originalIndex + 1}
          </motion.span>
        </div>

        <div className="relative overflow-hidden p-4">
          <span className="absolute inset-0 translate-y-full bg-[#03AAAE]/15 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0" />
          <motion.h3
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.18 + position * 0.08 }}
            className="relative text-sm font-black uppercase text-white"
          >
            {name}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.26 + position * 0.08 }}
            className="relative mt-1 text-xs text-[#03AAAE] transition-colors duration-500 group-hover:text-[#70f7fa]"
          >
            {role}
          </motion.p>
          <span className="relative mt-4 block h-px w-10 bg-[#03AAAE] transition-[width] duration-700 group-hover:w-full" />
        </div>
        <span className="pointer-events-none absolute inset-0 z-20 rounded-[15px] ring-1 ring-inset ring-white/[.08]" />
      </div>
    </motion.article>
  );
}

export default function Team() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const orderedTeam = useMemo(
    () => [...team.slice(active), ...team.slice(0, active)],
    [active],
  );

  const changeSlide = (step) => {
    setDirection(step);
    setActive((current) => (current + step + team.length) % team.length);
  };

  const selectSlide = (index) => {
    setDirection(index >= active ? 1 : -1);
    setActive(index);
  };

  useEffect(() => {
    if (paused) return undefined;
    const timer = window.setTimeout(() => {
      setDirection(1);
      setActive((current) => (current + 1) % team.length);
    }, 5600);
    return () => window.clearTimeout(timer);
  }, [active, paused]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.75 }}
      className="relative overflow-hidden bg-black py-18 sm:py-20 lg:py-32"
    >
      <motion.span
        animate={{
          x: ["-20%", "75%", "-20%"],
          y: ["-25%", "45%", "-25%"],
          scale: [0.8, 1.4, 0.8],
        }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-0 top-0 size-[30rem] rounded-full bg-[#03AAAE]/[.065] blur-[120px]"
      />
      <motion.div
        animate={{ backgroundPosition: ["0px 0px", "52px 52px"] }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,.045)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_80%,transparent)]"
      />

      <div className="relative mx-auto w-[calc(100%-2rem)] max-w-[1650px] sm:w-[calc(100%-2.5rem)]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="text-center"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: -24, letterSpacing: ".35em" },
              visible: { opacity: 1, y: 0, letterSpacing: ".14em" },
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[.72rem] font-extrabold uppercase leading-4 tracking-[.14em] text-[#03AAAE]"
          >
            Our team
          </motion.p>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 48, skewY: 4, scale: 0.92 },
              visible: { opacity: 1, y: 0, skewY: 0, scale: 1 },
            }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-4 max-w-lg font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-[clamp(1.75rem,4vw,4rem)] font-black leading-[1.02] tracking-tight text-white sm:text-[clamp(2.5rem,4vw,4rem)]"
          >
            Meet Our Food
            <br />
            Industry <span className="text-[#03AAAE]">Experts</span>
          </motion.h2>
          <motion.span
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              visible: { scaleX: 1, opacity: 1 },
            }}
            transition={{ duration: 0.9 }}
            className="mx-auto mt-5 block h-px w-24 bg-gradient-to-r from-transparent via-[#03AAAE] to-transparent"
          />
        </motion.div>

        <div
          role="region"
          aria-label="Team carousel"
          tabIndex={0}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget))
              setPaused(false);
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") changeSlide(-1);
            if (event.key === "ArrowRight") changeSlide(1);
          }}
          className="relative mt-12 outline-none sm:px-12 lg:px-14"
        >
          <motion.button
            type="button"
            onClick={() => changeSlide(-1)}
            whileHover={{ scale: 1.12, x: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous team member"
            className="absolute -left-3 top-1/2 z-30 grid size-9 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-white/15 bg-black/70 text-white shadow-xl backdrop-blur-xl transition-colors duration-500 hover:border-[#03AAAE] hover:bg-[#03AAAE] sm:left-0"
          >
            <ArrowLeft className="size-4" />
          </motion.button>

          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7}
            onDragStart={() => setPaused(true)}
            onDragEnd={(_, info) => {
              if (Math.abs(info.offset.x) > 55)
                changeSlide(info.offset.x < 0 ? 1 : -1);
              setPaused(false);
            }}
            className="flex cursor-grab touch-pan-y gap-4 overflow-hidden px-1 py-6 active:cursor-grabbing"
          >
            {orderedTeam.map((member, position) => {
              const originalIndex = team.findIndex(
                (item) => item[1] === member[1],
              );
              return (
                <TeamCard
                  key={member[1]}
                  member={member}
                  originalIndex={originalIndex}
                  direction={direction}
                  position={position}
                />
              );
            })}
          </motion.div>

          <motion.button
            type="button"
            onClick={() => changeSlide(1)}
            whileHover={{ scale: 1.12, x: 3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next team member"
            className="absolute -right-3 top-1/2 z-30 grid size-9 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-white/15 bg-black/70 text-white shadow-xl backdrop-blur-xl transition-colors duration-500 hover:border-[#03AAAE] hover:bg-[#03AAAE] sm:right-0"
          >
            <ArrowRight className="size-4" />
          </motion.button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {team.map(([, name], index) => (
            <button
              key={name}
              type="button"
              onClick={() => selectSlide(index)}
              aria-label={`Show ${name}`}
              aria-current={active === index ? "true" : undefined}
              className={`h-2 cursor-pointer rounded-full transition-[width,background-color] duration-500 ${active === index ? "w-10 bg-[#03AAAE]" : "w-2 bg-white/25 hover:bg-white/60"}`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 55, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-10 grid grid-cols-2 gap-5 overflow-hidden rounded-2xl border border-white/25 bg-[#03AAAE] px-3 py-7 sm:gap-7 sm:px-8 md:grid-cols-4"
        >
          <motion.span
            animate={{ x: ["-120%", "180%"] }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              repeatDelay: 2.5,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -top-1/2 h-[200%] w-20 rotate-[22deg] bg-white/15 blur-xl"
          />
          <motion.span
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute -right-20 -top-24 size-64 rounded-full border-[34px] border-white/10"
          />
          {stats.map(([value, label], index) => (
            <AnimatedStat
              key={label}
              value={value}
              label={label}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
