import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const MotionHashLink = motion.create(HashLink);

const variants = {
  primary: "border-[#03AAAE] bg-[#03AAAE] text-white hover:text-zinc-950",
  light: "border-white bg-white text-zinc-950 hover:text-white",
  dark: "border-white/10 bg-[#111] text-white hover:text-white",
  ghost: "border-white/15 bg-white/[.05] text-white hover:text-white",
  icon: "border-white/15 bg-white/[.05] text-white hover:border-[#03AAAE] hover:text-white",
  connect: "border-transparent bg-gradient-to-r from-[#20b2b7] to-[#55ace0] text-white hover:text-white shadow-[0_12px_35px_rgba(38,174,191,.25)]",
};

export default function Button({
  to,
  href,
  children,
  light = false,
  variant = "primary",
  className = "",
  icon = true,
  ...props
}) {
  const selectedVariant = light ? "light" : variant;
  const styles = variants[selectedVariant] || variants.primary;
  const fill = selectedVariant === "primary" ? "bg-white" : selectedVariant === "connect" ? "bg-white/10" : "bg-[#03AAAE]";
  const sizing = selectedVariant === "icon" ? "size-11 p-0" : selectedVariant === "connect" ? "py-2 pl-6 pr-2" : "px-7 py-3.5";
  const classes = `group relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-full border text-sm font-bold transition-colors duration-300 ${sizing} ${styles} ${className}`;
  const content = (
    <>
      <span
        className={`absolute inset-0 translate-y-[105%] rounded-full transition-transform duration-300 ease-out group-hover:translate-y-0 ${fill}`}
      />
      <span className="relative flex items-center gap-3">
        {children}
        {selectedVariant === "connect" && (
          <span className="grid size-9 place-items-center rounded-full bg-white text-zinc-800 shadow-sm transition-transform duration-300 group-hover:translate-x-0.5">
            <ArrowRight className="size-4" />
          </span>
        )}
        {icon && selectedVariant !== "icon" && selectedVariant !== "connect" && (
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
        )}
      </span>
    </>
  );

  if (to)
    return (
      <MotionHashLink
        smooth
        to={to}
        className={classes}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.96 }}
        {...props}
      >
        {content}
      </MotionHashLink>
    );
  if (href)
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.96 }}
        {...props}
      >
        {content}
      </motion.a>
    );
  return (
    <motion.button
      type="button"
      className={classes}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.94 }}
      {...props}
    >
      {content}
    </motion.button>
  );
}
