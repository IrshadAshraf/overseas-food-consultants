import img1 from "@/assets/succes stories/Link → Blog Image.png";
import img2 from "@/assets/succes stories/image 16.png";
import img3 from "@/assets/succes stories/image 17.png";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  MessageSquare,
  UserCircle,
} from "lucide-react";

const stories = [
  [img1, "Food Safety", "Building Safer Kitchens Through Better Systems"],
  [img2, "Growth", "The Importance of Diversity in Food Innovation"],
  [img3, "Strategy", "How Market Insight Creates Lasting Advantage"],
];

const borders = [
  "conic-gradient(from 0deg,transparent 10%,#03AAAE 25%,rgba(255,255,255,.75) 31%,transparent 42%,transparent 70%,rgba(3,170,174,.45) 84%,transparent 94%)",
  "conic-gradient(from 180deg,rgba(3,170,174,.4),transparent 18%,rgba(255,255,255,.75) 28%,transparent 39%,#03AAAE 62%,transparent 77%)",
  "conic-gradient(from 65deg,transparent 8%,rgba(3,170,174,.55) 20%,#03AAAE 28%,rgba(255,255,255,.7) 34%,transparent 44%,transparent 68%,rgba(3,170,174,.5) 82%,transparent 94%)",
];

function StoryCard({ story, index }) {
  const [img, tag, title] = story;
  const rotateXValue = useMotionValue(0);
  const rotateYValue = useMotionValue(0);
  const rotateX = useSpring(rotateXValue, { stiffness: 155, damping: 21 });
  const rotateY = useSpring(rotateYValue, { stiffness: 155, damping: 21 });

  const handleMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    rotateXValue.set(y * -7);
    rotateYValue.set(x * 7);
  };

  const resetTilt = () => {
    rotateXValue.set(0);
    rotateYValue.set(0);
  };

  const metadata = [
    [UserCircle, "Jeswal"],
    [CalendarDays, "12 May, 24"],
    [MessageSquare, "24"],
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index === 0 ? -70 : index === 2 ? 70 : 0,
        y: index === 1 ? 70 : 42,
        rotate: index === 0 ? -3 : index === 2 ? 3 : 0,
        scale: 0.88,
      }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{
        duration: 0.95,
        delay: index * 0.14,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="[perspective:1000px]"
    >
      <motion.article
        onMouseMove={handleMove}
        onMouseLeave={resetTilt}
        whileHover={{ y: -12, scale: 1.012 }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="group relative h-full overflow-hidden rounded-2xl p-px shadow-[0_22px_65px_rgba(0,0,0,.3)]"
      >
        <motion.span
          animate={{
            rotate: index % 2 === 0 ? [0, 360] : [360, 0],
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 13 + index * 3,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ background: borders[index] }}
          className="pointer-events-none absolute -inset-[70%] opacity-50 transition-opacity duration-700 group-hover:opacity-100"
        />

        <div className="relative h-full overflow-hidden rounded-[15px] bg-[#191919] p-3 pb-7">
          <span className="pointer-events-none absolute inset-0 translate-y-full bg-[linear-gradient(150deg,rgba(3,170,174,.22),rgba(3,170,174,.06)_45%,transparent_72%)] transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0" />
          <motion.span
            animate={{ scale: [0.7, 1.3, 0.7], opacity: [0.02, 0.13, 0.02] }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -bottom-24 -right-20 size-72 rounded-full bg-[#03AAAE] blur-3xl"
          />

          <div className="relative h-64 overflow-hidden rounded-xl sm:h-72 md:h-56 xl:h-72">
            <motion.img
              src={img}
              alt={title}
              animate={{
                x: index % 2 === 0 ? ["-2%", "2%", "-2%"] : ["2%", "-2%", "2%"],
                y: ["1.5%", "-2%", "1.5%"],
                scale: [1.07, 1.13, 1.07],
              }}
              transition={{
                x: {
                  duration: 14 + index * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                y: {
                  duration: 11 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                scale: {
                  duration: 9 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="h-full w-full object-cover transition-[filter] duration-700 group-hover:saturate-125"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#191919]/75 via-transparent to-[#03AAAE]/10" />
            <motion.span
              animate={{ x: ["-150%", "200%"] }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                repeatDelay: 2.5 + index,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -top-1/2 h-[200%] w-14 rotate-[22deg] bg-white/[.09] blur-xl"
            />
            <motion.span
              initial={{ opacity: 0, scale: 0.4, rotate: -45 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.35 + index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute right-4 top-4 grid size-10 place-items-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-lg transition-[background-color,transform] duration-500 group-hover:rotate-45 group-hover:bg-[#03AAAE]"
            >
              <ArrowUpRight className="size-4" />
            </motion.span>
          </div>

          <div
            className="relative px-4 sm:px-5"
            style={{ transform: "translateZ(28px)" }}
          >
            <motion.span
              initial={{ opacity: 0, y: 25, scale: 0.75 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.28 + index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ scale: 1.06 }}
              className="mt-7 inline-flex overflow-hidden rounded-lg bg-[#03AAAE] px-5 py-2 text-sm text-white shadow-[0_8px_24px_rgba(3,170,174,.24)]"
            >
              <motion.span
                animate={{ opacity: [1, 0.75, 1] }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {tag}
              </motion.span>
            </motion.span>

            <motion.h3
              initial={{ opacity: 0, y: 30, filter: "blur(7px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{
                duration: 0.85,
                delay: 0.38 + index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-5 text-xl font-bold leading-8 text-white transition-colors duration-500 group-hover:text-[#70f7fa] xl:text-2xl"
            >
              {title}
            </motion.h3>

            <div className="mt-6 flex w-2/3 flex-wrap items-center gap-x-8 gap-y-3 text-xs text-zinc-400 xl:gap-x-12 xl:text-sm">
              {metadata.map(([Icon, label], metadataIndex) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 20, scale: 0.85 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: 0.52 + index * 0.1 + metadataIndex * 0.08,
                  }}
                  whileHover={{ y: -3, color: "#ffffff" }}
                  className="flex items-center gap-2"
                >
                  <motion.span
                    animate={{
                      rotate: metadataIndex === 1 ? [0, 8, -8, 0] : [0, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3 + metadataIndex,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Icon className="size-5 text-[#03AAAE]" />
                  </motion.span>
                  {label}
                </motion.div>
              ))}
            </div>

            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.65 + index * 0.12 }}
              className="mt-6 block h-px w-14 origin-left bg-[#03AAAE] transition-[width] duration-700 group-hover:w-full"
            />
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

export default function SuccessStories() {
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
          x: ["-30%", "80%", "-30%"],
          y: ["-20%", "55%", "-20%"],
          scale: [0.8, 1.4, 0.8],
        }}
        transition={{ duration: 31, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-0 top-0 size-[32rem] rounded-full bg-[#03AAAE]/[.065] blur-[125px]"
      />
      <motion.span
        animate={{ x: ["20%", "-65%", "20%"], y: ["30%", "-25%", "30%"] }}
        transition={{ duration: 37, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-0 right-0 size-[28rem] rounded-full bg-[#03AAAE]/[.05] blur-[130px]"
      />
      <motion.div
        animate={{ backgroundPosition: ["0px 0px", "54px 54px"] }}
        transition={{ duration: 17, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.018)_1px,transparent_1px)] [background-size:54px_54px] [mask-image:linear-gradient(to_bottom,transparent,black_22%,black_80%,transparent)]"
      />

      <div className="relative mx-auto w-[calc(100%-2rem)] max-w-[1650px] sm:w-[calc(100%-2.5rem)]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={{ visible: { transition: { staggerChildren: 0.16 } } }}
          className="text-center"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: -25, letterSpacing: ".36em" },
              visible: { opacity: 1, y: 0, letterSpacing: ".14em" },
            }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="text-[.72rem] font-extrabold uppercase leading-4 tracking-[.14em] text-[#03AAAE]"
          >
            Client success stories
          </motion.p>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 50, skewY: 4, scale: 0.92 },
              visible: { opacity: 1, y: 0, skewY: 0, scale: 1 },
            }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-4 max-w-xl font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-[clamp(1.75rem,4vw,4rem)] font-black leading-[1.02] tracking-tight text-white sm:text-[clamp(2.5rem,4vw,4rem)]"
          >
            Trusted by <span className="text-[#03AAAE]">Leading</span>
            <br />
            Food Businesses
          </motion.h2>
          <motion.span
            variants={{
              hidden: { opacity: 0, scaleX: 0 },
              visible: { opacity: 1, scaleX: 1 },
            }}
            transition={{ duration: 0.9 }}
            className="mx-auto mt-5 block h-px w-28 bg-gradient-to-r from-transparent via-[#03AAAE] to-transparent"
          />
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stories.map((story, index) => (
            <StoryCard key={story[2]} story={story} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
