import logo from "@/assets/navbar/image 9.png";
import Button from "@/ui/Button";
import ContactDialog from "@/ui/ContactDialog";
import useScrollLock from "@/ui/useScrollLock";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

const links = [
  ["Home", "hero"],
  ["About us", "about-us"],
  ["Consultancy", "expertise"],
  ["Industries", "why-choose-us"],
  ["Insights", "success-stories"],
  ["Contact", "contact-us"],
];

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [dialog, setDialog] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useScrollLock(menu);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-[#080808]/20 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-lg"
            : "border-white/10 bg-[#080808]/65 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-2xl lg:border-transparent lg:bg-transparent lg:shadow-none lg:backdrop-blur-none"
        }`}
      >
        <div
          className={`mx-auto flex w-full max-w-[1650px] items-center justify-between px-5 transition-all duration-300 lg:px-12 ${
            scrolled ? "h-20" : "h-28"
          }`}
        >
          <HashLink smooth to="/#hero" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Overseas Food Consultants"
              className="size-[60px]"
            />
            <span className="leading-tight text-white">
              <b className="block text-lg font-medium tracking-wide">
                OVERSEAS
              </b>
              <span className="text-xs tracking-wide text-[#03AAAE]">
                FOOD CONSULTANTS
              </span>
            </span>
          </HashLink>
          <nav className="hidden items-center gap-8 lg:flex">
            {links.map(([label, id]) => (
              <HashLink
                smooth
                key={id}
                to={`/#${id}`}
                className="group relative py-2 text-[0.75rem] uppercase tracking-widest text-zinc-300 transition-colors duration-300 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-[#03AAAE] after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
              >
                {label}
              </HashLink>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Button
              variant="connect"
              icon={false}
              onClick={() => setDialog(true)}
              className="text-base"
            >
              Let’s Connect
            </Button>
          </div>
          <Button
            variant="icon"
            icon={false}
            onClick={() => setMenu(!menu)}
            aria-label="Toggle menu"
            className="shadow-lg backdrop-blur-xl lg:hidden"
          >
            {menu ? <X /> : <Menu />}
          </Button>
        </div>
      </motion.header>
      <AnimatePresence>
        {menu && (
          <>
            <motion.button
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenu(false)}
              className="fixed inset-0 z-[55] cursor-pointer bg-black/45 backdrop-blur-sm lg:hidden"
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed bottom-0 right-0 top-0 z-[60] flex w-[min(88vw,420px)] flex-col overflow-hidden border-l border-white/15 bg-[#080808]/10 p-7 shadow-[-24px_0_80px_rgba(0,0,0,0.55)] backdrop-blur-xl lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div className="flex items-center gap-3">
                  <img src={logo} alt="" className="size-12" />
                  <span className="text-sm font-medium tracking-wide text-white">
                    OVERSEAS
                    <small className="block text-[10px] text-[#03AAAE]">
                      FOOD CONSULTANTS
                    </small>
                  </span>
                </div>
                <Button
                  variant="icon"
                  icon={false}
                  onClick={() => setMenu(false)}
                  aria-label="Close menu"
                  className="hover:rotate-90"
                >
                  <X className="size-5" />
                </Button>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                {links.map(([label, id], index) => (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, x: 35 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.14 + index * 0.06 }}
                  >
                    <HashLink
                      smooth
                      to={`/#${id}`}
                      onClick={() => setMenu(false)}
                      className="group flex items-center justify-between border-b border-white/[0.07] py-5 text-sm font-bold uppercase tracking-[.15em] text-zinc-300 transition duration-300 hover:border-[#03AAAE]/40 hover:pl-2 hover:text-[#03AAAE]"
                    >
                      {label}
                      <ArrowRight className="size-4 -translate-x-3 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    </HashLink>
                  </motion.div>
                ))}
              </div>

              <Button
                variant="connect"
                icon={false}
                onClick={() => {
                  setMenu(false);
                  setDialog(true);
                }}
                className="w-full shadow-[0_14px_35px_rgba(3,170,174,.22)]"
              >
                Let’s Connect
              </Button>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
      <ContactDialog open={dialog} onClose={() => setDialog(false)} />
    </>
  );
}
