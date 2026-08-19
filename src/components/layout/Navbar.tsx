"use client";

import { useState } from "react";
import { Menu, X, GraduationCap, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navLinks, school } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Bilah navigasi utama yang responsif.
 * - Desktop: tautan horizontal.
 * - Mobile: menu kanvas (slide-in) yang bisa dibuka/tutup.
 */
export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-md">
      {/* Bilah kontak cepat di atas */}
      <div className="bg-secondary text-secondary-foreground">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1.5 text-xs sm:px-6">
          <span className="flex items-center gap-1.5">
            <Phone className="size-3" aria-hidden />
            <a href={`tel:${school.phone.replace(/\s/g, "")}`} className="hover:underline">
              {school.phoneDisplay}
            </a>
          </span>
          <span className="hidden text-secondary-foreground/80 sm:block">
            {school.hours}
          </span>
        </div>
      </div>

      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6"
        aria-label="Navigasi utama"
      >
        {/* Logo / Identitas */}
        <a href="#beranda" className="group flex items-center gap-2.5">
          <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="size-6" aria-hidden />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold text-foreground">
              {school.shortName}
            </span>
            <span className="block text-[0.7rem] text-muted-foreground">
              Sekolah JHIC 1 Malang Dinoyo
            </span>
          </span>
        </a>

        {/* Menu desktop */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Aksi desktop */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild size="sm">
            <a href="#pendaftaran">Daftar Sekarang</a>
          </Button>
        </div>

        {/* Tombol menu mobile */}
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Tutup menu" : "Buka menu"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Menu mobile (slide-in) */}
      {open && (
        <div className="border-t bg-background lg:hidden">
          <div className="mx-auto max-w-6xl space-y-1 px-4 py-3 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-foreground",
                )}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <Button asChild className="w-full">
                <a href="#pendaftaran" onClick={() => setOpen(false)}>
                  Daftar Sekarang
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}