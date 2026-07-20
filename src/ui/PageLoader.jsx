import logo from "@/assets/navbar/image 9.png";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Globe2, Sparkles } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const stages = [
  [0, "Preparing your experience"],
  [32, "Connecting global expertise"],
  [68, "Curating food insights"],
  [92, "Ready to explore"],
];

export default function PageLoader({ onComplete }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const finished = useRef(false);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const glowX = useSpring(pointerX, { stiffness: 75, damping: 22 });
  const glowY = useSpring(pointerY, { stiffness: 75, damping: 22 });

  const finishLoading = useCallback(() => {
    if (finished.current) return;
    finished.current = true;
    setProgress(100);
    setLoading(false);
    onComplete?.();
  }, [onComplete]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const startedAt = performance.now();
    const duration = 1900;

    const timer = window.setInterval(() => {
      const elapsed = performance.now() - startedAt;
      const ratio = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - ratio, 3);
      setProgress(Math.round(eased * 100));
      if (ratio === 1) {
        window.clearInterval(timer);
        window.setTimeout(finishLoading, 260);
      }
    }, 32);

    return () => {
      window.clearInterval(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [finishLoading]);

  useEffect(() => {
    if (!loading) document.body.style.overflow = "";
  }, [loading]);

  const status = [...stages]
    .reverse()
    .find(([threshold]) => progress >= threshold)?.[1];

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          role="status"
          aria-live="polite"
          aria-label={`${status}, ${progress}%`}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.035,
            filter: "blur(12px)",
            clipPath: "inset(49.8% 0 49.8% 0)",
          }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          onPointerMove={(event) => {
            pointerX.set(event.clientX - 230);
            pointerY.set(event.clientY - 230);
          }}
          className="fixed inset-0 z-[200] cursor-progress overflow-hidden bg-[#050707] text-white"
        >
          <motion.div
            style={{ x: glowX, y: glowY }}
            className="pointer-events-none absolute left-0 top-0 size-[460px] rounded-full bg-[#03AAAE]/15 blur-[100px]"
          />
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.12, 1] }}
            transition={{ rotate: { duration: 38, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
            className="pointer-events-none absolute -right-40 -top-40 size-[34rem] rounded-full border border-[#03AAAE]/10 shadow-[inset_0_0_100px_rgba(3,170,174,.06)] sm:-right-24 sm:-top-48 sm:size-[46rem]"
          />
          <motion.div
            animate={{ backgroundPosition: ["0px 0px", "48px 48px"] }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute inset-0 opacity-[.055] [background-image:linear-gradient(rgba(255,255,255,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.4)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]"
          />

          <div className="relative mx-auto flex h-full w-full max-w-[1650px] flex-col justify-between px-5 py-6 sm:px-9 sm:py-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-between"
            >
              <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.24em] text-white/45 sm:text-[10px]">
                <Globe2 className="size-4 text-[#03AAAE]" />
                Global food consulting
              </span>
              <button
                type="button"
                onClick={finishLoading}
                className="group flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-3 py-2 text-[9px] font-bold uppercase tracking-[.18em] text-white/60 backdrop-blur-xl transition duration-300 hover:border-[#03AAAE]/50 hover:bg-[#03AAAE]/10 hover:text-white sm:px-4"
              >
                Skip
                <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>

            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.72, rotate: -12 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.06 }}
                className="group relative grid size-32 place-items-center sm:size-40"
              >
                {[0, 1, 2].map((ring) => (
                  <motion.span
                    key={ring}
                    animate={{ rotate: ring % 2 ? -360 : 360 }}
                    transition={{ duration: 7 + ring * 4, repeat: Infinity, ease: "linear" }}
                    className={`absolute rounded-full border border-[#03AAAE]/20 ${ring === 0 ? "inset-0 border-dashed" : ring === 1 ? "inset-3 border-white/10" : "inset-6 border-dotted"}`}
                  >
                    <span className="absolute left-1/2 top-0 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6ff9fc] shadow-[0_0_14px_#03AAAE]" />
                  </motion.span>
                ))}
                <motion.span
                  animate={{ scale: [1, 1.16, 1], opacity: [0.35, 0.05, 0.35] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-7 rounded-full bg-[#03AAAE] blur-xl"
                />
                <img
                  src={logo}
                  alt="Overseas Food Consultants"
                  className="relative z-10 size-20 rounded-full object-contain drop-shadow-[0_0_24px_rgba(3,170,174,.3)] sm:size-24"
                />
                <motion.span
                  animate={{ x: [-40, 38], y: [28, -34], opacity: [0, 1, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 0.8 }}
                  className="absolute z-20 text-[#6ff9fc]"
                >
                  <Sparkles className="size-4" />
                </motion.span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.42 }}
                className="mt-7 text-[10px] font-extrabold uppercase tracking-[.34em] text-[#03AAAE] sm:text-xs"
              >
                Overseas Food Consultants
              </motion.p>
              <div className="mt-4 h-7 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={status}
                    initial={{ opacity: 0, y: 14, filter: "blur(5px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -14, filter: "blur(5px)" }}
                    transition={{ duration: 0.35 }}
                    className="text-sm text-white/55 sm:text-base"
                  >
                    {status}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mx-auto w-full max-w-xl"
            >
              <div className="mb-3 flex items-end justify-between">
                <span className="text-[9px] font-bold uppercase tracking-[.22em] text-white/35">Loading experience</span>
                <motion.strong
                  key={progress}
                  className="font-mono text-lg font-medium tabular-nums text-white sm:text-xl"
                >
                  {String(progress).padStart(2, "0")}<span className="ml-1 text-[10px] text-[#03AAAE]">%</span>
                </motion.strong>
              </div>
              <div className="relative h-1 overflow-hidden rounded-full bg-white/10">
                <motion.span
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.14, ease: "easeOut" }}
                  className="absolute inset-y-0 left-0 rounded-full bg-[#03AAAE] shadow-[0_0_18px_rgba(3,170,174,.9)]"
                />
                <motion.span
                  animate={{ x: ["-100%", "500%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-transparent via-white/80 to-transparent"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
