import Button from "@/ui/Button";
import useScrollLock from "@/ui/useScrollLock";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useId } from "react";

export default function Dialog({
  open,
  onClose,
  title,
  description,
  eyebrow,
  children,
  className = "",
}) {
  const titleId = useId();
  const descriptionId = useId();
  useScrollLock(open);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-black/70 p-4 [scrollbar-width:none] backdrop-blur-lg [&::-webkit-scrollbar]:hidden sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onMouseDown={onClose}
        >
          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? titleId : undefined}
            aria-describedby={description ? descriptionId : undefined}
            className={`relative my-auto max-h-[calc(100dvh-2rem)] w-full max-w-xl overflow-x-hidden overflow-y-auto rounded-[2rem] border border-white/10 bg-[#121414]/90 p-7 [scrollbar-width:none] shadow-[0_30px_100px_rgba(0,0,0,.65)] backdrop-blur-2xl [&::-webkit-scrollbar]:hidden sm:p-10 ${className}`}
            initial={{ opacity: 0, scale: 0.9, y: 35 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-20 -mb-11 flex justify-end">
              <Button
                variant="icon"
                icon={false}
                onClick={onClose}
                aria-label="Close dialog"
                autoFocus
                className="border-white/15 bg-[#151515]/85 text-white shadow-2xl backdrop-blur-2xl"
              >
                <X className="size-5" />
              </Button>
            </div>
            <motion.div
              className="pointer-events-none absolute size-72 rounded-full bg-[#03AAAE]/20 blur-3xl"
              animate={{
                left: ["-20%", "65%", "20%", "-20%"],
                top: ["-25%", "35%", "75%", "-25%"],
                scale: [1, 1.18, 0.9, 1],
                opacity: [0.45, 0.8, 0.55, 0.45],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="pointer-events-none absolute size-56 rounded-full bg-sky-400/10 blur-3xl"
              animate={{
                right: ["-18%", "55%", "5%", "-18%"],
                bottom: ["-20%", "55%", "15%", "-20%"],
                scale: [0.85, 1.1, 1, 0.85],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-[#03AAAE]/10" />
            <div className="relative">
              {eyebrow && (
                <p className="text-[.7rem] font-extrabold uppercase tracking-[.18em] text-[#03AAAE]">
                  {eyebrow}
                </p>
              )}
              {title && (
                <h2
                  id={titleId}
                  className="mt-3 font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl"
                >
                  {title}
                </h2>
              )}
              {description && (
                <p
                  id={descriptionId}
                  className="mt-4 text-sm leading-7 text-zinc-400"
                >
                  {description}
                </p>
              )}
              <div className={title || description || eyebrow ? "mt-8" : ""}>
                {children}
              </div>
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
