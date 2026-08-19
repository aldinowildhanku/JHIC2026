import { CalendarDays, ArrowRight, Newspaper } from "lucide-react";

import { SectionHeading } from "@/components/sections/SectionHeading";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { news } from "@/lib/site";

/**
 * Bagian "Berita": kartu berita/artikel terbaru sekolah.
 * Data diambil dari lib/site.ts — tambah/hapus item di sana.
 */
export function News() {
  return (
    <section id="berita" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Berita"
          title="Kabar Terbaru dari Sekolah"
          subtitle="Ikuti perkembangan kegiatan, prestasi, dan pengumuman dari keluarga besar JHIC 1 Malang Dinoyo."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <Card key={item.title} className="flex flex-col overflow-hidden transition-shadow hover:shadow-md">
              {/* Placeholder visual berita */}
              <div className="flex h-40 items-center justify-center bg-secondary/5">
                <Newspaper className="size-12 text-primary/40" aria-hidden />
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="secondary" className="text-xs">
                    {item.category}
                  </Badge>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <CalendarDays className="size-3.5" aria-hidden />
                    {item.date}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="flex-1 pb-4">
                <h3 className="text-base leading-snug font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.excerpt}
                </p>
              </CardContent>

              <CardFooter className="pt-0">
                <a
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  Baca selengkapnya
                  <ArrowRight className="size-4" aria-hidden />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}