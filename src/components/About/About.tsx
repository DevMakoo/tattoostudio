"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Anos de estúdio" },
  { value: "3", label: "Artistas residentes" },
  { value: "500+", label: "Tatuagens autorais" },
  { value: "100%", label: "Trabalho exclusivo" },
];

export default function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium uppercase tracking-widest text-zinc-500"
          >
            Studio — Sobre
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl"
          >
            Mais que uma tatuagem,
            <br />
            <span className="text-zinc-400 dark:text-zinc-600">
              uma narrativa na pele.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-md text-lg text-zinc-600 dark:text-zinc-400"
          >
            Cada peça nasce de uma conversa — entre a história de quem
            tatua e a técnica de quem desenha. Não replicamos referências
            prontas: criamos traços únicos, pensados para o corpo que vão
            habitar.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-t border-black/[.08] pt-10 dark:border-white/[.145] lg:border-t-0 lg:border-l lg:pl-12 lg:pt-0">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <span className="text-4xl font-bold tracking-tight">
                {stat.value}
              </span>
              <span className="mt-2 block text-xs font-medium uppercase tracking-widest text-zinc-500">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
