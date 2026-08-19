import {
  Hero,
  About,
  Programs,
  Advantages,
  News,
  Stats,
  Enrollment,
  FAQ,
  Contact,
} from "@/components/sections";

/**
 * Halaman utama (landing page) Sekolah JHIC 1 Malang Dinoyo.
 *
 * Urutan seksi diatur di sini. Untuk menambah/mengganti seksi,
 * cukup susun ulang komponen di bawah — data konten di lib/site.ts.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <Advantages />
      <News />
      <Stats />
      <Enrollment />
      <FAQ />
      <Contact />
    </>
  );
}