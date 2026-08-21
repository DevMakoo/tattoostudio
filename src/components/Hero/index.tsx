"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-16 lg:min-h-[85vh] lg:grid-cols-2 lg:gap-16 lg:pt-8">
        <div className="flex flex-col gap-8">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-6xl font-bold uppercase leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl"
          >
            The art
            <br />
            <span className="text-zinc-400 dark:text-zinc-600">
              you wear.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-sm text-lg text-zinc-600 dark:text-zinc-400"
          >
            Tatuagens autorais criadas para transformar ideias em arte.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <Link
              href="/portfolio"
              className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-7 text-sm font-medium uppercase tracking-wide text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            >
              Explorar portfólio
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-4 flex flex-col gap-1 text-xs font-medium uppercase tracking-widest text-zinc-500"
          >
            <span>Custom Tattoo Studio</span>
            <span>Salvador — BA</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-black"
        >
          <svg
            viewBox="0 0 200 250"
            className="absolute inset-0 h-full w-full text-white/60"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            aria-hidden="true"
          >
            <circle cx="100" cy="125" r="95" strokeWidth="0.75" />
            <circle cx="100" cy="125" r="45" strokeWidth="0.75" />
            <circle cx="100" cy="125" r="6" fill="currentColor" stroke="none" />
            <line x1="145" y1="125" x2="195" y2="125" />
            <line x1="139" y1="148" x2="182" y2="173" />
            <line x1="123" y1="164" x2="148" y2="207" />
            <line x1="100" y1="170" x2="100" y2="220" />
            <line x1="78" y1="164" x2="53" y2="207" />
            <line x1="61" y1="148" x2="18" y2="173" />
            <line x1="55" y1="125" x2="5" y2="125" />
            <line x1="61" y1="102" x2="18" y2="77" />
            <line x1="78" y1="86" x2="53" y2="43" />
            <line x1="100" y1="80" x2="100" y2="30" />
            <line x1="123" y1="86" x2="148" y2="43" />
            <line x1="139" y1="102" x2="182" y2="77" />
            {[
              [195, 125],
              [182, 173],
              [148, 207],
              [100, 220],
              [53, 207],
              [18, 173],
              [5, 125],
              [18, 77],
              [53, 43],
              [100, 30],
              [148, 43],
              [182, 77],
            ].map(([cx, cy]) => (
              <circle
                key={`${cx}-${cy}`}
                cx={cx}
                cy={cy}
                r="2"
                fill="currentColor"
                stroke="none"
              />
            ))}
          </svg>
          <span className="absolute bottom-6 left-6 text-xs font-medium uppercase tracking-widest text-white/70">
            Trabalho autoral
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="hidden items-center justify-center gap-2 pb-10 text-xs font-medium uppercase tracking-widest text-zinc-500 lg:flex"
      >
        <span>Scroll to explore</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
