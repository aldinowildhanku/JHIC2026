/**
 * Pusat data konten website Sekolah JHIC 1 Malang Dinoyo.
 *
 * Semua teks, tautan, dan statistik dikelola di satu tempat agar mudah
 * di-maintenance tanpa menyentuh komponen UI. Ubah nilai di bawah ini
 * dan website akan otomatis menyesuaikan.
 */

// ============================================================
// IDENTITAS SEKOLAH
// ============================================================

export const school = {
  name: "Sekolah JHIC 1 Malang Dinoyo",
  shortName: "JHIC 1 Malang",
  tagline: "Menumbuhkan Karakter, Menerangi Masa Depan",
  slogan: "Belajar · Bertumbuh · Bersinar",
  description:
    "Sekolah JHIC 1 Malang Dinoyo adalah lembaga pendidikan yang memadukan prestasi akademik, penguatan karakter, dan keterampilan hidup di lingkungan yang hangat dan menyenangkan.",
  establishedYear: 1998,
  npsn: "20507565",
  address: "Jl. Dinoyo No. 45, Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65144",
  phone: "+62 341 567 890",
  phoneDisplay: "(0341) 567 890",
  whatsapp: "+62 812 3456 7890",
  email: "info@jhic1malang.sch.id",
  hours: "Senin – Jumat, 07.00 – 15.00 WIB",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Jl.+Dinoyo+No.+45,+Malang",
} as const;

// ============================================================
// NAVIGASI UTAMA
// ============================================================

export const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Program", href: "#program" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Berita", href: "#berita" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
] as const;

// ============================================================
// HERO
// ============================================================

export const hero = {
  badge: "Penerimaan Siswa Baru 2026/2027 Telah Dibuka",
  titleTop: "Sekolah JHIC 1 Malang Dinoyo",
  titleHighlight: "Membentuk Generasi Cemerlang",
  description:
    "Kami membina siswa menjadi pribadi berkarakter, berprestasi, dan berwawasan global melalui pembelajaran yang bermakna dan suasana yang penuh kebersamaan.",
  primaryCta: "Daftar Sekarang",
  secondaryCta: "Lihat Program",
  stats: [
    { value: "27+", label: "Tahun Pengalaman" },
    { value: "1.200+", label: "Siswa Aktif" },
    { value: "60+", label: "Guru Berkualitas" },
    { value: "95%", label: "Tingkat Kelulusan" },
  ],
} as const;

// ============================================================
// TENTANG
// ============================================================

export const about = {
  heading: "Tentang Kami",
  subheading: "Rumah kedua tempat setiap anak bertumbuh",
  paragraphs: [
    "Sekolah JHIC 1 Malang Dinoyo berdiri sejak tahun 1998 di jantung kota Malang. Kami percaya setiap anak memiliki keunikan dan potensi masing-masing yang layak dikembangkan dengan penuh perhatian.",
    "Berbekal kurikulum yang adaptif, tenaga pendidik yang berpengalaman, serta fasilitas yang modern, kami berkomitmen menghadirkan pendidikan yang holistik — menyeimbangkan aspek akademik, karakter, seni, dan olahraga.",
  ],
  highlights: [
    {
      title: "Kurikulum Terpadu",
      description: "Memadukan kurikulum nasional dengan penguatan keterampilan abad 21.",
    },
    {
      title: "Pembinaan Karakter",
      description: "Disiplin, kejujuran, dan kepedulian ditanamkan dalam keseharian belajar.",
    },
    {
      title: "Lingkungan Aman",
      description: "Area belajar yang nyaman, inklusif, dan ramah bagi semua anak.",
    },
  ],
  vision:
    "Menjadi sekolah unggulan yang mencetak generasi berkarakter, berprestasi, dan berdaya saing global di Malang Raya.",
  mission: [
    "Menyelenggarakan pembelajaran yang bermakna dan menyenangkan.",
    "Menumbuhkan karakter mulia dan kemandirian siswa.",
    "Mengembangkan bakat dan minat melalui berbagai ekstrakurikuler.",
    "Membangun kemitraan yang erat antara sekolah, orang tua, dan masyarakat.",
  ],
} as const;

// ============================================================
// PROGRAM
// ============================================================

