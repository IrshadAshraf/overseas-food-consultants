import bg from "@/assets/approach/0dc8bd27e182f582165a4ab903b5a0669e416f7e (1).jpg";
import i1 from "@/assets/approach/Vector (28).png";
import i2 from "@/assets/approach/Vector (29).png";
import i3 from "@/assets/approach/Vector (30).png";
import i4 from "@/assets/approach/Vector (31).png";
import Reveal from "@/ui/Reveal";
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
export default function Approach() {
  return (
    <div className="relative overflow-hidden bg-[#03AAAE] py-20">
      <img
        src={bg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-15 mix-blend-multiply"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 to-transparent" />
      <div className="relative mx-auto grid w-[calc(100%-2rem)] max-w-[1650px] gap-14 sm:w-[calc(100%-2.5rem)] lg:grid-cols-[.75fr_1.25fr]">
        <Reveal>
          <p className="text-[.72rem] font-extrabold uppercase leading-4 tracking-[.14em] text-[#37e5e9]">
            Our approach
          </p>
          <h2 className="mt-4 font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-[clamp(1.75rem,4vw,4rem)] md:text-[clamp(2.5rem,4vw,4rem)] font-black leading-[1.02] tracking-tight text-white">
            A Proven Process for Success
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/80">
            We follow a systematic approach to deliver measurable results for
            your food business at every stage.
          </p>
        </Reveal>
        <div className="relative grid gap-8 grid-cols-2 lg:grid-cols-4 before:absolute before:left-[10%] before:right-[10%] before:top-7 before:hidden before:border-t before:border-dashed before:border-white/40 lg:before:block">
          {steps.map(([icon, num, title, text], i) => (
            <Reveal
              className="relative text-center"
              key={title}
              delay={i * 0.1}
            >
              <span className="relative mx-auto grid size-14 place-items-center rounded-full border-[3px] border-white bg-[#03AAAE] shadow-lg transition duration-300 hover:scale-110 hover:rotate-12">
                <img src={icon} className="size-6 brightness-0 invert" alt="" />
              </span>
              <span className="mt-3 block text-xs font-black text-black/15">
                {num}
              </span>
              <h3 className="text-sm font-bold text-white">{title}</h3>
              <p className="mt-3 text-xs leading-5 text-white/85">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
