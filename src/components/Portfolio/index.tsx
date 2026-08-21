const items = Array.from({ length: 8 }, (_, i) => i + 1);

export default function Portfolio() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="mb-10 text-center text-2xl font-semibold tracking-tight">
        Portfólio
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {items.map((item) => (
          <div
            key={item}
            className="aspect-square rounded-lg bg-zinc-100 dark:bg-zinc-900"
          />
        ))}
      </div>
    </section>
  );
}
