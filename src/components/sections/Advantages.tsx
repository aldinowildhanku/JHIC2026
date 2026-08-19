import { SectionHeading } from "@/components/sections/SectionHeading";
import { advantages } from "@/lib/site";
import { getIcon } from "@/lib/icons";

/**
 * Bagian "Keunggulan": kartu nilai jual sekolah di atas latar hitam.
 * Ikon dipetakan dari data (lib/site.ts) melalui lib/icons.ts.
 */
export function Advantages() {
  return (
    <section id="keunggulan" className="bg-secondary py-20 text-secondary-foreground sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          dark
          eyebrow="Keunggulan"
          title={advantages.heading}
          subtitle={advantages.subheading}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.items.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-primary/50 hover:bg-white/10"
              >
                <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  {Icon ? <Icon className="size-6" aria-hidden /> : null}
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}