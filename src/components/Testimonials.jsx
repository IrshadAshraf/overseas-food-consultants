import portrait from "@/assets/testimonials/professional female chef in dark kitchen working confidently with stainless steel equipment, dramati.png";
import avatar from "@/assets/testimonials/avatar-2.jpg (1).png";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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

function DesktopReviewCard({ review }) {
  return (
    <motion.article
      className="h-[142px] w-[calc(66.6667%_-_10.6667px)] shrink-0 rounded-2xl border border-white/[.07] bg-[#1b1b1b] p-5 shadow-[0_16px_45px_rgba(0,0,0,.18)] transition-[border-color,background-color,box-shadow] duration-300 hover:border-[#03AAAE]/35 hover:bg-[#1d2020] hover:shadow-[0_18px_50px_rgba(3,170,174,.1)]"
    >
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={review.name}
          className="size-9 shrink-0 rounded-full border-2 border-[#03AAAE] object-cover"
        />
        <div className="min-w-0">
          <b className="block truncate text-xs text-white">{review.name}</b>
          <span className="block truncate text-[10px] text-zinc-500">
            {review.role}
          </span>
          <div className="mt-1 flex gap-0.5">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className="size-3 fill-[#03AAAE] text-[#03AAAE]"
              />
            ))}
          </div>
        </div>
      </div>
      <p className="mt-3 line-clamp-3 text-[11px] italic leading-4 text-zinc-400">
        “{review.text}”
      </p>
    </motion.article>
  );
}

