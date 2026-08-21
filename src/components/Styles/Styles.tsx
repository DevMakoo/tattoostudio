"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type TattooStyle = {
  number: string;
  name: string;
  description: string;
};

const styles: TattooStyle[] = [
  {
    number: "01",
    name: "Blackwork",
    description: "Preenchimentos sólidos e contrastes fortes em preto absoluto.",
  },
  {
    number: "02",
    name: "Fine Line",
    description: "Traços finos e delicados para composições minimalistas.",
  },
  {
    number: "03",
    name: "Realism",
    description: "Sombreados e profundidade que replicam fotografias.",
  },
  {
    number: "04",
    name: "Old School",
    description: "Traço marcado e cores vivas da tatuagem tradicional.",
  },
  {
    number: "05",
    name: "Neo Traditional",
    description: "Ilustração ousada com curvas orgânicas e paleta rica.",
  },
  {
    number: "06",
    name: "Custom",
    description: "Projetos autorais desenhados sob medida para você.",
  },
];

const backgrounds = [
  "bg-black",
  "bg-zinc-100",
  "bg-gradient-to-br from-zinc-800 to-black",
  "bg-gradient-to-br from-amber-950 to-black",
  "bg-gradient-to-br from-teal-950 to-black",
  "bg-zinc-900",
];

function StyleArt({ index }: { index: number }) {
  return (
    <div className={`relative h-full w-full ${backgrounds[index]}`}>
      <svg
        viewBox="0 0 200 250"
        className="absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        {index === 0 && (
          <g fill="white">
            <polygon points="40,60 160,40 140,120 60,140" opacity="0.9" />
            <polygon points="70,140 170,160 130,220 50,200" opacity="0.6" />
            <circle cx="150" cy="70" r="18" opacity="0.8" />
          </g>
        )}

        {index === 1 && (
          <g stroke="black" strokeWidth="1.2" strokeLinecap="round">
            <path d="M60,220 C60,180 40,160 60,120 C80,80 60,50 100,30" />
            <path d="M60,150 C80,140 90,150 80,165" />
            <path d="M55,110 C40,100 35,85 50,75" />
          </g>
        )}

        {index === 2 && (
          <>
            <defs>
              <filter id="soft-blur">
                <feGaussianBlur stdDeviation="8" />
              </filter>
            </defs>
            <g fill="white" filter="url(#soft-blur)">
              <circle cx="100" cy="110" r="55" opacity="0.15" />
              <circle cx="130" cy="150" r="40" opacity="0.12" />
              <circle cx="80" cy="170" r="30" opacity="0.14" />
            </g>
          </>
        )}

        {index === 3 && (
          <polygon
            points="100,70 113,107 152,108 121,132 132,170 100,147 68,170 79,132 48,108 87,107"
            fill="none"
            stroke="#fef3c7"
            strokeWidth="5"
            strokeLinejoin="round"
          />
        )}

        {index === 4 && (
          <g>
            <path
              d="M100,60 C140,80 150,130 100,190 C50,130 60,80 100,60 Z"
              fill="white"
              opacity="0.85"
            />
            <circle cx="70" cy="90" r="4" fill="#fb923c" />
            <circle cx="135" cy="150" r="4" fill="#fb923c" />
            <circle cx="100" cy="200" r="4" fill="#fb923c" />
          </g>
        )}

        {index === 5 && (
          <g stroke="white" strokeWidth="1.5" fill="none" opacity="0.85">
            <path
              d="M40,200 C70,120 60,80 110,90 C160,100 130,160 170,150"
              strokeDasharray="4 4"
            />
            <circle cx="40" cy="200" r="3" fill="white" stroke="none" />
          </g>
        )}
      </svg>
    </div>
  );
}

export default function Styles() {
  const [active, setActive] = useState(0);

  return (
    <section id="estilos" className="mx-auto max-w-6xl px-6 py-28">
      <div className="mb-14 flex flex-col gap-3">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium uppercase tracking-widest text-zinc-500"
        >
          Especialidades
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-bold uppercase tracking-tight sm:text-5xl"
        >
          Our Styles
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-zinc-600 dark:text-zinc-400"
        >
          Different styles. One signature.
        </motion.p>
      </div>

      <div className="hidden gap-16 lg:grid lg:grid-cols-[1.3fr_1fr]">
        <ul>
          {styles.map((style, index) => {
            const isActive = index === active;
            return (
              <li
                key={style.name}
                className="border-b border-black/[.08] dark:border-white/[.145]"
              >
                <button
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  className="flex w-full items-baseline gap-6 py-6 text-left"
                >
                  <span
                    className={`font-mono text-sm transition-colors ${
                      isActive
                        ? "text-black dark:text-white"
                        : "text-zinc-400 dark:text-zinc-600"
                    }`}
                  >
                    {style.number}
                  </span>
                  <span
                    className={`text-3xl font-bold uppercase tracking-tight transition-colors sm:text-4xl ${
                      isActive
                        ? "text-black dark:text-white"
                        : "text-zinc-300 dark:text-zinc-700"
                    }`}
                  >
                    {style.name}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="sticky top-24 aspect-[4/5] self-start overflow-hidden rounded-2xl">
          <AnimatePresence initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute inset-0 h-full w-full"
            >
              <StyleArt index={active} />
              <p className="absolute bottom-6 left-6 right-6 text-xs font-medium uppercase tracking-widest text-white/70">
                {styles[active].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:hidden">
        {styles.map((style, index) => (
          <div
            key={style.name}
            className="overflow-hidden rounded-2xl border border-black/[.08] dark:border-white/[.145]"
          >
            <div className="relative aspect-[4/5]">
              <StyleArt index={index} />
            </div>
            <div className="p-5">
              <span className="font-mono text-xs text-zinc-500">
                {style.number}
              </span>
              <h3 className="text-lg font-bold uppercase tracking-tight">
                {style.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {style.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
