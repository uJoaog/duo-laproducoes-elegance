import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/SiteHeader";
import { PortfolioMosaic } from "@/components/PortfolioMosaic";
import { ServicesSection } from "@/components/ServicesSection";

import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";

const WHATSAPP = "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento";
const INSTAGRAM = "https://instagram.com/duo.laproducoes";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "duo.laproducoes — Fotografia e Filmagem de Eventos" },
      {
        name: "description",
        content:
          "Fotografia e filmagem de casamentos, aniversários e eventos corporativos. Um olhar delicado para eternizar os momentos que importam.",
      },
      { property: "og:title", content: "duo.laproducoes — Fotografia e Filmagem de Eventos" },
      {
        property: "og:description",
        content:
          "Dupla criativa de fotografia e vídeo para casamentos, aniversários e eventos corporativos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});




const depoimentos = [
  {
    q: "Eles estavam em todos os lugares e, ao mesmo tempo, em lugar nenhum. Só percebemos o cuidado quando vimos as fotos.",
    a: "Marina & Rafael",
    e: "Casamento — Serra da Cantareira",
  },
  {
    q: "O filme do nosso casamento é a coisa mais bonita que temos. Assistimos junto com a família todo ano.",
    a: "Juliana & Pedro",
    e: "Casamento — Campos do Jordão",
  },
  {
    q: "Profissionalismo absoluto no nosso evento corporativo. Material entregue no prazo e acima da expectativa.",
    a: "Camila Duarte",
    e: "Diretora de Marketing",
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

function Index() {
  return (
    <main id="top" className="text-foreground">
      <SiteHeader />
      {/* HERO */}
      <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6">
        <img
          src={hero}
          alt="Casal de noivos ao pôr do sol sob arcos de pedra"
          width={1920}
          height={1280}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="absolute inset-4 border border-ivory/25 sm:inset-8" aria-hidden />

        <div className="relative z-10 flex flex-col items-center text-center">
          <Reveal>
            <p className="eyebrow text-ivory/70">Fotografia &amp; Filmagem de Eventos</p>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="mt-7 font-display text-[2.6rem] leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
              duo<span className="text-accent">.</span>laproducoes
            </h1>
          </Reveal>
          <Reveal delay={300} className="mt-8">
            <Ornament />
          </Reveal>
          <Reveal delay={420}>
            <p className="mt-8 max-w-md font-serif text-xl italic leading-relaxed text-ivory/85 sm:max-w-lg sm:text-2xl">
              Eternizando os momentos que importam
            </p>
          </Reveal>
          <Reveal delay={560}>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-12 inline-block rounded-full border border-ivory/45 px-9 py-4 text-[0.7rem] tracking-[0.3em] text-ivory uppercase transition-colors duration-500 hover:border-accent hover:bg-accent/90 hover:text-ink"
            >
              Consultar data
            </a>
          </Reveal>
        </div>

        <div className="absolute bottom-10 z-10 flex flex-col items-center gap-3" aria-hidden>
          <span className="text-[0.6rem] tracking-[0.3em] text-ivory/50 uppercase">Role</span>
          <span className="h-12 w-px bg-ivory/30" />
        </div>
      </section>

      {/* SOBRE */}
      <section className="px-6 py-24 sm:py-36">
        <div className="mx-auto grid max-w-5xl items-center gap-14 md:grid-cols-[1fr_1.1fr] md:gap-20">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-3 border border-accent/35" aria-hidden />
              <img
                src={about}
                alt="Dupla de profissionais fotografando e filmando um evento"
                width={1000}
                height={1250}
                loading="lazy"
                className="relative w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="text-center md:text-left">
            <Reveal>
              <p className="eyebrow">Sobre nós</p>
              <h2 className="mt-6 font-display text-3xl leading-tight sm:text-[2.6rem]">
                Duas visões,
                <br />
                uma mesma história
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mx-auto mt-8 max-w-prose text-[0.98rem] leading-[1.9] text-muted-foreground md:mx-0">
                A duo.laproducoes nasceu do encontro de uma fotógrafa e um cinegrafista que
                acreditam na mesma coisa: os melhores registros acontecem quando ninguém percebe a
                câmera. Trabalhamos sempre em dupla — enquanto um observa o gesto, o outro guarda o
                movimento.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="mx-auto mt-6 max-w-prose text-[0.98rem] leading-[1.9] text-muted-foreground md:mx-0">
                Cobertura completa de foto e vídeo, do planejamento à entrega, com tratamento
                autoral, luz natural sempre que possível e nenhuma pressa. O resultado é um acervo
                que envelhece bem — para ser revisto daqui a vinte anos.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-12 flex flex-wrap justify-center gap-x-14 gap-y-8 md:justify-start">

                {[
                  ["+180", "eventos registrados"],
                  ["2", "profissionais em cada evento"],
                  ["8 anos", "de estrada juntos"],
                ].map(([k, v]) => (
                  <div key={v}>
                    <p className="font-display text-2xl text-primary">{k}</p>
                    <p className="mt-1 text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
                      {v}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <ServicesSection />


      {/* PORTFÓLIO */}
      <section id="portfolio" className="overflow-hidden bg-[#e8e5dd] py-24 sm:py-36">
        <Reveal className="mx-auto max-w-4xl px-6 text-center">
          <p className="eyebrow">Seleção</p>
          <h2 className="mt-6 font-display text-3xl sm:text-[2.6rem]">Portfólio</h2>
          <p className="mx-auto mt-6 max-w-md font-serif text-lg italic text-muted-foreground">
            Um recorte de noites, gestos e detalhes que ficaram.
          </p>
        </Reveal>

        <div className="mt-14">
          <PortfolioMosaic />
        </div>

        <p className="eyebrow mt-8 hidden text-center sm:block">Arraste para o lado</p>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="bg-[#cdd9c3] px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <Reveal className="text-center">
            <Ornament />
          </Reveal>
          <div className="mt-16 grid gap-14 md:grid-cols-3 md:gap-10">
            {depoimentos.map((d, i) => (
              <Reveal key={d.a} delay={i * 120}>
                <blockquote className="text-center md:text-left">
                  <p className="font-serif text-xl leading-relaxed italic text-foreground/85">
                    "{d.q}"
                  </p>
                  <footer className="mt-6">
                    <p className="text-[0.72rem] tracking-[0.22em] uppercase">{d.a}</p>
                    <p className="mt-2 text-[0.8rem] text-muted-foreground">{d.e}</p>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="relative overflow-hidden bg-[#5d5a50] px-6 py-28 text-ivory sm:py-36">
        <div className="absolute inset-4 border border-ivory/15 sm:inset-8" aria-hidden />
        <div className="relative mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow text-ivory/70">Vamos conversar</p>
            <h2 className="mt-7 font-display text-3xl leading-tight text-ivory sm:text-5xl">
              Sua data ainda está livre
            </h2>
            <p className="mx-auto mt-8 max-w-md font-serif text-xl italic text-ivory/80">
              Conte-nos sobre o seu evento. Respondemos pessoalmente, sem formulários longos.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="w-full rounded-full border border-[#8FAE83] bg-[#8FAE83] px-9 py-4 text-[0.7rem] tracking-[0.3em] text-ink uppercase transition-colors duration-500 hover:bg-transparent hover:text-[#8FAE83] sm:w-auto"
              >
                WhatsApp
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="w-full rounded-full border border-ivory/40 px-9 py-4 text-[0.7rem] tracking-[0.3em] text-ivory uppercase transition-colors duration-500 hover:border-ivory hover:bg-ivory/10 sm:w-auto"
              >
                Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="px-6 py-14 text-center">
        <p className="font-display text-lg">
          duo<span className="text-accent">.</span>laproducoes
        </p>
        <p className="mt-4 text-[0.68rem] tracking-[0.24em] text-muted-foreground uppercase">
          Fotografia &amp; Filmagem — Brasil
        </p>
      </footer>

      {/* WhatsApp fixo */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed right-5 bottom-5 z-50 flex items-center gap-3 rounded-full border border-[#8FAE83] bg-[#8FAE83] px-5 py-3 text-[0.68rem] tracking-[0.24em] text-ink uppercase shadow-none backdrop-blur transition-colors duration-500 hover:bg-[#7ea073]"
      >
        <span className="size-1.5 rotate-45 bg-ink" aria-hidden />
        WhatsApp
      </a>
    </main>
  );
}
