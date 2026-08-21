const services = [
  { title: "Fine Line", description: "Traços finos e delicados para desenhos minimalistas." },
  { title: "Realismo", description: "Retratos e cenas com profundidade e detalhes fotográficos." },
  { title: "Old School", description: "Traço marcado e cores vivas em estilo tradicional." },
  { title: "Cover Up", description: "Transformação de tatuagens antigas em novas peças." },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="mb-10 text-center text-2xl font-semibold tracking-tight">
        Serviços
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-xl border border-black/[.08] p-6 dark:border-white/[.145]"
          >
            <h3 className="mb-2 font-medium">{service.title}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
