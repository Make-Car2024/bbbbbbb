import React, { useState } from 'react';
import styles from './InfoPublikBox.module.css';
import { FaSearch } from 'react-icons/fa';
import { MdMenuBook, MdAccessTimeFilled, MdInfo, MdWarning, MdNoEncryptionGmailerrorred } from 'react-icons/md';

const menuItems = [
  {
    id: 1,
    title: 'Daftar Informasi Publik',
    Icon: MdMenuBook,
    color: '#2563eb'
  },
  {
    id: 2,
    title: 'Informasi Berkala',
    Icon: MdAccessTimeFilled,
    color: '#0891b2'
  },
  {
    id: 3,
    title: 'Informasi Setiap Saat',
    Icon: MdInfo,
    color: '#059669'
  },
  {
    id: 4,
    title: 'Informasi Serta Merta',
    Icon: MdWarning,
    color: '#dc2626'
  },
  {
    id: 5,
    title: 'Informasi Dikecualikan',
    Icon: MdNoEncryptionGmailerrorred,
    color: '#7c3aed'
  }
];

const InfoPublikBox = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Implementasi search functionality
  };

  // Filter menuItems sesuai searchTerm
  const filteredItems = menuItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.infoBox}>
      <h2 className={styles.title}>Informasi Publik</h2>
      
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Cari Informasi"
          value={searchTerm}
          onChange={handleSearch}
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>
          <FaSearch /> Cari
        </button>
      </div>

      <div className={styles.menuGrid}>
        {filteredItems.length === 0 ? (
          <div style={{gridColumn: '1/-1', textAlign: 'center', color: '#888', padding: '24px 0'}}>Tidak ditemukan</div>
        ) : (
          filteredItems.map(item => {
            const IconComponent = item.Icon;
            return (
              <div key={item.id} className={styles.menuItem}>
                <div className={styles.iconCircle} style={{ color: item.color }}>
                  <IconComponent size={44} />
                </div>
                <p className={styles.menuTitle}>{item.title}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default InfoPublikBox; 