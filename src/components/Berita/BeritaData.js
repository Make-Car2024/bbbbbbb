// Data dummy berita, bisa diganti dengan API/fetch
import berita1 from '../../assets/caseStudy/1.png';
import berita2 from '../../assets/caseStudy/2.png';
import berita3 from '../../assets/caseStudy/3.png';
import berita4 from '../../assets/caseStudy/4.png';

const beritaData = [
  {
    id: 1,
    image: berita1,
    category: 'Pengumuman',
    title: 'PPID Kabupaten Semarang Raih Penghargaan Keterbukaan Informasi',
    date: '2025-07-01',
    excerpt: 'PPID Kabupaten Semarang kembali meraih penghargaan tingkat nasional dalam keterbukaan informasi publik...',
    link: '/berita/ppid-raih-penghargaan',
  },
  {
    id: 2,
    image: berita2,
    category: 'Kegiatan',
    title: 'Sosialisasi Layanan Informasi Publik di Kecamatan',
    date: '2025-06-20',
    excerpt: 'PPID mengadakan sosialisasi layanan informasi publik di seluruh kecamatan untuk meningkatkan pemahaman masyarakat...',
    link: '/berita/sosialisasi-layanan',
  },
  {
    id: 3,
    image: berita3,
    category: 'Artikel',
    title: 'Tips Mengajukan Permohonan Informasi Publik',
    date: '2025-06-10',
    excerpt: 'Bagaimana cara mengajukan permohonan informasi publik yang benar? Simak tips berikut agar permohonan Anda cepat diproses...',
    link: '/berita/tips-permohonan',
  },
  {
    id: 4,
    image: berita4,
    category: 'Pengumuman',
    title: 'Layanan PPID Online 24 Jam',
    date: '2025-05-30',
    excerpt: 'Kini layanan PPID Kabupaten Semarang dapat diakses online 24 jam melalui website dan aplikasi mobile...',
    link: '/berita/ppid-online',
  },
];

export default beritaData;
