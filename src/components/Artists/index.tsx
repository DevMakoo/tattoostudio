const artists = [
  { name: "Alex Ramos", specialty: "Realismo" },
  { name: "Bia Nunes", specialty: "Fine Line" },
  { name: "Caio Souza", specialty: "Old School" },
];

export default function Artists() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="mb-10 text-center text-2xl font-semibold tracking-tight">
        Artistas
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {artists.map((artist) => (
          <div key={artist.name} className="flex flex-col items-center gap-3 text-center">
            <div className="h-32 w-32 rounded-full bg-zinc-100 dark:bg-zinc-900" />
            <h3 className="font-medium">{artist.name}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {artist.specialty}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
