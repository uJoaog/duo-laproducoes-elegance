import { useEffect, useState } from "react";

const links = [
  ["Serviços", "#servicos"],
  ["Portfólio", "#portfolio"],
  ["Depoimentos", "#depoimentos"],
  ["Contato", "#contato"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-ivory/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#top" className="font-display text-base text-ink transition-colors duration-500">
            duo<span className="text-accent">.</span>laproducoes
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-[0.68rem] font-light tracking-[0.28em] uppercase text-ink transition-colors duration-500 hover:text-accent"
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
            <span className="block h-px w-7 bg-ink transition-colors duration-500" />
            <span className="block h-px w-5 bg-ink transition-colors duration-500" />
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
