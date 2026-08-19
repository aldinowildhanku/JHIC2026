import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

/**
 * Judul seksi yang konsisten di seluruh halaman.
 * Gunakan `dark` untuk konten di atas latar berwarna gelap/hitam.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-2xl",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className="text-sm font-semibold tracking-widest text-primary uppercase">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl",
          dark ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed text-pretty sm:text-lg",
            dark ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}