export const programs = {
  heading: "Program Unggulan",
  subheading: "Jenjang dan layanan yang kami sediakan",
  items: [
    {
      title: "TK",
      stage: "Pendidikan Anak Usia Dini",
      description:
        "Pembelajaran berbasis bermain yang menyenangkan untuk menumbuhkan rasa ingin tahu dan kesiapan sosial anak.",
      features: ["Kelas kecil & personal", "Learning by play", "Pembiasaan karakter sejak dini"],
    },
    {
      title: "SD",
      stage: "Sekolah Dasar",
      description:
        "Penguatan fondasi akademik dan karakter dengan pendekatan aktif dan kolaboratif.",
      features: ["Kurikulum terpadu", "Literasi & numerasi", "Ekstrakurikuler beragam"],
    },
    {
      title: "SMP",
      stage: "Sekolah Menengah Pertama",
      description:
        "Mengasah kemampuan berpikir kritis, kepemimpinan, dan wawasan global di masa remaja.",
      features: ["Proyek berbasis STEM", "Bahasa asing", "Pembinaan organisasi siswa"],
    },
    {
      title: "Tahfidz & Seni",
      stage: "Program Pendukung",
      description:
        "Pendampingan hafalan Al-Qur'an serta pengembangan minat seni dan budaya secara terarah.",
      features: ["Hafalan terjadwal", "Paduan suara & musik", "Seni rupa & tari"],
    },
  ],
} as const;

// ============================================================
// KEUNGGULAN
// ============================================================

export const advantages = {
  heading: "Mengapa Memilih Kami?",
  subheading: "Keunggulan yang membuat sekolah ini berbeda",
  items: [
    {
      icon: "GraduationCap",
      title: "Prestasi Terukur",
      description:
        "Catatan juara akademik dan non-akademik yang konsisten di tingkat kota hingga nasional.",
    },
    {
      icon: "HeartHandshake",
      title: "Guru Membumi",
      description:
        "Pendidik ramah yang mengenal setiap siswa secara personal dan hadir sebagai teladan.",
    },
    {
      icon: "Globe",
      title: "Wawasan Global",
      description:
        "Program bahasa asing dan budaya yang membuka cara pandang internasional.",
    },
    {
      icon: "ShieldCheck",
      title: "Keamanan Terjaga",
      description:
        "Sistem kehadiran terkelola dan area sekolah yang aman dengan pemantauan ketat.",
    },
    {
      icon: "Trophy",
      title: "Prestasi Olahraga",
      description:
        "Fasilitas dan pembinaan olahraga modern untuk mencetak atlet muda berprestasi.",
    },
    {
      icon: "Users",
      title: "Komunitas Kolegial",
      description:
        "Kerja sama erat dengan orang tua dan alumni untuk mendukung tumbuh kembang anak.",
    },
  ],
} as const;

// ============================================================
// STATISTIK / ANGKA KUNCI
// ============================================================

export const keyStats = [
  { value: "1200+", label: "Siswa Terdaftar" },
  { value: "60+", label: "Guru & Staf" },
  { value: "15", label: "Ekstrakurikuler" },
  { value: "98%", label: "Kepuasan Orang Tua" },
  { value: "40+", label: "Prestasi per Tahun" },
] as const;

// ============================================================
// BERITA / PENDAFTARAN
// ============================================================

export interface NewsItem {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  href: string;
}

export const news: NewsItem[] = [
  {
    category: "Pengumuman",
    date: "05 Agustus 2026",
    title: "Pendaftaran Siswa Baru 2026/2027 Telah Dibuka!",
    excerpt:
      "Kesempatan bergabung dengan Sekolah JHIC 1 Malang Dinoyo telah dibuka. Kuota terbatas — daftarkan putra-putri Anda sebelum kuota penuh.",
    href: "#pendaftaran",
  },
  {
    category: "Prestasi",
    date: "28 Juli 2026",
    title: "Tim Olimpiade MIPA Juara 1 Tingkat Kota Malang",
    excerpt:
      "Para siswa membawa pulang medali emas dalam Olimpiade Sains tingkat kota. Bangga! Semangat membara untuk menuju tingkat provinsi.",
    href: "#berita",
  },
  {
    category: "Kegiatan",
    date: "12 Juli 2026",
    title: "Pekan Seni dan Budaya: Merayakan Bakat Para Siswa",
    excerpt:
      "Rangkaian pentas seni, musik, dan tari sukses meriahkan kampus. Ini bukti bahwa pendidikan di sini tak hanya soal akademik.",
    href: "#berita",
  },
] as const;

