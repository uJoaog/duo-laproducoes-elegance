import { useEffect, useState } from "react";

const links = [
  ["Serviços", "#servicos"],
  ["Portfólio", "#portfolio"],
  ["Depoimentos", "#depoimentos"],
  ["Contato", "#contato"],
];

export function SiteHeader() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const tone = solid ? "text-ink" : "text-ivory";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          solid ? "border-b border-ink/10 bg-ivory/95 backdrop-blur" : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#top" className={`font-display text-base transition-colors duration-500 ${tone}`}>
            duo<span className="text-accent">.</span>laproducoes
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className={`text-[0.68rem] font-light tracking-[0.28em] uppercase transition-colors duration-500 hover:text-accent ${tone}`}
              >
                {label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="flex flex-col items-end gap-[6px] py-2 md:hidden"
          >
            <span className={`block h-px w-7 transition-colors duration-500 ${solid ? "bg-ink" : "bg-ivory"}`} />
            <span className={`block h-px w-5 transition-colors duration-500 ${solid ? "bg-ink" : "bg-ivory"}`} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-ivory transition-opacity duration-500 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <span className="font-display text-base text-ink">
            duo<span className="text-accent">.</span>laproducoes
          </span>
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
            className="relative size-8"
          >
            <span className="absolute top-1/2 left-1/2 block h-px w-6 -translate-x-1/2 rotate-45 bg-ink" />
            <span className="absolute top-1/2 left-1/2 block h-px w-6 -translate-x-1/2 -rotate-45 bg-ink" />
          </button>
        </div>
        <nav className="mt-20 flex flex-col items-center gap-12">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-ink"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
