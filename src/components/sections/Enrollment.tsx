import { ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { school, enrollment } from "@/lib/site";

/**
 * Bagian ajakan mendaftar (CTA).
 * Menonjolkan formulir pendaftaran dan alternatif via WhatsApp.
 */
export function Enrollment() {
  return (
    <section id="pendaftaran" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border bg-muted/40 px-6 py-14 text-center sm:px-12">
          {/* Aksen dekoratif */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 -right-16 size-56 rounded-full bg-primary/10 blur-3xl"
          />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              {enrollment.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
              {enrollment.subheading}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <a href={school.mapsUrl} target="_blank" rel="noopener noreferrer">
                  {enrollment.button}
                  <ArrowRight className="size-4" aria-hidden />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                {/* Placeholder: ganti nomor WhatsApp asli di lib/site.ts */}
                <a
                  href={`https://wa.me/${school.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-4" aria-hidden />
                  Hubungi via WhatsApp
                </a>
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">{enrollment.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}