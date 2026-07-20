import logo from "@/assets/footer/image 9 (1).png";
import mark from "@/assets/footer/image 13 (3).png";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";
const quick = [
  ["Home", "hero"],
  ["About Us", "about-us"],
  ["Consultancy", "expertise"],
  ["Industries", "why-choose-us"],
  ["Insights", "success-stories"],
  ["Contact", "contact-us"],
];
const services = [
  "Food Safety & Quality",
  "Regulatory Compliance",
  "Market Research",
  "Product Development",
  "Supply Chain",
];

const revealDirections = [
  { x: -24, y: 10, rotate: -2 },
  { x: 20, y: 18, rotate: 2 },
  { x: 0, y: 28, rotate: 0 },
  { x: 18, y: -12, rotate: 1 },
  { x: -16, y: 22, rotate: -1 },
];

const reveal = (index, delay = 0) => ({
  initial: { opacity: 0, filter: "blur(7px)", ...revealDirections[index % revealDirections.length] },
  whileInView: { opacity: 1, x: 0, y: 0, rotate: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.35 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-[#0d0d0d] px-6 pb-8 pt-16 text-zinc-500"
    >
      <motion.span
        animate={{ x: ["-25%", "75%", "-25%"], y: ["-30%", "35%", "-30%"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-0 top-0 size-96 rounded-full bg-[#03AAAE]/[.045] blur-[120px]"
      />
      <div className="relative mx-auto w-full max-w-[1650px]">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div {...reveal(0, 0.08)}>
            <HashLink smooth to="/#hero" aria-label="Go to home section">
              <motion.div
                whileHover={{ x: 5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="group inline-flex cursor-pointer items-center gap-3"
              >
              <motion.img
                whileHover={{ rotate: [0, -6, 6, 0] }}
                transition={{ duration: 0.65 }}
                src={logo}
                alt="OFC"
                className="size-14 drop-shadow-[0_0_0_rgba(3,170,174,0)] transition-[filter] duration-500 group-hover:drop-shadow-[0_0_12px_rgba(3,170,174,.45)]"
              />
              <span className="text-white">
                <b className="block text-xl font-medium transition-colors duration-500 group-hover:text-[#6ff9fc]">OVERSEAS</b>
                <small className="text-[#03AAAE]">FOOD CONSULTANTS</small>
              </span>
              </motion.div>
            </HashLink>
            </motion.div>
            <motion.p {...reveal(1, 0.16)} className="mt-5 max-w-xs text-xs leading-5">
              Overseas Food Consultants empowers food businesses worldwide with
              expert consulting in food safety, quality, compliance, and
              strategy.
            </motion.p>
            <div className="mt-6 flex gap-3">
              {[FaFacebookF, FaLinkedinIn, FaXTwitter, FaInstagram].map(
                (Icon, i) => (
                  <motion.a
                    key={i}
                    {...reveal(i + 2, 0.22 + i * 0.07)}
                    href="#"
                    aria-label="Social profile"
                    whileHover={{ y: -6, scale: 1.12, rotate: i % 2 === 0 ? -6 : 6 }}
                    whileTap={{ scale: 0.9 }}
                    className="grid size-9 cursor-pointer place-items-center rounded-full border border-white/15 transition-[border-color,background-color,color,box-shadow] duration-500 hover:border-[#03AAAE] hover:bg-[#03AAAE] hover:text-white hover:shadow-[0_10px_25px_rgba(3,170,174,.2)]"
                  >
                    <Icon className="size-4" />
                  </motion.a>
                ),
              )}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <motion.h3 {...reveal(2, 0.18)} className="text-[.78rem] font-extrabold uppercase tracking-[.05em] text-white">Quick links</motion.h3>
            <div className="mt-6 space-y-4">
              {quick.map(([label, id], index) => (
                <motion.div key={id} {...reveal(index + 1, 0.25 + index * 0.055)}>
                <HashLink
                  smooth
                  className="group flex w-fit items-center gap-2 text-xs transition duration-500 hover:translate-x-2 hover:text-[#03AAAE]"
                  to={`/#${id}`}
                >
                  <span className="h-px w-0 bg-[#03AAAE] transition-[width] duration-500 group-hover:w-4" />
                  {label}
                </HashLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
            <motion.h3 {...reveal(3, 0.22)} className="text-[.78rem] font-extrabold uppercase tracking-[.05em] text-white">Our services</motion.h3>
            <div className="mt-6 space-y-4 text-xs">
              {services.map((service, index) => (
                <motion.div key={service} {...reveal(index + 3, 0.3 + index * 0.06)}>
                <HashLink
                  smooth
                  to="/#expertise"
                  className="group flex w-fit items-center gap-2 transition duration-500 hover:translate-x-2 hover:text-[#03AAAE]"
                >
                  <span className="size-1 rounded-full bg-zinc-700 transition-[background-color,box-shadow,transform] duration-500 group-hover:scale-150 group-hover:bg-[#03AAAE] group-hover:shadow-[0_0_9px_#03AAAE]" />
                  {service}
                </HashLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>
            <motion.h3 {...reveal(4, 0.26)} className="text-[.78rem] font-extrabold uppercase tracking-[.05em] text-white">Contact us</motion.h3>
            <div className="mt-6 space-y-5 text-xs">
              <motion.a
                {...reveal(0, 0.34)}
                className="group flex gap-3 transition duration-500 hover:translate-x-1 hover:text-[#03AAAE]"
                href="mailto:info@overseasfoodconsultants.com"
              >
                <Mail className="size-4 shrink-0 text-[#03AAAE] transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110" />
                info@overseasfoodconsultants.com
              </motion.a>
              <motion.a
                {...reveal(3, 0.42)}
                className="group flex gap-3 transition duration-500 hover:translate-x-1 hover:text-[#03AAAE]"
                href="tel:+15101234567"
              >
                <Phone className="size-4 shrink-0 text-[#03AAAE] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                +1 (510) 123-4567
              </motion.a>
              <motion.p {...reveal(1, 0.5)} className="flex gap-3">
                <MapPin className="size-4 shrink-0 text-[#03AAAE]" />
                123 Food Industry Way,
                <br />
                Global City, 12345
              </motion.p>
            </div>
          </motion.div>
        </div>
        <div className="relative mt-24 flex flex-col items-center justify-between gap-6 overflow-hidden pt-7 text-xs sm:flex-row">
          <motion.span
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute left-0 right-0 top-0 h-px origin-center bg-white/20"
          />
          <motion.span
            animate={{ x: ["-100%", "300%"] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-[#03AAAE] to-transparent shadow-[0_0_12px_rgba(3,170,174,.8)]"
          />
          <motion.p {...reveal(0, 0.12)}>© 2026 Overseas Food Consultants. All Rights Reserved.</motion.p>
          <motion.a
            {...reveal(1, 0.2)}
            href="https://www.codes-inc.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Codesinc website"
            whileHover={{ y: -4, scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="cursor-pointer rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#03AAAE]"
          >
            <img
              src={mark}
              alt="Designed and hosted by Codesinc"
              className="h-10 w-auto object-contain opacity-80 transition-[filter,opacity] duration-500 hover:opacity-100 hover:drop-shadow-[0_0_10px_rgba(3,170,174,.35)]"
            />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}
