import React from "react";
import styles from "../VisiMisi.module.css";

const ContactUsBaru = () => {
  return (
    <div className={styles.visiMisiBg}>
      <div className={styles.headerSection}>
        <h1 className={styles.title}>Kontak</h1>
        <div className={styles.breadcrumb}>
          <span className={styles.breadcrumbHome}>Home</span> <span className={styles.breadcrumbDivider}>/</span> <span>Kontak</span>
        </div>
      </div>
      <div className={styles.contentSection} style={{display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'flex-start'}}>
        <div style={{flex: 1, minWidth: 260}}>
          <h2 className={styles.sectionTitle}>Hubungi Kami</h2>
          <div style={{marginBottom: 18}}>
            <b>Alamat:</b><br/>
            Jl. Diponegoro No.14, Ungaran, Kabupaten Semarang, Jawa Tengah 50511
          </div>
          <div style={{marginBottom: 18}}>
            <b>Jam Operasional:</b><br/>
            Senin - Jumat: 08.00 - 16.00 WIB<br/>
            Sabtu, Minggu & Hari Libur: Tutup
          </div>
          <div style={{marginBottom: 18}}>
            <b>Media Sosial:</b><br/>
            <a href="https://www.instagram.com/ppidkabsemarang/" target="_blank" rel="noopener noreferrer">Instagram</a> | {" "}
            <a href="https://www.youtube.com/c/SemarangTelevisi" target="_blank" rel="noopener noreferrer">YouTube</a> | {" "}
            <a href="https://twitter.com/kab_semarang" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
          <div style={{marginBottom: 18}}>
            <b>Email:</b><br/>
            info@semarangkab.go.id
          </div>
          <div style={{marginBottom: 18}}>
            <b>Telepon:</b><br/>
            (024) 6921100
          </div>
        </div>
        <div style={{flex: 1, minWidth: 260, maxWidth: 420}}>
          <h2 className={styles.sectionTitle}>Lokasi Kantor</h2>
          <div style={{borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.08)'}}>
            <iframe
              title="Google Maps Kantor Kabupaten Semarang"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.527964024052!2d110.4062223153346!3d-7.139444994849998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b1e2e2e2e2f%3A0x7e7e7e7e7e7e7e7e!2sKantor%20Bupati%20Semarang!5e0!3m2!1sid!2sid!4v1620000000000!5m2!1sid!2sid"
              width="100%"
              height="320"
              style={{border:0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsBaru;
