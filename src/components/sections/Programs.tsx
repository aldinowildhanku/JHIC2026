import { Check, BookOpen, ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/sections/SectionHeading";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { programs } from "@/lib/site";

/**
 * Bagian "Program": kartu jenjang pendidikan yang ditawarkan sekolah.
 */
export function Programs() {
  return (
    <section id="program" className="bg-muted/50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Program Unggulan"
          title={programs.heading}
          subtitle={programs.subheading}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.items.map((program) => (
            <Card key={program.title} className="flex flex-col transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mb-3 flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <BookOpen className="size-5" aria-hidden />
                  </span>
                  <Badge variant="secondary" className="text-xs">
                    {program.stage}
                  </Badge>
                </div>
                <CardTitle className="text-2xl">{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {program.description}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <a
                  href="#pendaftaran"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  Daftar sekarang
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