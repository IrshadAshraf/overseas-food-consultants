import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[200] grid place-items-center bg-[#080808]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center">
            <motion.div
              className="mx-auto grid size-20 place-items-center rounded-full border border-[#03AAAE]/40 text-2xl font-black text-white"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
            >
              <span className="block -rotate-0">O</span>
            </motion.div>
            <motion.p
              className="mt-5 text-[10px] font-bold uppercase tracking-[.38em] text-[#03AAAE]"
              animate={{ opacity: [0.35, 1, 0.35] }}
              transition={{ duration: 0.3, repeat: Infinity }}
            >
              Overseas Food Consultants
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
