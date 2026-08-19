"use client";

import { useState } from "react";
import { Send } from "lucide-react";

import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contact } from "@/lib/site";
import { getIcon } from "@/lib/icons";

/**
 * Bagian "Kontak": info kontak + formulir pesan (demo, tanpa backend).
 */
export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Demo: data tidak dikirim ke mana pun. Hubungkan ke backend bila perlu.
    setSubmitted(true);
  }

  return (
    <section id="kontak" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Kontak"
          title={contact.heading}
          subtitle={contact.subheading}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* Info kontak */}
          <ul className="space-y-5">
            {contact.info.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {Icon ? <Icon className="size-5" aria-hidden /> : null}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">
                      {item.label}
                    </h3>
                    <p className="mt-1 text-base font-medium text-foreground">{item.value}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Formulir pesan */}
          <div className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
            {submitted ? (
              <div className="flex h-full min-h-64 flex-col items-center justify-center text-center">
                <p className="text-4xl" aria-hidden>🎉</p>
                <h3 className="mt-4 text-xl font-bold">Pesan Terkirim!</h3>
                <p className="mt-2 text-muted-foreground">
                  Terima kasih telah menghubungi kami. Tim kami akan segera membalas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="nama" className="text-sm font-medium">
                      Nama Lengkap
                    </label>
                    <Input id="nama" name="nama" placeholder="Nama Anda" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="nama@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subjek" className="text-sm font-medium">
                    Subjek
                  </label>
                  <Input id="subjek" name="subjek" placeholder="Topik pesan" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="pesan" className="text-sm font-medium">
                    Pesan
                  </label>
                  <Textarea
                    id="pesan"
                    name="pesan"
                    placeholder="Tulis pesan Anda di sini..."
                    className="min-h-32"
                    required
                  />
                </div>
                <Button type="submit" className="w-full gap-2 sm:w-auto">
                  <Send className="size-4" aria-hidden />
                  Kirim Pesan
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}