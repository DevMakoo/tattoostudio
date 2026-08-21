import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-black/[.08] px-6 py-8 text-center text-sm text-zinc-600 dark:border-white/[.145] dark:text-zinc-400">
      © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
    </footer>
  );
}
