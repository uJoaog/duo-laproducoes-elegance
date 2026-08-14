import { useEffect, useRef } from "react";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";

type Shot = { src: string; alt: string; ratio: string };

const columns: Shot[][] = [
  [
    { src: g1, alt: "Mesa posta com velas e flores secas", ratio: "aspect-[3/2]" },
    { src: g4, alt: "Evento corporativo noturno em salão iluminado", ratio: "aspect-[2/1]" },
    { src: g2, alt: "Convidados celebrando em festa elegante", ratio: "aspect-[8/3]" },
  ],
  [
    { src: g3, alt: "Mãos da noiva segurando buquê delicado", ratio: "aspect-[2/1]" },
    { src: g5, alt: "Bolo de aniversário com velas acesas", ratio: "aspect-[3/2]" },
  ],
  [
    { src: g2, alt: "Brinde entre convidados ao entardecer", ratio: "aspect-[8/3]" },
    { src: g1, alt: "Detalhes da decoração em tons neutros", ratio: "aspect-[2/1]" },
    { src: g3, alt: "Retrato espontâneo durante a cerimônia", ratio: "aspect-[3/2]" },
  ],
  [
    { src: g5, alt: "Velas acesas em celebração noturna", ratio: "aspect-[2/1]" },
    { src: g4, alt: "Salão preparado para confraternização", ratio: "aspect-[3/2]" },
  ],
];

export function PortfolioMosaic() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const half = () => el.scrollWidth / 2;

    const normalize = () => {
      const h = half();
      if (h <= 0) return;
      if (el.scrollLeft >= h) el.scrollLeft -= h;
      else if (el.scrollLeft < 0) el.scrollLeft += h;
    };

    const onScroll = () => normalize();

    const onWheel = (e: WheelEvent) => {
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (!delta) return;
      e.preventDefault();
      el.scrollLeft += delta;
      normalize();
    };

    let dragging = false;
    let startX = 0;
    let startScroll = 0;

    const onDown = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      dragging = true;
      startX = e.clientX;
      startScroll = el.scrollLeft;
      el.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      el.scrollLeft = startScroll - (e.clientX - startX);
      normalize();
    };
    const onUp = () => {
      dragging = false;
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);

    return () => {
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
    };
  }, []);

  const set = (key: string) =>
    columns.map((col, ci) => (
      <div key={`${key}-${ci}`} className="flex w-[58vw] shrink-0 flex-col gap-2 sm:w-[22rem]">
        {col.map((s, i) => (
          <figure key={`${key}-${ci}-${i}`} className="overflow-hidden">
            <img
              src={s.src}
              alt={s.alt}
              loading="lazy"
              draggable={false}
              className={`w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.04] ${s.ratio}`}
            />
          </figure>
        ))}
      </div>
    ));

  return (
    <div
      ref={ref}
      className="no-scrollbar w-full cursor-grab overflow-x-auto overscroll-x-contain active:cursor-grabbing"
    >
      <div className="flex w-max gap-2 px-6">
        {set("a")}
        {set("b")}
      </div>
    </div>
  );
}
