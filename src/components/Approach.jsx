import i1 from "@/assets/approach/Vector (28).png";
import i2 from "@/assets/approach/Vector (29).png";
import i3 from "@/assets/approach/Vector (30).png";
import i4 from "@/assets/approach/Vector (31).png";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
const steps = [
  [i1, "01", "Understand", "We analyze your business challenges and goals."],
  [
    i2,
    "02",
    "Strategize",
    "We develop a tailored strategy to achieve your objectives.",
  ],
  [
    i3,
    "03",
    "Implement",
    "We execute with precision and industry best practices.",
  ],
  [i4, "04", "Optimize", "We continuously monitor for long-term success."],
];
const backgroundRings = [
  ["-right-[18%] -top-[48%] size-[2280px]", 16, 5, 3],
  ["-right-[10%] -top-[30%] size-[1830px]", 14, -4, -3],
  ["-right-[2%] -top-[12%] size-[1410px]", 12, 4, 2],
  ["right-[8%] top-[8%] size-[990px]", 10, -3, -2],
  ["right-[16%] top-[25%] size-[615px]", 8, 2, 2],
];
export default function Approach() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActiveStep((current) => (current + 1) % steps.length),
      4200,
    );

    return () => window.clearInterval(timer);
  }, []);

  const [activeIcon, activeNumber, activeTitle, activeText] = steps[activeStep];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative overflow-hidden bg-[#03AAAE] py-20"
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
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
      <div className="relative mx-auto grid w-[calc(100%-2rem)] max-w-[1650px] gap-14 sm:w-[calc(100%-2.5rem)] lg:grid-cols-[.75fr_1.25fr] lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.16 } },
          }}
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, x: -34, letterSpacing: ".35em" },
              visible: { opacity: 1, x: 0, letterSpacing: ".14em" },
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[.72rem] font-extrabold uppercase leading-4 tracking-[.14em] text-[#37e5e9]"
          >
            Our approach
          </motion.p>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 45, skewY: 4, scale: 0.94 },
              visible: { opacity: 1, y: 0, skewY: 0, scale: 1 },
            }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="font-freeman mt-4 text-[clamp(1.75rem,4vw,4rem)] md:text-[clamp(2.5rem,4vw,4rem)] font-normal leading-[1.02] tracking-tight text-white"
          >
            A Proven Process for Success
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="mt-5 max-w-md text-sm leading-7 text-white/90"
          >
            We follow a systematic approach to deliver measurable results for
            your food business at every stage.
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 70, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto min-h-[380px] w-full max-w-[640px] lg:hidden"
        >
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.82 }}
            whileInView={{ opacity: 1, y: 0, scale: 0.92 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute left-10 right-10 top-8 h-[300px] rounded-[2rem] border border-white/10 bg-black/10 shadow-xl sm:h-[330px]"
          />
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.86 }}
            whileInView={{ opacity: 1, y: 0, scale: 0.96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute left-5 right-5 top-4 h-[300px] rounded-[2rem] border border-white/15 bg-white/[.08] shadow-xl sm:h-[330px]"
          />

          <AnimatePresence mode="wait">
            <motion.article
              key={activeTitle}
              initial={{ opacity: 0, y: 58, rotate: 1.5, scale: 0.88 }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, y: -36, rotate: -1.5, scale: 0.92 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex h-[300px] flex-col items-center overflow-hidden rounded-[2rem] border border-white/25 bg-black/20 p-6 text-center shadow-[0_24px_60px_rgba(9,59,61,.28)] backdrop-blur-xl sm:h-[330px] sm:p-8"
            >
              <motion.span
                initial={{ x: "-120%" }}
                animate={{ x: "150%" }}
                transition={{ duration: 1.25, ease: "easeInOut" }}
                className="pointer-events-none absolute -top-16 h-[150%] w-16 rotate-[24deg] bg-white/10 blur-xl"
              />
              <span className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-8xl leading-none text-white/[.06] sm:text-9xl">
                {activeNumber}
              </span>
              <div className="relative mx-auto">
                <div className="relative size-16">
                  <motion.span
                    animate={{ rotate: [0, 360], scale: [0.94, 1.1, 0.94] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-2 rounded-full bg-[conic-gradient(from_0deg,transparent,#ffffff80,transparent,#03AAAE,transparent)]"
                  />
                  <span className="absolute inset-0 grid place-items-center rounded-full border-[3px] border-white bg-[#22adb1] shadow-[0_10px_28px_rgba(0,0,0,.2)]">
                    <motion.img
                      key={activeIcon}
                      initial={{ scale: 0.4, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                      src={activeIcon}
                      className="size-7 brightness-0 invert"
                      alt=""
                    />
                  </span>
                </div>
              </div>

              <div className="relative mx-auto mt-auto max-w-md">
                <p className="mb-2 text-[.65rem] font-black uppercase tracking-[.2em] text-[#58f4f7]">
                  Step {activeNumber}
                </p>
                <h3 className="text-2xl font-bold text-white">{activeTitle}</h3>
                <p className="mt-3 text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
                  {activeText}
                </p>
              </div>

              <motion.span
                key={`progress-${activeStep}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 4.2, ease: "linear" }}
                className="absolute bottom-0 left-0 h-1 w-full origin-left bg-gradient-to-r from-white via-[#69f7fa] to-white"
              />
            </motion.article>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.7, ease: "easeOut" }}
            className="mt-5 flex flex-col items-center gap-3 px-2 text-center"
          >
            <div className="flex gap-2" aria-label="Choose process step">
              {steps.map(([, , title], index) => (
                <button
                  key={title}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  aria-label={`Show ${title} step`}
                  aria-current={activeStep === index ? "step" : undefined}
                  className={`h-2 cursor-pointer rounded-full transition-[width,background-color,opacity] duration-500 ${
                    activeStep === index
                      ? "w-9 bg-white"
                      : "w-2 bg-white/45 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>
            <p className="text-[.65rem] font-bold uppercase tracking-[.16em] text-white/75">
              Next · {steps[(activeStep + 1) % steps.length][2]}
            </p>
          </motion.div>
        </motion.div>

        <div className="relative hidden grid-cols-4 gap-3 lg:grid">
          <motion.span
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            animate={{ backgroundPositionX: ["0px", "32px"] }}
            transition={{
              scaleX: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.7 },
              backgroundPositionX: {
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="pointer-events-none absolute left-[10%] right-[10%] top-7 hidden h-px origin-left bg-[repeating-linear-gradient(90deg,rgba(255,255,255,.45)_0_7px,transparent_7px_14px)] lg:block"
          />
          {steps.map(([icon, num, title, text], i) => (
            <motion.div
              className="relative text-center"
              key={title}
              initial={{
                opacity: 0,
                x: i % 2 === 0 ? -35 : 35,
                y: i % 2 === 0 ? 42 : -28,
                rotate: i % 2 === 0 ? -3 : 3,
                scale: 0.88,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.9,
                delay: 0.2 + i * 0.14,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <motion.article
                whileHover={{
                  y: -8,
                  scale: 1.025,
                }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="group relative min-h-[210px] transform-gpu overflow-hidden rounded-2xl px-2 py-4 sm:px-4"
              >
                <span className="pointer-events-none absolute inset-0 origin-bottom scale-y-0 bg-[linear-gradient(to_top,rgba(0,0,0,.24),rgba(255,255,255,.08))] ring-1 ring-inset ring-white/0 backdrop-blur-sm transition-[transform,box-shadow] duration-700 ease-in-out group-hover:scale-y-100 group-hover:ring-white/15" />
                <span className="pointer-events-none absolute -bottom-20 left-1/2 size-40 -translate-x-1/2 scale-50 rounded-full bg-[#03AAAE]/25 blur-2xl transition-transform duration-700 group-hover:-translate-y-16 group-hover:scale-125" />
                <motion.div className="relative mx-auto size-14">
                  <motion.span
                    animate={
                      [
                        { rotate: [0, 360], scale: [1, 1.08, 1] },
                        { rotate: [0, -360], opacity: [0.35, 0.8, 0.35] },
                        { y: [0, -7, 0], scale: [0.92, 1.12, 0.92] },
                        { rotate: [0, 180, 360], scale: [1.1, 0.95, 1.1] },
                      ][i]
                    }
                    transition={{
                      duration: [6, 7, 4.5, 8][i],
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.35,
                    }}
                    className={`absolute -inset-2 rounded-full ${
                      [
                        "bg-[conic-gradient(from_0deg,transparent,#fff6,transparent,#03AAAE,transparent)]",
                        "bg-[conic-gradient(from_180deg,#ffffff55,transparent_35%,#03AAAE_70%,transparent)]",
                        "bg-[radial-gradient(circle,rgba(255,255,255,.42),rgba(3,170,174,.2)_45%,transparent_70%)]",
                        "bg-[conic-gradient(from_90deg,transparent_15%,#03AAAE_45%,#ffffff55_55%,transparent_80%)]",
                      ][i]
                    }`}
                  />
                  <span className="absolute inset-0 z-10 grid place-items-center overflow-hidden rounded-full border-[3px] border-white bg-[#22adb1] shadow-lg transition-[transform,background-color,box-shadow] duration-500 ease-in-out group-hover:rotate-6 group-hover:scale-110 group-hover:bg-white group-hover:shadow-[0_12px_30px_rgba(0,0,0,.25)]">
                    <span className="absolute inset-0 translate-y-full bg-[#03AAAE] transition-transform duration-700 group-hover:translate-y-0" />
                    <motion.img
                      animate={{
                        rotate: i % 2 === 0 ? [0, 5, -5, 0] : [0, -5, 5, 0],
                        scale: [1, 1.08, 1],
                      }}
                      transition={{
                        duration: 3.5 + i * 0.35,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      src={icon}
                      className="relative z-10 size-6 brightness-0 invert"
                      alt=""
                    />
                  </span>
                </motion.div>
                <span className="relative mt-4 block text-xs font-black text-white/60 transition-colors duration-500 group-hover:text-white/80">
                  {num}
                </span>
                <h3 className="relative text-sm font-bold text-white transition-transform duration-500 group-hover:translate-y-0.5">
                  {title}
                </h3>
                <p className="relative mt-3 text-xs leading-5 text-white/90 transition-colors duration-500 group-hover:text-white">
                  {text}
                </p>
              </motion.article>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
