import i1 from "@/assets/why choose us/Vector (32).png";
import i2 from "@/assets/why choose us/Vector (33).png";
import i3 from "@/assets/why choose us/Vector (34).png";
import i4 from "@/assets/why choose us/Vector (35).png";
import img2 from "@/assets/why choose us/image 14.png";
import img1 from "@/assets/why choose us/image 15.png";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

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

const iconAnimations = [
  { rotate: [0, 8, -8, 0], y: [0, -3, 0] },
  { rotate: [0, 180, 360], scale: [1, 0.88, 1] },
  { y: [0, -5, 0], scale: [1, 1.12, 1] },
  { rotate: [0, -10, 10, 0], scale: [1, 1.08, 1] },
];

const borderAnimations = [
  {
    background:
      "conic-gradient(from 0deg,transparent 8%,rgba(3,170,174,.95) 26%,rgba(255,255,255,.75) 32%,transparent 42%,transparent 72%,rgba(3,170,174,.45) 84%,transparent 94%)",
    rotate: [0, 360],
    scale: [1, 1.04, 1],
    duration: 10,
  },
  {
    background:
      "conic-gradient(from 180deg,rgba(3,170,174,.3),transparent 18%,rgba(255,255,255,.8) 29%,transparent 39%,rgba(3,170,174,.95) 61%,transparent 76%)",
    rotate: [360, 0],
    scale: [1.04, 1, 1.04],
    duration: 13,
  },
  {
    background:
      "repeating-conic-gradient(from 45deg,rgba(3,170,174,.9) 0deg 8deg,transparent 8deg 25deg,rgba(255,255,255,.5) 25deg 31deg,transparent 31deg 52deg)",
    rotate: [0, 180, 360],
    scale: [1, 1.06, 1],
    duration: 16,
  },
  {
    background:
      "conic-gradient(from 90deg,transparent 0 12%,rgba(255,255,255,.85) 18%,rgba(3,170,174,1) 26%,transparent 37% 58%,rgba(3,170,174,.6) 69%,transparent 81%)",
    rotate: [0, -180, -360],
    scale: [1.05, 1, 1.05],
    duration: 18,
  },
];

