import {
  GraduationCap,
  HeartHandshake,
  Globe,
  ShieldCheck,
  Trophy,
  Users,
  MapPin,
  Phone,
  Mail,
  Clock,
  type LucideIcon,
} from "lucide-react";

/**
 * Memetakan nama ikon (dari lib/site.ts) ke komponen Lucide.
 * Tambahkan pasangan baru di sini jika ingin memakai ikon lain.
 */
const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  HeartHandshake,
  Globe,
  ShieldCheck,
  Trophy,
  Users,
  MapPin,
  Phone,
  Mail,
  Clock,
};

/** Mengembalikan komponen ikon Lucide berdasarkan nama, atau null bila tak dikenal. */
export function getIcon(name: string): LucideIcon | null {
  return iconMap[name] ?? null;
}