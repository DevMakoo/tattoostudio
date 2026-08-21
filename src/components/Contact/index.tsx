import { siteConfig } from "@/data/site";

export default function Contact() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-6 py-20 text-center">
      <h2 className="text-2xl font-semibold tracking-tight">Contato</h2>
      <p className="text-zinc-600 dark:text-zinc-400">
        Fale com a gente para agendar sua sessão ou tirar dúvidas.
      </p>
      <div className="flex flex-col gap-2 text-sm font-medium">
        <a
          href={siteConfig.social.whatsapp}
          className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
        >
          WhatsApp
        </a>
        <a
          href={siteConfig.social.instagram}
          className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
        >
          Instagram
        </a>
      </div>
    </section>
  );
}
