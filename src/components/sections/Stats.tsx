import { keyStats } from "@/lib/site";

/**
 * Pita angka kunci (statistik) sekolah.
 * Berlatar oranye untuk memberi aksen kuat di tengah halaman.
 */
export function Stats() {
  return (
    <section className="bg-primary py-14 text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 text-center sm:grid-cols-3 lg:grid-cols-5">
          {keyStats.map((stat) => (
            <div key={stat.label}>
              <dd className="text-3xl font-bold tracking-tight sm:text-4xl">
                {stat.value}
              </dd>
              <dt className="mt-1.5 text-sm font-medium text-primary-foreground/80">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}