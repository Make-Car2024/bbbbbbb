import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BeritaCard from './BeritaCard';
import styles from './Berita.module.css';
import beritaData from './BeritaData';

const kategoriList = [
  { label: 'ALL', value: 'ALL' },
  { label: 'PENGUMUMAN', value: 'Pengumuman' },
  { label: 'KEGIATAN', value: 'Kegiatan' },
  { label: 'ARTIKEL', value: 'Artikel' },
];

const BeritaList = () => {
  const [kategori, setKategori] = useState('ALL');
  const [titleVisible, setTitleVisible] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);
  const titleRef = useRef();
  const filterRef = useRef();

  useEffect(() => {
    const obsTitle = new window.IntersectionObserver(
      ([entry]) => {
        setTitleVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (titleRef.current) obsTitle.observe(titleRef.current);
    return () => obsTitle.disconnect();
  }, []);

  useEffect(() => {
    const obsFilter = new window.IntersectionObserver(
      ([entry]) => {
        setFilterVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (filterRef.current) obsFilter.observe(filterRef.current);
    return () => obsFilter.disconnect();
  }, []);

  const filtered = kategori === 'ALL' ? beritaData : beritaData.filter(b => b.category === kategori);
  // Urutkan berdasarkan tanggal terbaru, ambil 3 teratas
  const sorted = [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);

  return (
    <div className={styles.beritaSection}>
      <h2
        ref={titleRef}
        className={
          styles.sectionTitle +
          ' ' +
          (titleVisible ? styles.animated + ' ' + styles.fadeInUp : '')
        }
      >
        BERITA TERBARU
      </h2>
      <div
        ref={filterRef}
        className={
          styles.filterMenu +
          ' ' +
          (filterVisible ? styles.animated + ' ' + styles.fadeInUp : '')
        }
      >
        {kategoriList.map((k, idx) => (
          <span
            key={k.value}
            className={kategori === k.value ? styles.active : ''}
            onClick={() => setKategori(k.value)}
          >
            {k.label}
          </span>
        ))}
      </div>
      <div className={styles.grid}>
        {sorted.map((item, idx) => (
          <BeritaCard key={item.id} {...item} index={idx} />
        ))}
      </div>
      <div style={{textAlign:'center', marginTop:32}}>
        <Link to="/berita" className={styles.lihatSemuaBerita}>
          Lihat Semua Berita &rarr;
        </Link>
      </div>
    </div>
  );
};

export default BeritaList;
