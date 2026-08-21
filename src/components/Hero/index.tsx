import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-6 px-6 py-32 text-center">
      <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
        Arte na pele, feita para durar
      </h1>
      <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
        Tatuagens autorais, fine line e realismo em um estúdio pensado para
        sua experiência.
      </p>
      <Link
        href="/contato"
        className="mt-2 flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
      >
        Agende sua sessão
      </Link>
    </section>
  );
}
