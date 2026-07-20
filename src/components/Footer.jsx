import logo from "@/assets/footer/image 9 (1).png";
import mark from "@/assets/footer/image 13 (3).png";
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
export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] px-6 pb-8 pt-16 text-zinc-500">
      <div className="mx-auto w-full max-w-[1650px]">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="OFC" className="size-14" />
              <span className="text-white">
                <b className="block text-xl font-medium">OVERSEAS</b>
                <small className="text-[#03AAAE]">FOOD CONSULTANTS</small>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-xs leading-5">
              Overseas Food Consultants empowers food businesses worldwide with
              expert consulting in food safety, quality, compliance, and
              strategy.
            </p>
            <div className="mt-6 flex gap-3">
              {[FaFacebookF, FaLinkedinIn, FaXTwitter, FaInstagram].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social profile"
                    className="grid size-9 place-items-center rounded-full border border-white/15 transition duration-300 hover:-translate-y-1 hover:border-[#03AAAE] hover:text-[#03AAAE]"
                  >
                    <Icon className="size-4" />
                  </a>
                ),
              )}
            </div>
          </div>
          <div>
            <h3 className="text-[.78rem] font-extrabold uppercase tracking-[.05em] text-white">Quick links</h3>
            <div className="mt-6 space-y-4">
              {quick.map(([label, id]) => (
                <HashLink
                  smooth
                  className="block text-xs transition duration-300 hover:translate-x-1 hover:text-[#03AAAE]"
                  to={`/#${id}`}
                  key={id}
                >
                  {label}
                </HashLink>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[.78rem] font-extrabold uppercase tracking-[.05em] text-white">Our services</h3>
            <div className="mt-6 space-y-4 text-xs">
              <p>Food Safety & Quality</p>
              <p>Regulatory Compliance</p>
              <p>Market Research</p>
              <p>Product Development</p>
              <p>Supply Chain</p>
            </div>
          </div>
          <div>
            <h3 className="text-[.78rem] font-extrabold uppercase tracking-[.05em] text-white">Contact us</h3>
            <div className="mt-6 space-y-5 text-xs">
              <a
                className="flex gap-3 hover:text-[#03AAAE]"
                href="mailto:info@overseasfoodconsultants.com"
              >
                <Mail className="size-4 shrink-0 text-[#03AAAE]" />
                info@overseasfoodconsultants.com
              </a>
              <a
                className="flex gap-3 hover:text-[#03AAAE]"
                href="tel:+15101234567"
              >
                <Phone className="size-4 shrink-0 text-[#03AAAE]" />
                +1 (510) 123-4567
              </a>
              <p className="flex gap-3">
                <MapPin className="size-4 shrink-0 text-[#03AAAE]" />
                123 Food Industry Way,
                <br />
                Global City, 12345
              </p>
            </div>
          </div>
        </div>
        <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-white/20 pt-7 text-xs sm:flex-row">
          <p>© 2026 Overseas Food Consultants. All Rights Reserved.</p>
          <img
            src={mark}
            alt="Designed and hosted by Codesinc"
            className="h-10 w-auto object-contain"
          />
        </div>
      </div>
    </footer>
  );
}
