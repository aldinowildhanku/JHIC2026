import { CheckCircle2, Eye, Target } from "lucide-react";

import { SectionHeading } from "@/components/sections/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { about, school } from "@/lib/site";

/**
 * Bagian "Tentang": narasi sekolah, poin unggulan, visi & misi.
 * Diletakkan di atas latar putih (warna dominan).
 */
export function About() {
  return (
    <section id="tentang" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Tentang Kami"
          title={about.heading}
          subtitle={about.subheading}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Kolom narasi + poin unggulan */}
          <div>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 20)}>{paragraph}</p>
              ))}
            </div>

            <ul className="mt-8 space-y-4">
              {about.highlights.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-primary" aria-hidden />
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom visi & misi */}
          <div className="space-y-5">
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2.5">
                <span className="flex size-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                  <Eye className="size-5" aria-hidden />
                </span>
                <h3 className="text-lg font-bold">Visi Kami</h3>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">{about.vision}</p>
            </div>

            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2.5">
                <span className="flex size-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                  <Target className="size-5" aria-hidden />
                </span>
                <h3 className="text-lg font-bold">Misi Kami</h3>
              </div>
              <ul className="space-y-3">
                {about.mission.map((item) => (
                  <li key={item.slice(0, 20)} className="flex items-start gap-2.5 text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Badge variant="secondary" className="text-xs">
              Berdiri sejak {school.establishedYear} · NPSN {school.npsn}
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}