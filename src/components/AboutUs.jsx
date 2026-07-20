import i1 from "@/assets/about us/Vector (20).png";
import i2 from "@/assets/about us/Vector (21).png";
import i3 from "@/assets/about us/Vector (22).png";
import Button from "@/ui/Button";
import Dialog from "@/ui/Dialog";
import Reveal from "@/ui/Reveal";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useEffect, useState } from "react";
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

function FeatureCard({ feature, index, mobile = false }) {
  const [icon, title, text] = feature;
  return (
    <motion.article
      whileHover={mobile ? undefined : { y: -10, rotateX: 3, rotateY: index === 1 ? 0 : 3 }}
      className={`${mobile ? "h-[260px]" : "min-h-60 md:min-h-70 lg:min-h-85 xl:min-h-70"} group relative overflow-hidden rounded-2xl p-7 shadow-[0_16px_45px_rgba(0,0,0,.16)] transition-shadow duration-300 hover:shadow-[0_24px_65px_rgba(3,170,174,.16)]`}
    >
      <motion.span animate={{ rotate: 360 }} transition={{ duration: 9, repeat: Infinity, ease: "linear" }} className="pointer-events-none absolute -inset-[120%] bg-[conic-gradient(from_90deg,transparent_0deg,transparent_260deg,#03AAAE_305deg,#7cecee_325deg,transparent_360deg)] opacity-55" />
      <span className="pointer-events-none absolute inset-px rounded-[15px] bg-[#191919] transition-colors duration-300 group-hover:bg-[#122526]" />
      <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-[#03AAAE]/10 blur-3xl transition-transform duration-300 group-hover:scale-150" />
      <span className="relative grid size-12 place-items-center rounded-full border border-[#03AAAE] bg-[#03AAAE]/5 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#03AAAE]/15">
        <img className="size-6 object-contain" src={icon} alt="" />
      </span>
      <h3 className="relative mt-6 font-bold text-white">{title}</h3>
      <p className="relative mt-4 text-sm leading-6 text-zinc-500">{text}</p>
    </motion.article>
  );
}

export default function AboutUs() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveCard((current) => (current + 1) % features.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [activeCard]);

  const changeCard = (direction) => {
    setActiveCard((current) => (current + direction + features.length) % features.length);
  };
  const activeFeature = features[activeCard];

  return (
    <>
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
          <Button className="mt-7" onClick={() => setDialogOpen(true)}>
            About us
          </Button>
        </Reveal>
        <div className="hidden gap-4 md:grid md:grid-cols-3">
          {features.map(([icon, title, text], i) => (
            <Reveal key={title} delay={i * 0.1}>
              <FeatureCard feature={[icon, title, text]} index={i} />
            </Reveal>
          ))}
        </div>
        <Reveal className="h-[330px] md:hidden">
          <div className="relative h-[270px] touch-pan-y">
            {[2, 1].map((offset) => {
              const queuedFeature = features[(activeCard + offset) % features.length];
              const isNext = offset === 1;
              return (
                <motion.article
                  key={`${queuedFeature[1]}-${offset}`}
                  layout
                  animate={{
                    y: isNext ? [8, 4, 8] : [15, 11, 15],
                    scale: isNext ? 0.97 : 0.93,
                    rotate: isNext ? [-1, -0.25, -1] : [2, 1.2, 2],
                  }}
                  transition={{
                    y: { duration: isNext ? 4.8 : 5.6, repeat: Infinity, ease: "easeInOut", delay: isNext ? 0.3 : 0.8 },
                    rotate: { duration: isNext ? 5.2 : 6, repeat: Infinity, ease: "easeInOut", delay: isNext ? 0.3 : 0.8 },
                    scale: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                    layout: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                  }}
                  className={`absolute h-[250px] overflow-hidden rounded-[1.7rem] border bg-[linear-gradient(145deg,#202828,#171717)] p-6 shadow-xl ${isNext ? "inset-x-3 border-white/10 opacity-90" : "inset-x-5 border-[#03AAAE]/10 opacity-60"}`}
                >
                  <div className="absolute -right-12 -top-12 size-36 rounded-full bg-[#03AAAE]/10 blur-3xl" />
                  <span className="relative grid size-11 place-items-center rounded-xl border border-[#03AAAE]/20 bg-[#03AAAE]/10">
                    <img src={queuedFeature[0]} alt="" className="size-5 object-contain" />
                  </span>
                  <h3 className="relative mt-5 text-lg font-bold text-white/80">{queuedFeature[1]}</h3>
                  <p className="relative mt-2 text-xs leading-5 text-zinc-500">{queuedFeature[2]}</p>
                </motion.article>
              );
            })}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeCard}
                initial={{ opacity: 0.82, y: 10, rotate: -1, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, y: [0, -6, 0], rotate: [0, 0.45, 0], scale: 1 }}
                exit={{
                  opacity: 0,
                  x: -110,
                  y: -8,
                  rotate: -5,
                  scale: 0.92,
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                }}
                transition={{
                  opacity: { duration: 0.6 },
                  x: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                  scale: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                  y: { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
                  rotate: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                className="relative h-[255px] origin-bottom overflow-hidden rounded-[1.7rem] p-px shadow-[0_24px_65px_rgba(0,0,0,.28)]"
                onDragEnd={(_, info) => {
                  if (info.offset.x < -45) changeCard(1);
                  if (info.offset.x > 45) changeCard(-1);
                }}
              >
                <motion.span animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="pointer-events-none absolute -inset-[100%] bg-[conic-gradient(from_90deg,transparent_0deg,transparent_255deg,#03AAAE_305deg,#82eff1_325deg,transparent_360deg)] opacity-65" />
                <article className="relative h-full overflow-hidden rounded-[calc(1.7rem-1px)] bg-[linear-gradient(145deg,rgba(29,37,37,.98),rgba(20,20,20,.98))] p-6">
                  <div className="pointer-events-none absolute -right-14 -top-14 size-44 rounded-full bg-[#03AAAE]/15 blur-3xl" />
                  <span className="absolute right-5 top-2 font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-7xl text-white/[.035]">0{activeCard + 1}</span>
                  <div className="relative flex items-center justify-between">
                    <span className="grid size-13 place-items-center rounded-2xl border border-[#03AAAE]/35 bg-[#03AAAE]/10 shadow-[inset_0_1px_0_rgba(255,255,255,.08)]">
                      <img src={activeFeature[0]} alt="" className="size-6 object-contain" />
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[.04] px-3 py-1 text-[9px] font-bold uppercase tracking-[.16em] text-[#03AAAE]">OFC advantage</span>
                  </div>
                  <h3 className="relative mt-6 text-xl font-bold text-white">{activeFeature[1]}</h3>
                  <p className="relative mt-3 max-w-sm text-sm leading-6 text-zinc-400">{activeFeature[2]}</p>
                  <div className="absolute inset-x-6 bottom-5 h-1 overflow-hidden rounded-full bg-white/[.06]">
                    <motion.span animate={{ width: `${((activeCard + 1) / features.length) * 100}%` }} transition={{ duration: 0.5 }} className="block h-full rounded-full bg-[#03AAAE]" />
                  </div>
                </article>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-5 grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-full border border-white/[.07] bg-black/20 p-1.5 backdrop-blur-xl">
            <button type="button" aria-label="Previous feature" onClick={() => changeCard(-1)} className="grid size-9 cursor-pointer place-items-center rounded-full border border-white/10 text-zinc-400 transition duration-300 hover:border-[#03AAAE] hover:bg-[#03AAAE] hover:text-white"><ArrowLeft className="size-4" /></button>
            <div className="flex justify-center gap-2">{features.map(([, title], index) => <button type="button" key={title} aria-label={`Show ${title}`} onClick={() => setActiveCard(index)} className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${activeCard === index ? "w-8 bg-[#03AAAE]" : "w-2 bg-zinc-600"}`} />)}</div>
            <button type="button" aria-label="Next feature" onClick={() => changeCard(1)} className="grid size-9 cursor-pointer place-items-center rounded-full border border-white/10 text-zinc-400 transition duration-300 hover:border-[#03AAAE] hover:bg-[#03AAAE] hover:text-white"><ArrowRight className="size-4" /></button>
          </div>
        </Reveal>
      </div>
    </div>
    <Dialog
      open={dialogOpen}
      onClose={() => setDialogOpen(false)}
      eyebrow="Who we are"
      title="Built Around Your Food Business"
      description="We combine global industry experience with practical, tailored guidance to help ambitious food businesses operate safely and grow sustainably."
    >
      <div className="space-y-3">
        {features.map(([, title, text], index) => (
          <motion.div key={title} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[.03] p-4">
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#03AAAE]/15 text-[#03AAAE]"><Check className="size-4" /></span>
            <span><b className="text-sm text-white">{title}</b><small className="mt-1 block leading-5 text-zinc-500">{text}</small></span>
          </motion.div>
        ))}
      </div>
      <Button to="/#contact-us" onClick={() => setDialogOpen(false)} className="mt-6 w-full">Talk to Our Team</Button>
    </Dialog>
    </>
  );
}