function FeatureCard({ icon, title, text, index }) {
  const border = borderAnimations[index];
  const rotateXValue = useMotionValue(0);
  const rotateYValue = useMotionValue(0);
  const rotateX = useSpring(rotateXValue, { stiffness: 170, damping: 22 });
  const rotateY = useSpring(rotateYValue, { stiffness: 170, damping: 22 });

  const handleMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    rotateXValue.set(y * -8);
    rotateYValue.set(x * 8);
  };

  const resetTilt = () => {
    rotateXValue.set(0);
    rotateYValue.set(0);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -45 : 45,
        y: 45,
        rotate: index % 2 === 0 ? -2 : 2,
        scale: 0.9,
      }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.85,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="[perspective:900px]"
    >
      <motion.article
        onMouseMove={handleMove}
        onMouseLeave={resetTilt}
        whileHover={{ y: -10, scale: 1.015 }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="group relative min-h-[190px] cursor-default overflow-hidden rounded-2xl p-px shadow-[0_16px_50px_rgba(0,0,0,.25)]"
      >
        <motion.span
          animate={{ rotate: border.rotate, scale: border.scale }}
          transition={{
            duration: border.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ background: border.background }}
          className="pointer-events-none absolute -inset-[70%] opacity-55 blur-[.2px] transition-opacity duration-700 group-hover:opacity-100"
        />
        <div className="absolute inset-px overflow-hidden rounded-[15px] bg-[#181a1a]">
          <span className="absolute inset-0 translate-y-full bg-[linear-gradient(145deg,rgba(3,170,174,.32),rgba(3,170,174,.09)_48%,rgba(255,255,255,.04))] transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0" />
          <motion.span
            animate={{ x: ["-140%", "180%"] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              repeatDelay: 3 + index,
              ease: "easeInOut",
            }}
            className="absolute -top-1/2 h-[200%] w-12 rotate-[24deg] bg-white/[.045] blur-lg"
          />
          <span className="absolute -bottom-20 -right-16 size-44 rounded-full bg-[#03AAAE]/0 blur-3xl transition-colors duration-700 group-hover:bg-[#03AAAE]/20" />
        </div>

        <div
          className="relative p-5 sm:p-6"
          style={{ transform: "translateZ(30px)" }}
        >
          <div className="relative size-14">
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 7 + index,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-1.5 rounded-full bg-[conic-gradient(from_0deg,transparent,#03AAAE,#ffffff90,transparent)] opacity-70 blur-[1px]"
            />
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="absolute inset-0 grid place-items-center overflow-hidden rounded-full border border-white/70 bg-[#03AAAE] shadow-[0_8px_28px_rgba(3,170,174,.3)]"
            >
              <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0" />
              <motion.img
                src={icon}
                alt=""
                animate={iconAnimations[index]}
                transition={{
                  duration: 3.6 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 size-6 object-contain brightness-0 invert transition-[filter] duration-500 group-hover:invert-0"
              />
            </motion.span>
          </div>
          <h3 className="mt-6 text-sm font-black uppercase tracking-wide text-white transition-colors duration-500 group-hover:text-[#6ff9fc]">
            {title}
          </h3>
          <p className="mt-3 text-xs leading-5 text-zinc-400 transition-colors duration-500 group-hover:text-white/85">
            {text}
          </p>
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45 + index * 0.12 }}
            className="mt-5 block h-px w-12 origin-left bg-[#03AAAE] transition-[width] duration-500 group-hover:w-full"
          />
        </div>
      </motion.article>
    </motion.div>
  );
}

export default function WhyCooseUs() {
  const ref = useRef();
  const [activeCard, setActiveCard] = useState(0);
  const [cardDirection, setCardDirection] = useState(1);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageOneY = useTransform(scrollYProgress, [0, 1], [90, -90]);
  const imageTwoY = useTransform(scrollYProgress, [0, 1], [-45, 65]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  const changeCard = (direction) => {
    setCardDirection(direction);
    setActiveCard(
      (current) => (current + direction + items.length) % items.length,
    );
  };

  const selectCard = (index) => {
    setCardDirection(index >= activeCard ? 1 : -1);
    setActiveCard(index);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCardDirection(1);
      setActiveCard((current) => (current + 1) % items.length);
    }, 4800);
    return () => window.clearInterval(timer);
  }, [activeCard]);

  const [activeIcon, activeTitle, activeText] = items[activeCard];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.75 }}
      className="relative overflow-hidden bg-black py-18 sm:py-20 lg:py-32"
    >
      <motion.div
        animate={{
          x: ["-20%", "65%", "-20%"],
          y: ["-10%", "45%", "-10%"],
          scale: [1, 1.35, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-0 top-0 size-[34rem] rounded-full bg-[#03AAAE]/[.08] blur-[110px]"
      />
      <motion.div
        animate={{ x: ["15%", "-45%", "15%"], y: ["25%", "-30%", "25%"] }}
        transition={{ duration: 36, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-0 right-0 size-[28rem] rounded-full bg-[#03AAAE]/[.07] blur-[120px]"
      />
      <motion.div
        animate={{ backgroundPosition: ["0px 0px", "48px 48px"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.018)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]"
      />

      <div className="relative mx-auto grid w-[calc(100%-2rem)] max-w-[1650px] items-center gap-16 sm:w-[calc(100%-2.5rem)] lg:grid-cols-[1.08fr_.92fr]">
        <div className="order-2 lg:order-1">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={{ visible: { transition: { staggerChildren: 0.16 } } }}
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 text-[.72rem] font-extrabold uppercase leading-4 tracking-[.16em] text-[#03AAAE]"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-px w-9 origin-left bg-[#03AAAE]"
              />
              Why choose us
            </motion.p>
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 48, skewY: 4, scale: 0.94 },
                visible: { opacity: 1, y: 0, skewY: 0, scale: 1 },
              }}
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
              className="font-freeman mt-5 text-[clamp(1.75rem,4vw,4rem)] font-normal leading-[1.02] tracking-tight text-white sm:text-[clamp(2.5rem,4vw,4rem)]"
            >
              Delivering <span className="text-[#03AAAE]">Value</span> at
              <br />
              Every Step
            </motion.h2>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.8 }}
              className="mt-5 max-w-xl text-sm leading-7 text-zinc-400"
            >
              Global insight, tailored thinking, and uncompromising quality come
              together to move your food business forward.
            </motion.p>
          </motion.div>

          <div className="relative mx-auto mt-10 min-h-[340px] w-full max-w-[620px] lg:hidden">
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute left-10 right-10 top-8 h-[220px] rotate-[-3deg] rounded-2xl border border-[#03AAAE]/20 bg-[#111]/80"
            />
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute left-5 right-5 top-4 h-[220px] rotate-[2deg] rounded-2xl border border-white/10 bg-[#151717]/90"
            />

            <AnimatePresence mode="popLayout" custom={cardDirection}>
              <motion.div
                key={activeTitle}
                custom={cardDirection}
                variants={{
                  enter: (direction) => ({
                    opacity: 0,
                    x: direction > 0 ? 110 : -110,
                    y: 35,
                    rotate: direction > 0 ? 6 : -6,
                    scale: 0.88,
                  }),
                  center: { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 },
                  exit: (direction) => ({
                    opacity: 0,
                    x: direction > 0 ? -130 : 130,
                    y: -25,
                    rotate: direction > 0 ? -7 : 7,
                    scale: 0.92,
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.75}
                onDragEnd={(_, info) => {
                  if (Math.abs(info.offset.x) > 55) {
                    changeCard(info.offset.x < 0 ? 1 : -1);
                  }
                }}
                className="relative cursor-grab touch-pan-y active:cursor-grabbing"
              >
                <FeatureCard
                  icon={activeIcon}
                  title={activeTitle}
                  text={activeText}
                  index={activeCard}
                />
                <motion.span
                  key={`card-progress-${activeCard}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 4.8, ease: "linear" }}
                  className="absolute bottom-0 left-4 right-4 z-20 h-0.5 origin-left bg-gradient-to-r from-[#03AAAE] via-white to-[#03AAAE]"
                />
              </motion.div>
            </AnimatePresence>

            <div className="relative mt-7 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => changeCard(-1)}
                aria-label="Previous benefit"
                className="group grid size-11 cursor-pointer place-items-center rounded-full border border-white/15 bg-white/[.04] text-xl text-white backdrop-blur-md transition-[border-color,background-color,transform] duration-500 hover:scale-110 hover:border-[#03AAAE] hover:bg-[#03AAAE]"
              >
                <span className="transition-transform duration-500 group-hover:-translate-x-1">
                  ←
                </span>
              </button>

              <div
                className="flex items-center gap-2"
                aria-label="Choose benefit"
              >
                {items.map(([, title], index) => (
                  <button
                    key={title}
                    type="button"
                    onClick={() => selectCard(index)}
                    aria-label={`Show ${title}`}
                    aria-current={activeCard === index ? "true" : undefined}
                    className={`h-2 cursor-pointer rounded-full transition-[width,background-color] duration-500 ${
                      activeCard === index
                        ? "w-9 bg-[#03AAAE]"
                        : "w-2 bg-white/25 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => changeCard(1)}
                aria-label="Next benefit"
                className="group grid size-11 cursor-pointer place-items-center rounded-full border border-white/15 bg-white/[.04] text-xl text-white backdrop-blur-md transition-[border-color,background-color,transform] duration-500 hover:scale-110 hover:border-[#03AAAE] hover:bg-[#03AAAE]"
              >
                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
            <p className="mt-3 text-center text-[.62rem] font-bold uppercase tracking-[.18em] text-white/35">
              Swipe or use controls · {activeCard + 1} / {items.length}
            </p>
          </div>

          <div className="mt-10 hidden grid-cols-2 gap-5 lg:grid">
            {items.map(([icon, title, text], index) => (
              <FeatureCard
                key={title}
                icon={icon}
                title={title}
                text={text}
                index={index}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-1 mx-auto grid h-[580px] w-full max-w-[650px] grid-cols-[1.08fr_.92fr] gap-4 sm:h-[680px] lg:order-2"
        >
          <motion.div
            style={{ y: imageOneY, rotate: imageRotate }}
            whileHover={{ scale: 1.025, rotate: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group relative mt-14 h-[470px] overflow-hidden rounded-[1.5rem] border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,.45)] sm:h-[570px]"
          >
            <motion.div
              animate={{
                x: ["-3.5%", "3%", "1%", "-3.5%"],
                y: ["3%", "-3.5%", "-1%", "3%"],
                rotate: [-0.8, 0.8, 0.2, -0.8],
                scale: [1, 1.035, 1],
              }}
              transition={{
                x: { duration: 14, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 11, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 17, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -inset-[7%]"
            >
              <img
                src={img1}
                alt="Chef creating food"
                className="h-full w-full scale-110 object-cover object-bottom transition-transform duration-1000 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.18]"
              />
            </motion.div>
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-[#03AAAE]/10" />
            <motion.span
              animate={{ y: ["-130%", "160%"] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -left-1/2 h-24 w-[200%] rotate-[-12deg] bg-white/[.07] blur-xl"
            />
          </motion.div>

          <motion.div style={{ y: imageTwoY }} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 55, scale: 0.88 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8, scale: 1.025 }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative h-[350px] overflow-hidden rounded-[1.5rem] border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,.45)] sm:h-[430px]"
            >
              <motion.div
                animate={{
                  x: ["3.5%", "-3%", "-1%", "3.5%"],
                  y: ["-3%", "3.5%", "1%", "-3%"],
                  rotate: [0.8, -0.8, -0.2, 0.8],
                  scale: [1.035, 1, 1.035],
                }}
                transition={{
                  x: { duration: 16, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 19, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 9, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute -inset-[7%]"
              >
                <img
                  src={img2}
                  alt="Prepared seafood"
                  className="h-full w-full scale-110 object-cover transition-transform duration-1000 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.18]"
                />
              </motion.div>
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-[#03AAAE]/10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 45, rotate: 3, scale: 0.88 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex min-h-[190px] flex-col justify-center overflow-hidden rounded-[1.5rem] border border-white/30 bg-[#03AAAE] p-5 text-white shadow-[0_20px_55px_rgba(3,170,174,.25)] sm:min-h-[215px] sm:p-7"
            >
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute -right-16 -top-20 size-56 rounded-full border-[28px] border-white/10"
              />
              <motion.span
                animate={{
                  scale: [0.8, 1.25, 0.8],
                  opacity: [0.12, 0.3, 0.12],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -bottom-16 -left-10 size-40 rounded-full bg-white blur-3xl"
              />
              <motion.span
                animate={{ x: ["-140%", "180%"] }}
                transition={{
                  duration: 4.8,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -top-1/2 h-[200%] w-16 rotate-[22deg] bg-white/15 blur-xl"
              />
              <motion.span
                animate={{
                  opacity: [0.2, 0.75, 0.2],
                  scale: [0.96, 1.04, 0.96],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute inset-1 rounded-[1.25rem] border border-white/35"
              />
              {[
                "left-[18%] top-[20%]",
                "right-[18%] top-[34%]",
                "bottom-[18%] right-[32%]",
              ].map((position, index) => (
                <motion.span
                  key={position}
                  animate={{
                    y: [0, -12 - index * 3, 0],
                    x: [0, index % 2 === 0 ? 5 : -5, 0],
                    opacity: [0.25, 0.9, 0.25],
                    scale: [0.7, 1.25, 0.7],
                  }}
                  transition={{
                    duration: 3.4 + index * 0.7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.45,
                  }}
                  className={`pointer-events-none absolute size-1.5 rounded-full bg-white shadow-[0_0_12px_white] ${position}`}
                />
              ))}
              <div className="relative mb-3 flex items-center gap-2 text-[.6rem] font-black uppercase tracking-[.18em] text-white/80">
                <motion.span
                  animate={{ scale: [1, 1.7, 1], opacity: [1, 0.35, 1] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="size-2 rounded-full bg-white shadow-[0_0_12px_white]"
                />
                Live impact
              </div>
              <motion.b
                initial={{ opacity: 0, y: 25, scale: 0.75 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                animate={{
                  textShadow: [
                    "0 0 0 rgba(255,255,255,0)",
                    "0 0 22px rgba(255,255,255,.42)",
                    "0 0 0 rgba(255,255,255,0)",
                  ],
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.25,
                  ease: [0.16, 1, 0.3, 1],
                  textShadow: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="relative text-4xl sm:text-5xl"
              >
                150+
              </motion.b>
              <p className="relative mt-2 text-xs leading-5 text-white/80 sm:text-sm">
                Community Townhalls
                <br />
                Hosted This Year
              </p>
              <span className="relative mt-5 h-px w-12 bg-white/70 transition-[width] duration-700 group-hover:w-full" />
            </motion.div>
          </motion.div>

          <motion.span
            animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -left-5 top-[45%] size-10 rounded-full border border-[#03AAAE]/60 bg-black/70 shadow-[0_0_30px_rgba(3,170,174,.35)] backdrop-blur-md"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
