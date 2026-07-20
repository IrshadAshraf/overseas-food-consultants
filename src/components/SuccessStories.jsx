import img1 from "@/assets/succes stories/Link → Blog Image.png";
import img2 from "@/assets/succes stories/image 16.png";
import img3 from "@/assets/succes stories/image 17.png";
import Reveal from "@/ui/Reveal";
import { motion } from "framer-motion";
import { CalendarDays, MessageSquare, UserCircle } from "lucide-react";
const stories = [
  [img1, "Food Safety", "Building Safer Kitchens Through Better Systems"],
  [img2, "Growth", "The Importance of Diversity in Food Innovation"],
  [img3, "Strategy", "How Market Insight Creates Lasting Advantage"],
];
export default function SuccessStories() {
  return (
    <div className="bg-black py-18 sm:py-20 lg:py-32">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1650px] sm:w-[calc(100%-2.5rem)]">
        <Reveal className="text-center">
          <p className="text-[.72rem] font-extrabold uppercase leading-4 tracking-[.14em] text-[#03AAAE]">
            Client success stories
          </p>
          <h2 className="mx-auto mt-4 max-w-xl font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-[clamp(1.75rem,4vw,4rem)] sm:text-[clamp(2.5rem,4vw,4rem)] font-black leading-[1.02] tracking-tight text-white">
            Trusted by Leading
            <br />
            Food Businesses
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stories.map(([img, tag, title], i) => (
            <Reveal key={title} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -10 }}
                className="group rounded-2xl bg-[#191919] p-3 pb-7"
              >
                <div className="h-64 overflow-hidden rounded-xl">
                  <img
                    src={img}
                    alt={title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="px-5">
                  <span className="mt-7 inline-block rounded-lg bg-[#03AAAE] px-5 py-2 text-sm text-white">
                    {tag}
                  </span>
                  <h3 className="mt-5 text-2xl font-bold leading-8 text-white">
                    {title}
                  </h3>
                  <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-zinc-300">
                    <UserCircle className="size-5" /> Jeswal{" "}
                    <i className="size-1.5 rounded-full bg-zinc-500" />
                    <CalendarDays className="size-5" /> 12 May, 24{" "}
                    <i className="size-1.5 rounded-full bg-zinc-500" />
                    <MessageSquare className="size-5" /> 24
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