export default function Testimonials() {
  const sectionRef = useRef();
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const r = reviews[active];
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [45, -45]);

  const changeReview = (step) => {
    setDirection(step);
    setActive((current) =>
      (current + step + reviews.length) % reviews.length,
    );
  };

  const selectReview = (index) => {
    setDirection(index >= active ? 1 : -1);
    setActive(index);
  };

  useEffect(() => {
    if (paused) return undefined;

    const timer = window.setTimeout(() => {
      setDirection(1);
      setActive((current) => (current + 1) % reviews.length);
    }, 5200);

    return () => window.clearTimeout(timer);
  }, [active, paused]);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-[#161616]"
    >
      <motion.span
        animate={{ x: ["-20%", "80%", "-20%"], y: ["-30%", "50%", "-30%"], scale: [0.8, 1.35, 0.8] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-0 top-0 size-[28rem] rounded-full bg-[#03AAAE]/[.07] blur-[110px]"
      />
      <motion.span
        animate={{ x: ["20%", "-60%", "20%"], y: ["25%", "-20%", "25%"] }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-0 right-0 size-[24rem] rounded-full bg-[#03AAAE]/[.055] blur-[120px]"
      />
      <motion.div
        animate={{ backgroundPosition: ["0px 0px", "42px 42px"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,.055)_1px,transparent_1px)] [background-size:42px_42px] [mask-image:linear-gradient(to_right,transparent,black_35%,black_80%,transparent)]"
      />
      <div className="relative grid min-h-[500px] lg:grid-cols-[.43fr_.57fr]">
        <div className="relative hidden overflow-hidden lg:block">
          <motion.div
            style={{ y: portraitY }}
            className="absolute -inset-y-[14%] inset-x-0 transform-gpu"
          >
            <motion.img
              initial={{ opacity: 0, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{
                opacity: { duration: 1 },
                filter: { duration: 1.1 },
              }}
              src={portrait}
              alt="Professional chef"
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
          <div className="pointer-events-none absolute inset-0 bg-[#071b1a]/15 mix-blend-multiply" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(22,22,22,.03)_38%,rgba(22,22,22,.32)_60%,rgba(22,22,22,.82)_78%,rgba(22,22,22,.98)_90%,#161616_96%,#161616_100%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(22,22,22,.24)_0%,transparent_22%,transparent_72%,rgba(22,22,22,.58)_100%)]" />
          <motion.span
            animate={{ y: ["-140%", "170%"] }}
            transition={{ duration: 6, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
            className="pointer-events-none absolute -left-1/2 h-28 w-[200%] rotate-[-12deg] bg-white/[.045] blur-xl"
          />
        </div>
        <div className="flex items-center px-6 py-12 sm:py-14 lg:py-16 lg:pl-4 lg:pr-0">
          <div className="w-full max-w-3xl lg:max-w-none">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={{ visible: { transition: { staggerChildren: 0.16 } } }}
            >
              <motion.p
                variants={{ hidden: { opacity: 0, x: -45, letterSpacing: ".3em" }, visible: { opacity: 1, x: 0, letterSpacing: ".14em" } }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 text-[.72rem] font-extrabold uppercase leading-4 tracking-[.14em] text-[#03AAAE]"
              >
                <motion.span
                  animate={{ scale: [0.75, 1.35, 0.75], opacity: [0.04, 0.16, 0.04] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                  className="pointer-events-none absolute -bottom-24 -right-16 size-64 rounded-full bg-[#03AAAE] blur-3xl"
                />
                <motion.span
                  variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
                  transition={{ duration: 0.8 }}
                  className="h-px w-9 origin-left bg-[#03AAAE]"
                />
                Testimonials
              </motion.p>
              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 45, skewY: 4, scale: 0.94 },
                  visible: { opacity: 1, y: 0, skewY: 0, scale: 1 },
                }}
                transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                className="font-freeman mt-4 text-[clamp(2.5rem,4vw,4rem)] font-normal leading-[1.02] tracking-[-.025em] text-white"
              >
                What Our <span className="text-[#03AAAE]">Clients</span> Say
              </motion.h2>
              <motion.span
                variants={{ hidden: { scaleX: 0, opacity: 0 }, visible: { scaleX: 1, opacity: 1 } }}
                transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="mt-5 block h-px w-24 origin-left bg-gradient-to-r from-[#03AAAE] to-transparent"
              />
            </motion.div>
            <div
              role="region"
              aria-label="Client reviews carousel"
              tabIndex={0}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocus={() => setPaused(true)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setPaused(false);
                }
              }}
              onKeyDown={(event) => {
                if (event.key === "ArrowLeft") changeReview(-1);
                if (event.key === "ArrowRight") changeReview(1);
              }}
              className="relative mx-auto mt-9 w-full max-w-xl outline-none lg:hidden"
            >
              <div className="pointer-events-none absolute inset-x-5 top-5 h-full rounded-2xl border border-white/5 bg-white/[.025]" />
              <div className="pointer-events-none absolute inset-x-2 top-2.5 h-full rounded-2xl border border-white/[.06] bg-white/[.02]" />
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.article
                key={active}
                custom={direction}
                variants={{
                  enter: (step) => ({
                    opacity: 0,
                    x: step > 0 ? 90 : -90,
                    y: 28,
                    rotate: step > 0 ? 2.5 : -2.5,
                    scale: 0.94,
                  }),
                  center: { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 },
                  exit: (step) => ({
                    opacity: 0,
                    x: step > 0 ? -100 : 100,
                    y: -18,
                    rotate: step > 0 ? -2.5 : 2.5,
                    scale: 0.96,
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.75}
                onDragStart={() => setPaused(true)}
                onDragEnd={(_, info) => {
                  if (Math.abs(info.offset.x) > 55) {
                    changeReview(info.offset.x < 0 ? 1 : -1);
                  }
                  setPaused(false);
                }}
                transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
                className="relative cursor-grab touch-pan-y overflow-hidden rounded-2xl border border-white/8 bg-[#1b1b1b]/95 p-7 shadow-[0_24px_65px_rgba(0,0,0,.3)] backdrop-blur-xl active:cursor-grabbing md:p-9"
              >
                <motion.span
                  initial={{ x: "-150%" }}
                  animate={{ x: "190%" }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="pointer-events-none absolute -top-1/2 h-[200%] w-14 rotate-[22deg] bg-white/[.035] blur-lg"
                />
                <motion.div
                  animate={{ y: [0, -7, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="pointer-events-none absolute right-7 top-7 z-10"
                >
                  <Quote className="size-14 text-[#03AAAE]/15" />
                </motion.div>
                <div className="relative z-10 flex items-center gap-4">
                  <div className="relative size-12 shrink-0">
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                      className="absolute -inset-1 rounded-full bg-[conic-gradient(from_0deg,transparent,#03AAAE,#fff,transparent)]"
                    />
                    <motion.img
                      initial={{ scale: 0.55, rotate: -20 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                      src={avatar}
                      alt={r.name}
                      className="absolute inset-0 size-12 rounded-full border-2 border-[#161616] object-cover"
                    />
                  </div>
                  <div>
                    <motion.b
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.55, delay: 0.18 }}
                      className="text-sm text-white"
                    >
                      {r.name}
                    </motion.b>
                    <motion.span
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.55, delay: 0.25 }}
                      className="block text-xs text-zinc-500"
                    >
                      {r.role}
                    </motion.span>
                    <div className="mt-1 flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0, rotate: -45 }}
                          animate={{
                            opacity: 1,
                            scale: [1, 1.25, 1],
                            rotate: 0,
                          }}
                          transition={{
                            opacity: { duration: 0.35, delay: 0.3 + i * 0.08 },
                            rotate: { duration: 0.45, delay: 0.3 + i * 0.08 },
                            scale: { duration: 2.4, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" },
                          }}
                        >
                          <Star className="size-3 fill-[#03AAAE] text-[#03AAAE]" />
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
                <motion.p
                  initial={{ opacity: 0, y: 25, filter: "blur(7px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 mt-6 text-sm italic leading-7 text-zinc-400"
                >
                  “{r.text}”
                </motion.p>
                <motion.span
                  key={`testimonial-progress-${active}-${paused}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: paused ? 0 : 1 }}
                  transition={{ duration: paused ? 0.3 : 5.2, ease: "linear" }}
                  className="absolute bottom-0 left-0 z-20 h-0.5 w-full origin-left bg-gradient-to-r from-[#03AAAE] via-[#70f7fa] to-[#03AAAE]"
                />
              </motion.article>
            </AnimatePresence>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mt-7 flex w-full max-w-xl items-center justify-between gap-4 lg:hidden"
            >
              <button
                type="button"
                onClick={() => changeReview(-1)}
                aria-label="Previous testimonial"
                className="group grid size-10 cursor-pointer place-items-center rounded-full border border-white/10 bg-white/[.03] text-white transition-[transform,background-color,border-color] duration-500 hover:scale-110 hover:border-[#03AAAE] hover:bg-[#03AAAE]"
              >
                <ArrowLeft className="size-4 transition-transform duration-500 group-hover:-translate-x-0.5" />
              </button>
              <div className="flex gap-3">
              {reviews.map((_, i) => (
                <button
                  aria-label={`Show testimonial ${i + 1}`}
                  key={i}
                  onClick={() => selectReview(i)}
                  aria-current={i === active ? "true" : undefined}
                  className={`h-2 cursor-pointer rounded-full transition-all duration-500 ${i === active ? "w-9 bg-[#03AAAE]" : "w-2 bg-zinc-600 hover:bg-zinc-400"}`}
                />
              ))}
              </div>
              <button
                type="button"
                onClick={() => changeReview(1)}
                aria-label="Next testimonial"
                className="group grid size-10 cursor-pointer place-items-center rounded-full border border-white/10 bg-white/[.03] text-white transition-[transform,background-color,border-color] duration-500 hover:scale-110 hover:border-[#03AAAE] hover:bg-[#03AAAE]"
              >
                <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-0.5" />
              </button>
            </motion.div>
            <div
              role="region"
              aria-label="Client reviews carousel"
              tabIndex={0}
              onFocus={() => setPaused(true)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setPaused(false);
                }
              }}
              onKeyDown={(event) => {
                if (event.key === "ArrowLeft") changeReview(-1);
                if (event.key === "ArrowRight") changeReview(1);
              }}
              className="mt-9 hidden w-full overflow-hidden outline-none lg:block"
            >
              <div className="relative h-[142px]">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={active}
                    custom={direction}
                    initial={{ x: direction > 0 ? "67%" : "-67%" }}
                    animate={{ x: "0%" }}
                    exit={{ x: direction > 0 ? "-67%" : "67%" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.35}
                    onDragStart={() => setPaused(true)}
                    onDragEnd={(_, info) => {
                      if (Math.abs(info.offset.x) > 55) {
                        changeReview(info.offset.x < 0 ? 1 : -1);
                      }
                      setPaused(false);
                    }}
                    className="absolute inset-x-0 top-0 flex cursor-grab gap-4 active:cursor-grabbing"
                  >
                    {[0, 1].map((offset) => {
                      const review = reviews[(active + offset) % reviews.length];
                      return (
                        <DesktopReviewCard
                          key={`${active}-${review.name}`}
                          review={review}
                        />
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="mt-5 flex gap-2">
                {reviews.map((_, index) => (
                  <button
                    type="button"
                    key={index}
                    onClick={() => selectReview(index)}
                    aria-label={`Show testimonial ${index + 1}`}
                    aria-current={index === active ? "true" : undefined}
                    className={`h-1.5 cursor-pointer rounded-full transition-all duration-500 ${index === active ? "w-7 bg-[#03AAAE]" : "w-1.5 bg-zinc-600 hover:bg-zinc-400"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
