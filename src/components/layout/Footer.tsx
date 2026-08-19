import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";

import { school, footer } from "@/lib/site";

/**
 * Kaki halaman: identitas, kolom tautan, dan info kontak ringkas.
 */
export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Identitas */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <GraduationCap className="size-6" aria-hidden />
              </span>
              <span className="text-base font-bold">{school.shortName}</span>
            </div>
            <p className="text-sm leading-relaxed text-secondary-foreground/70">
              {footer.description}
            </p>
            <div className="space-y-2 text-sm text-secondary-foreground/70">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                <span>{school.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-primary" aria-hidden />
                <a href={`tel:${school.phone.replace(/\s/g, "")}`} className="hover:underline">
                  {school.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-primary" aria-hidden />
                <a href={`mailto:${school.email}`} className="hover:underline">
                  {school.email}
                </a>
              </p>
            </div>
          </div>

          {/* Kolom tautan */}
          {footer.columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-sm font-semibold tracking-wider uppercase">
                {column.title}
              </h3>
              <ul className="space-y-2.5 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-secondary-foreground/70 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-secondary-foreground/60 sm:flex-row">
          <p>{footer.bottom}</p>
          <p>
            NPSN: <span className="font-medium">{school.npsn}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}