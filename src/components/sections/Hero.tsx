import { ArrowRight, Sparkles, GraduationCap, Award, Users, Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { hero } from "@/lib/site";

const statIcons = [GraduationCap, Users, Award, Heart] as const;

/**
 * Bagian pembuka halaman (hero).
 * Latar hitam dengan aksen oranye untuk kesan modern dan berwibawa.
 */
export function Hero() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-secondary text-secondary-foreground"
    >
      {/* Dekorasi latar: lingkaran & titik-titik oranye */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-24 -right-24 size-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 size-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 hidden size-3 rounded-full bg-primary/60 lg:block" />
        <div className="absolute bottom-1/4 left-1/4 hidden size-2 rounded-full bg-primary/60 lg:block" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pt-20 pb-16 text-center sm:px-6 sm:pt-28 sm:pb-24">
        {/* Lencana pengumuman */}
        <Badge className="mb-6 gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium sm:text-sm">
          <Sparkles className="size-3.5" aria-hidden />
          {hero.badge}
        </Badge>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          <span className="block text-white/85">{hero.titleTop}</span>
          <span className="mt-2 block text-primary">{hero.titleHighlight}</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-pretty text-white/70 sm:text-lg">
          {hero.description}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild size="lg" className="gap-2 text-base sm:text-sm">
            <a href="#pendaftaran">
              {hero.primaryCta}
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2 text-base sm:text-sm">
            <a href="#program">{hero.secondaryCta}</a>
          </Button>
        </div>

        {/* Statistik singkat */}
        <dl className="mt-14 grid w-full grid-cols-2 gap-4 sm:mt-16 sm:grid-cols-4">
          {hero.stats.map((stat, index) => {
            const Icon = statIcons[index % statIcons.length];
            return (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-5 text-left backdrop-blur-sm"
              >
                <Icon className="mb-3 size-5 text-primary" aria-hidden />
                <dt className="order-2 text-xs text-white/60">{stat.label}</dt>
                <dd className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}