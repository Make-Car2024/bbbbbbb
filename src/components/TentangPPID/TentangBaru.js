import React from "react";
import styles from "../../views/VisiMisi.module.css";
import Footer from "../Footer/Footer";
import img1 from '../../assets/home/ttg1.png';
import img2 from '../../assets/home/ttg2.png';
import img3 from '../../assets/home/ttg3.png';

const TentangBaru = () => {
  return (
    <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <div className={styles.visiMisiBg} style={{flex: 1}}>
        <div className={styles.headerSection}>
          <h1 className={styles.title}>Tentang</h1>
          <div className={styles.breadcrumb}>
            <span className={styles.breadcrumbHome}>Home</span> <span className={styles.breadcrumbDivider}>/</span> <span>Tentang</span>
          </div>
        </div>
        <div className={styles.contentSection} style={{display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'flex-start'}}>
          <div style={{flex: 1, minWidth: 260}}>
            <h2 className={styles.sectionTitle}>Kabupaten Semarang</h2>
            <div style={{marginBottom: 18}}>
              Kabupaten Semarang terletak di Provinsi Jawa Tengah, Indonesia, dan dikenal sebagai kawasan yang kaya akan potensi alam, budaya, serta pertumbuhan ekonomi yang dinamis. Dengan lanskap pegunungan yang indah, kawasan wisata Bandungan, serta sentra pertanian dan UMKM yang berkembang, Kabupaten Semarang menjadi destinasi menarik untuk wisata, investasi, dan hunian. Masyarakatnya ramah, infrastruktur terus berkembang, dan berbagai layanan publik semakin modern, menjadikan Kabupaten Semarang sebagai daerah yang nyaman, produktif, dan penuh peluang.
            </div>
            <div style={{display: 'flex', gap: 12, marginBottom: 18}}>
              <img src={img1} alt="Kabupaten Semarang 1" style={{width: '32%', borderRadius: 12, objectFit: 'cover'}} />
              <img src={img2} alt="Kabupaten Semarang 2" style={{width: '32%', borderRadius: 12, objectFit: 'cover'}} />
              <img src={img3} alt="Kabupaten Semarang 3" style={{width: '32%', borderRadius: 12, objectFit: 'cover'}} />
            </div>
          </div>
          <div style={{flex: 1, minWidth: 260, maxWidth: 420}}>
            <h2 className={styles.sectionTitle}>Lokasi Diskominfo Kab. Semarang</h2>
            <div style={{borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.08)'}}>
              <iframe
                title="Google Maps Diskominfo Kab. Semarang"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.527964024052!2d110.4062223153346!3d-7.139444994849998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b1e2e2e2e2f%3A0x7e7e7e7e7e7e7e7e!2sDinas%20Komunikasi%20dan%20Informatika%20Kabupaten%20Semarang!5e0!3m2!1sid!2sid!4v1620000000000!5m2!1sid!2sid"
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
      <Footer />
    </div>
  );
};

export default TentangBaru;
