const testimonials = [
  { name: "Marina", quote: "Ambiente super acolhedor e resultado impecável." },
  { name: "Pedro", quote: "Atenção aos detalhes do início ao fim." },
  { name: "Luiza", quote: "Superou minhas expectativas, recomendo demais." },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="mb-10 text-center text-2xl font-semibold tracking-tight">
        Depoimentos
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {testimonials.map((testimonial) => (
          <blockquote
            key={testimonial.name}
            className="rounded-xl border border-black/[.08] p-6 dark:border-white/[.145]"
          >
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <footer className="mt-4 text-sm font-medium">
              {testimonial.name}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
