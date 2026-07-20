import hero from "@/assets/hero/image 1 (1).png";
import heroVideo from "@/assets/hero/Globe_rotating_with_wind_blowing_202607202021.mp4";
import icon1 from "@/assets/hero/Vector (15).png";
import icon2 from "@/assets/hero/Vector (16).png";
import icon3 from "@/assets/hero/Vector (17).png";
import icon4 from "@/assets/hero/Vector (18).png";
import Button from "@/ui/Button";
import Dialog from "@/ui/Dialog";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { CalendarDays, ChevronRight, Clock3, Sparkles, Users } from "lucide-react";
import { useRef, useState } from "react";

const badges = [
  [
    icon1,
    "Food Businesses",
    "Excellence",
    "right-[2%] top-[26%] xl:right-[16.5%] xl:top-[27.5%]",
    "Growth systems, operational guidance, and practical support for food businesses entering new markets.",
  ],
  [
    icon2,
    "Quality",
    "Assurance",
    "right-0 top-[41%] xl:right-[5.8%] xl:top-[42.5%]",
    "Robust quality frameworks that protect customers, strengthen consistency, and build lasting trust.",
  ],
  [
    icon3,
    "Regulatory",
    "Compliance",
    "right-[2%] top-[56%] xl:right-[16.5%] xl:top-[57.5%]",
    "Clear regulatory pathways and compliance programs designed for complex global food environments.",
  ],
  [
    icon4,
    "Research &",
    "Innovation",
    "right-0 top-[71%] xl:right-[4%] xl:top-[72.5%]",
    "Data-led insights and fresh product thinking that turn market opportunities into sustainable growth.",
  ],
];
export default function Hero() {
  const ref = useRef(null);
  const [activeDialog, setActiveDialog] = useState(null);
  const [activeBadge, setActiveBadge] = useState(null);
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
      <motion.video
        style={{ y }}
        src={heroVideo}
        poster={hero}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 0.95, scale: 1.01 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.96)_0%,rgba(0,0,0,.78)_29%,rgba(0,0,0,.28)_58%,rgba(0,0,0,.04)_82%),linear-gradient(0deg,rgba(0,0,0,.7)_0%,transparent_42%,rgba(0,0,0,.15)_100%)]"
      />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1650px] items-center px-6 pb-16 pt-32 lg:min-h-[875px] lg:px-10 lg:pb-10 lg:pt-36">
        <div className="max-w-[650px] md:max-w-[52%] lg:max-w-[650px]">
          <motion.p
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 text-[.72rem] font-extrabold uppercase leading-4 tracking-[.14em] text-[#03AAAE]"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-px w-8 origin-left bg-[#03AAAE]"
            />
            Accessibility solutions
          </motion.p>
          <h1 className="mt-8 font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-[42px] font-black leading-[.94] tracking-[-.025em] text-white sm:text-[72px] md:text-[54px] lg:text-[82px] xl:text-[92px]">
            {[
              ["Global", "text-white"],
              ["Expertise Food", "text-[#03AAAE]"],
              ["Industry", "text-white"],
            ].map(([line, color], index) => (
              <span key={line} className="block overflow-hidden pb-[.04em]">
                <motion.span
                  initial={{ opacity: 0, y: "105%", filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.7, delay: 0.36 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className={`block ${color}`}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.65, delay: 0.76, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-lg text-base leading-8 text-zinc-400 sm:text-lg"
          >
            Indulge in handcrafted dishes, fresh ingredients, and an
            unforgettable dining experience in a warm and elegant atmosphere.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.92, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex w-full max-w-[430px] flex-nowrap gap-2.5 sm:gap-4"
          >
            <Button
              icon={false}
              onClick={() => setActiveDialog("reservation")}
              className="min-w-0 flex-[1.15] !shrink whitespace-nowrap !px-2 py-4 text-[11px] shadow-[0_18px_45px_rgba(3,170,174,.28)] sm:!px-6 sm:text-base"
            >
              Reserve a Table
            </Button>
            <Button
              light
              icon={false}
              onClick={() => setActiveDialog("menu")}
              className="min-w-0 flex-1 !shrink whitespace-nowrap !px-2 py-4 text-[11px] shadow-[0_14px_35px_rgba(0,0,0,.22)] sm:!px-6 sm:text-base"
            >
              View Menu
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 z-20 hidden md:block">
        {badges.map(([icon, title, sub, position, details], i) => {
          const expanded = activeBadge === i;
          return (
          <motion.button
            type="button"
            key={title}
            layout="size"
            aria-expanded={expanded}
            onClick={() => setActiveBadge((current) => current === i ? null : i)}
            initial={{ opacity: 0, x: 70, scale: 0.86, rotateY: -12 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
              rotateX: [0, -2.4 - i * 0.25, 2.2 + i * 0.2, 0],
              rotateY: [0, 3 + i * 0.3, -2.8 - i * 0.25, 0],
            }}
            transition={{
              duration: 0.65,
              delay: 0.55 + i * 0.12,
              layout: { duration: 0.3, delay: 0, ease: [0.16, 1, 0.3, 1] },
              rotateX: {
                duration: 5.5 + i * 0.55,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8 + i * 0.18,
              },
              rotateY: {
                duration: 6.2 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8 + i * 0.18,
              },
            }}
            style={{
              transformPerspective: 1000,
              transformStyle: "preserve-3d",
            }}
            whileTap={{ scale: 0.98 }}
            className={`${position} pointer-events-auto absolute flex transform-gpu cursor-pointer items-center gap-3 overflow-hidden rounded-2xl px-3.5 text-left shadow-[0_18px_45px_rgba(0,0,0,.3)] [backface-visibility:hidden] [will-change:transform] lg:px-4 xl:gap-4 xl:px-5 ${expanded ? "h-[112px] !w-[min(88vw,350px)]" : "h-[68px] w-[210px] lg:h-[74px] lg:w-[230px] xl:h-[80px] xl:w-[260px]"}`}
          >
            <motion.span
              className="absolute -inset-[100%] bg-[conic-gradient(from_90deg,transparent_0deg,transparent_235deg,#03AAAE_285deg,#8df4f6_315deg,transparent_360deg)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            />
            <span className="absolute inset-px rounded-[15px] bg-[linear-gradient(135deg,rgba(18,35,35,.64),rgba(3,10,10,.34))] shadow-[inset_0_1px_0_rgba(255,255,255,.12),inset_0_0_30px_rgba(3,170,174,.05)] ring-1 ring-inset ring-white/[.07] backdrop-blur-2xl" />
            <span className="relative z-10 grid size-11 shrink-0 place-items-center rounded-full bg-[#24b2b8] shadow-[0_8px_24px_rgba(3,170,174,.25)] lg:size-12 xl:size-14">
              <motion.img
                src={icon}
                alt=""
                animate={
                  [
                    { rotate: [0, 8, -8, 0], y: [0, -2, 0] },
                    { rotate: [0, 180, 360], scale: [1, 0.88, 1] },
                    { y: [0, -4, 0], scale: [1, 1.12, 1] },
                    { rotate: [0, -10, 10, 0], scale: [1, 1.08, 1] },
                  ][i]
                }
                transition={{
                  duration: 3.5 + i * 0.55,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
                className="size-5 object-contain brightness-0 invert lg:size-6 xl:size-7"
              />
            </span>
            <span className="relative z-10 min-w-0 flex-1">
              <b className="block text-xs text-white lg:text-sm xl:text-[15px]">
                {title}
              </b>
              <small className="text-xs text-zinc-400 xl:text-sm">{sub}</small>
              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.small
                    initial={{ opacity: 0, height: 0, y: 8 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: 5 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 block max-w-[245px] overflow-hidden text-[10px] leading-4 text-zinc-300 lg:text-[11px]"
                  >
                    {details}
                  </motion.small>
                )}
              </AnimatePresence>
            </span>
            <ChevronRight className={`relative z-10 size-4 shrink-0 text-[#03AAAE] transition-transform duration-300 ${expanded ? "rotate-90" : "rotate-0"}`} />
          </motion.button>
          );
        })}
      </div>
      <Dialog
        open={activeDialog === "reservation"}
        onClose={() => setActiveDialog(null)}
        eyebrow="Reserve your experience"
        title="Book a Table"
        description="Choose your preferred date, time, and party size. Our team will confirm your reservation shortly."
      >
        <form
          className="grid gap-4 sm:grid-cols-2"
          onSubmit={(event) => {
            event.preventDefault();
            setActiveDialog(null);
          }}
        >
          <label className="group relative block">
            <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400">
              Date
            </span>
            <CalendarDays className="pointer-events-none absolute bottom-4 left-4 size-4 text-[#03AAAE]" />
            <input
              required
              type="date"
              className="h-12 w-full rounded-xl border border-white/10 bg-white/[.04] pl-11 pr-3 text-sm text-white [color-scheme:dark] outline-none transition duration-300 focus:border-[#03AAAE] focus:bg-[#03AAAE]/5"
            />
          </label>
          <label className="group relative block">
            <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400">
              Time
            </span>
            <Clock3 className="pointer-events-none absolute bottom-4 left-4 size-4 text-[#03AAAE]" />
            <input
              required
              type="time"
              className="h-12 w-full rounded-xl border border-white/10 bg-white/[.04] pl-11 pr-3 text-sm text-white [color-scheme:dark] outline-none transition duration-300 focus:border-[#03AAAE] focus:bg-[#03AAAE]/5"
            />
          </label>
          <label className="group relative block sm:col-span-2">
            <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400">
              Guests
            </span>
            <Users className="pointer-events-none absolute bottom-4 left-4 size-4 text-[#03AAAE]" />
            <select
              required
              defaultValue="2"
              className="h-12 w-full appearance-none rounded-xl border border-white/10 bg-[#171919] pl-11 pr-3 text-sm text-white outline-none transition duration-300 focus:border-[#03AAAE]"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((count) => (
                <option key={count} value={count}>
                  {count} {count === 1 ? "Guest" : "Guests"}
                </option>
              ))}
            </select>
          </label>
          <label className="block sm:col-span-2">
            <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400">
              Your name
            </span>
            <input
              required
              type="text"
              placeholder="Enter your name"
              className="h-12 w-full rounded-xl border border-white/10 bg-white/[.04] px-4 text-sm text-white outline-none transition duration-300 placeholder:text-zinc-600 focus:border-[#03AAAE] focus:bg-[#03AAAE]/5"
            />
          </label>
          <Button type="submit" className="mt-2 w-full sm:col-span-2">
            Confirm Reservation
          </Button>
        </form>
      </Dialog>
      <Dialog
        open={activeDialog === "menu"}
        onClose={() => setActiveDialog(null)}
        eyebrow="Chef-curated selection"
        title="Our Signature Menu"
        description="Seasonal ingredients, bold flavors, and thoughtful presentation in every plate."
      >
        <div className="space-y-3">
          {[
            [
              "Garden Harvest Bowl",
              "Roasted vegetables, herbs, grains, citrus dressing",
              "$18",
            ],
            [
              "Flame-Grilled Chicken",
              "Smoked pepper glaze, seasonal greens, herb oil",
              "$26",
            ],
            [
              "Coastal Seafood Plate",
              "Fresh catch, lemon butter, charred vegetables",
              "$32",
            ],
          ].map(([name, details, price], index) => (
            <motion.article
              key={name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ x: 5 }}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.03] p-4 transition-colors duration-300 hover:border-[#03AAAE]/50 hover:bg-[#03AAAE]/10"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#03AAAE]/15 text-[#03AAAE] transition duration-300 group-hover:bg-[#03AAAE] group-hover:text-white">
                <Sparkles className="size-5" />
              </span>
              <span className="min-w-0 flex-1">
                <b className="block text-sm text-white">{name}</b>
                <small className="mt-1 block leading-5 text-zinc-500">
                  {details}
                </small>
              </span>
              <b className="text-sm text-[#03AAAE]">{price}</b>
            </motion.article>
          ))}
        </div>
      </Dialog>
    </div>
  );
}
