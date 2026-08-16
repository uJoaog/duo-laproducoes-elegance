import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";

export type Servico = {
  n: string;
  t: string;
  d: string;
  long: string;
};

export const servicos: Servico[] = [
  {
    n: "01",
    t: "Casamentos",
    d: "Do making of à última música. Cobertura completa em foto e vídeo, com discrição e um olhar atento aos detalhes que ninguém vê.",
    long: "Do making of à última música, acompanhamos o dia inteiro sem interromper o que ele tem de mais bonito. Trabalhamos em dupla — enquanto um observa o gesto, o outro guarda o movimento —, sempre com luz natural quando possível e nenhuma direção artificial. O resultado é um acervo que envelhece bem: fotografias tratadas com mão autoral e um filme feito para ser revisto com a família daqui a vinte anos.",
  },
  {
    n: "02",
    t: "Aniversários",
    d: "Celebrações íntimas ou grandes festas. Registros espontâneos que guardam o clima da noite, não apenas as poses.",
    long: "De jantares íntimos a grandes festas, nosso interesse está no clima da noite — a mesa antes dos convidados, o brinde improvisado, a pista quando ninguém mais posa. Circulamos com discrição e fotografamos o que acontece, não o que foi combinado. Entregamos uma seleção editorial em foto e um vídeo curto, com o ritmo e a trilha da própria celebração.",
  },
  {
    n: "03",
    t: "Corporativo",
    d: "Congressos, lançamentos e confraternizações. Imagens elegantes e prontas para comunicação da sua marca.",
    long: "Congressos, lançamentos, premiações e confraternizações registrados com o mesmo cuidado estético que dedicamos a um casamento. Alinhamos previamente os momentos-chave, os porta-vozes e os enquadramentos que a sua comunicação precisa. Entrega ágil, com material tratado e organizado por eixo — palco, plateia, bastidores e detalhes de cenografia — pronto para imprensa, redes e relatórios.",
  },
  {
    n: "04",
    t: "Ensaios & Pré-Wedding",
    d: "Sessões conduzidas com calma, em locação escolhida a dois, para criar intimidade antes do grande dia.",
    long: "Uma sessão sem pressa, em locação escolhida a dois: a casa de vocês, um campo no fim da tarde, uma rua que significa alguma coisa. Conduzimos com poucas indicações, só o suficiente para que o corpo relaxe e a conversa continue. Além das imagens, o ensaio é o ensaio de verdade — no dia do casamento a câmera já será um rosto conhecido.",
  },
];

function Ornament() {
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden>
      <span className="rule-thin w-16 sm:w-24" />
      <span className="size-1 rotate-45 bg-accent" />
      <span className="rule-thin w-16 sm:w-24" />
    </div>
  );
}

function Header() {
  return (
    <div className="text-center">
      <p className="eyebrow">O que registramos</p>
      <h2 className="mt-6 font-display text-3xl sm:text-[2.6rem]">Serviços</h2>
      <div className="mt-8">
        <Ornament />
      </div>
    </div>
  );
}

function ListaCompleta() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6">
      <div className="border-t border-border">
        {servicos.map((s) => (
          <article
            key={s.t}
            className="grid grid-cols-1 gap-x-10 gap-y-2 border-b border-border py-6 text-center sm:grid-cols-[5rem_1fr_1.4fr] sm:gap-y-3 sm:py-7 sm:text-left"
          >
            <span className="font-serif text-sm text-accent">{s.n}</span>
            <h3 className="font-display text-xl leading-tight sm:text-[1.7rem]">{s.t}</h3>
            <p className="mx-auto max-w-prose text-[0.9rem] leading-[1.8] text-muted-foreground sm:mx-0">
              {s.d}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

function ServicoDetalhe({ s }: { s: Servico }) {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 text-center">
      <div className="flex items-baseline justify-center gap-4">
        <span className="font-serif text-sm italic text-accent">{s.n}</span>
        <h3 className="font-display text-[2rem] leading-tight sm:text-5xl">{s.t}</h3>
      </div>
      <div className="mx-auto mt-7 h-px w-40 bg-border" aria-hidden />
      <p className="mx-auto mt-8 max-w-xl text-[0.98rem] leading-[1.95] text-muted-foreground">
        {s.long}
      </p>
    </div>
  );
}

const STAGES = 6;

export function ServicesSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    let cleanup = () => {};
    let cancelled = false;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const html = document.documentElement;
        const prevBehavior = html.style.scrollBehavior;

        const st = ScrollTrigger.create({
          trigger: el,
          start: "top top",
          end: "bottom bottom",
          onUpdate: (self) => {
            const i = Math.min(STAGES - 1, Math.max(0, Math.floor(self.progress * STAGES)));
            setStage(i);
          },
          snap: {
            snapTo: Array.from({ length: STAGES }, (_, i) => (i + 0.5) / STAGES),
            duration: { min: 0.2, max: 0.5 },
            delay: 0.08,
            ease: "power1.inOut",
            onStart: () => {
              html.style.scrollBehavior = "auto";
            },
            onComplete: () => {
              html.style.scrollBehavior = prevBehavior;
            },
          },
        });

        return () => {
          html.style.scrollBehavior = prevBehavior;
          st.kill();
          setStage(0);
        };
      });

      cleanup = () => mm.revert();
    })();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  const panes = [
    <ListaCompleta key="lista-0" />,
    ...servicos.map((s) => <ServicoDetalhe key={s.t} s={s} />),
    <ListaCompleta key="lista-1" />,
  ];

  return (
    <section id="servicos" className="bg-[#e7e4df]">
      {/* MOBILE — fallback simples com fade-in */}
      <div className="px-6 py-24 md:hidden">
        <Reveal>
          <Header />
        </Reveal>
        <div className="mt-14">
          <Reveal delay={90}>
            <ListaCompleta />
          </Reveal>
        </div>
      </div>

      {/* DESKTOP — seção fixa controlada por scroll */}
      <div ref={wrapperRef} className="relative hidden h-[600vh] md:block">
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
          <div className="shrink-0">
            <Header />
          </div>

          <div className="relative mt-14 w-full flex-1">
            {panes.map((pane, i) => (
              <div
                key={i}
                aria-hidden={stage !== i}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-[600ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
                  stage === i
                    ? "translate-y-0 scale-100 opacity-100"
                    : `pointer-events-none scale-[0.98] opacity-0 ${
                        i < stage ? "-translate-y-6" : "translate-y-6"
                      }`
                }`}
              >
                {pane}
              </div>
            ))}
          </div>

          <div className="mb-10 flex shrink-0 items-center gap-2" aria-hidden>
            {Array.from({ length: STAGES }).map((_, i) => (
              <span
                key={i}
                className={`h-px transition-all duration-500 ${
                  stage === i ? "w-8 bg-accent" : "w-4 bg-ink/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
