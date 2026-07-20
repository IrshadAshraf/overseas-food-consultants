import bg from "@/assets/contact us/0dc8bd27e182f582165a4ab903b5a0669e416f7e.jpg";
import Button from "@/ui/Button";
import ContactDialog from "@/ui/ContactDialog";
import Reveal from "@/ui/Reveal";
import { useState } from "react";
export default function ContactUs() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="relative overflow-hidden bg-[#03AAAE] py-16">
        <img
          src={bg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50" />
        <Reveal className="relative mx-auto flex w-[calc(100%-2rem)] max-w-[1650px] flex-col items-start justify-between gap-8 sm:w-[calc(100%-2.5rem)] md:flex-row md:items-center">
          <div className="flex items-center gap-6">
            <span className="grid size-16 shrink-0 place-items-center rounded-full border-2 border-white text-lg font-black text-white">
              OFC
            </span>
            <div>
              <h2 className="text-sm font-black text-white sm:text-xl lg:text-3xl">
                Ready to Elevate Your Food Business?
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-white/60">
                Let’s work together to create a safer, more successful, and
                sustainable future.
              </p>
            </div>
          </div>
          <Button
            variant="dark"
            onClick={() => setOpen(true)}
            className="min-w-48 text-xs uppercase shadow-2xl"
          >
            Let’s connect
          </Button>
        </Reveal>
      </div>
      <ContactDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}