// ============================================================
// PENDAFTARAN / CTA
// ============================================================

export const enrollment = {
  heading: "Siap Bergabung dengan Kami?",
  subheading:
    "Formulir pendaftaran siswa baru tahun ajaran 2026/2027 kini terbuka. Jangan lewatkan kesempatan menjadi bagian dari keluarga besar JHIC 1 Malang Dinoyo.",
  button: "Isi Formulir Pendaftaran",
  note: "Pendaftaran juga dapat dilakukan melalui WhatsApp atau kunjungan langsung ke sekolah.",
} as const;

// ============================================================
// FAQ
// ============================================================

export const faq = {
  heading: "Pertanyaan yang Sering Diajukan",
  subheading: "Butuh bantuan? Temukan jawabannya di sini.",
  items: [
    {
      question: "Bagaimana cara mendaftarkan anak saya?",
      answer:
        "Anda dapat mengisi formulir pendaftaran daring melalui tombol 'Daftar Sekarang', menghubungi WhatsApp, atau berkunjung langsung ke sekolah pada jam kerja (Senin–Jumat, pukul 07.00–15.00 WIB).",
    },
    {
      question: "Apa saja syarat pendaftaran siswa baru?",
      answer:
        "Syarat utamanya adalah fotokopi akta kelahiran, kartu keluarga, dan pas foto terbaru. Dokumen tambahan akan diinformasikan oleh panitia setelah formulir Anda kami terima.",
    },
    {
      question: "Apakah tersedia beasiswa atau keringanan biaya?",
      answer:
        "Ya. Kami menyediakan beasiswa prestasi dan keringanan biaya bagi siswa berprestasi maupun keluarga yang membutuhkan. Silakan hubungi bagian administrasi untuk keterangan lebih lanjut.",
    },
    {
      question: "Jam belajar di sekolah setiap hari apa saja?",
      answer:
        "Kegiatan belajar berlangsung Senin–Jumat. Pendampingan akademik dan ekstrakurikuler ditawarkan sebagai kegiatan tambahan di luar jam belajar reguler.",
    },
    {
      question: "Apa saja ekstrakurikuler yang tersedia?",
      answer:
        "Kami memiliki lebih dari 15 ekstrakurikuler, mencakup olahraga (futsal, basket, voli), seni (paduan suara, tari, musik), robotik, pramuka, dan pengembangan bahasa.",
    },
  ],
} as const;

// ============================================================
// KONTAK
// ============================================================

export const contact = {
  heading: "Hubungi Kami",
  subheading: "Kami senang mendengar dari Anda — baik pertanyaan maupun kunjungan.",
  info: [
    { label: "Alamat", value: school.address, icon: "MapPin" },
    { label: "Telepon", value: school.phoneDisplay, icon: "Phone" },
    { label: "Email", value: school.email, icon: "Mail" },
    { label: "Jam Operasional", value: school.hours, icon: "Clock" },
  ],
} as const;

// ============================================================
// FOOTER
// ============================================================

export const footer = {
  description:
    "Sekolah JHIC 1 Malang Dinoyo — mendidik dengan sepenuh hati untuk mencetak generasi yang cerdas, berkarakter, dan siap menghadapi masa depan.",
  columns: [
    {
      title: "Jelajah",
      links: [
        { label: "Beranda", href: "#beranda" },
        { label: "Tentang", href: "#tentang" },
        { label: "Program", href: "#program" },
        { label: "Berita", href: "#berita" },
      ],
    },
    {
      title: "Dukungan",
      links: [
        { label: "FAQ", href: "#faq" },
        { label: "Kontak", href: "#kontak" },
        { label: "Pendaftaran", href: "#pendaftaran" },
      ],
    },
    {
      title: "Eksternal",
      links: [
        { label: "Kemendikbud", href: "https://www.kemendikbud.go.id/" },
        { label: "PDSPK", href: "https://pdsp.kemdikbud.go.id/" },
        { label: "Rapor Pendidikan", href: "https://raporpendidikan.kemdikbud.go.id/" },
      ],
    },
  ],
  bottom: "© 2026 Sekolah JHIC 1 Malang Dinoyo. Seluruh hak cipta dilindungi.",
} as const;