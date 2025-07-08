import React from "react";
import styles from "../VisiMisi.module.css";
import Footer from "../../components/Footer/Footer";
import SocialIcons from "./SocialIcons";

const ContactUs = () => {
  return (
    <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <div className={styles.visiMisiBg} style={{flex: 1}}>
        <div className={styles.headerSection}>
          <h1 className={styles.title}>Kontak</h1>
          <div className={styles.breadcrumb}>
            <span className={styles.breadcrumbHome}>Home</span> <span className={styles.breadcrumbDivider}>/</span> <span>Kontak</span>
          </div>
        </div>
        <div className={styles.contentSection} style={{display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'flex-start', background: 'linear-gradient(135deg, #f7fafc 60%, #e3ecf7 100%)'}}>
          <div style={{flex: 1, minWidth: 260, display: 'flex', flexDirection: 'column', gap: 24}}>
            <div style={{background: 'rgba(255,255,255,0.98)', borderRadius: 16, boxShadow: '0 4px 24px rgba(10,25,49,0.07)', padding: 32, marginBottom: 8, border: '1.5px solid #e3ecf7'}}>
              <h2 className={styles.sectionTitle} style={{color: '#0a1931', marginBottom: 18}}>Hubungi Kami</h2>
              <div style={{marginBottom: 16, color: '#222', fontSize: '1.08rem'}}>
                <b>Alamat:</b><br/>
                Jl. Diponegoro No.14, Ungaran, Kabupaten Semarang, Jawa Tengah 50511
              </div>
              <div style={{marginBottom: 16, color: '#222', fontSize: '1.08rem'}}>
                <b>Jam Operasional:</b><br/>
                Senin - Jumat: 08.00 - 16.00 WIB<br/>
                Sabtu, Minggu & Hari Libur: Tutup
              </div>
              <div style={{marginBottom: 16, color: '#222', fontSize: '1.08rem'}}>
                <b>Email:</b><br/>
                info@semarangkab.go.id
              </div>
              <div style={{marginBottom: 16, color: '#222', fontSize: '1.08rem'}}>
                <b>Telepon:</b><br/>
                (024) 6921100
              </div>
              <div style={{marginBottom: 0, color: '#222', fontSize: '1.08rem'}}>
                <b>Media Sosial:</b><br/>
                <SocialIcons />
              </div>
            </div>
          </div>
          <div style={{flex: 1, minWidth: 260, maxWidth: 420, display: 'flex', flexDirection: 'column', gap: 24}}>
            <div style={{background: 'rgba(255,255,255,0.98)', borderRadius: 16, boxShadow: '0 4px 24px rgba(10,25,49,0.07)', padding: 32, border: '1.5px solid #e3ecf7'}}>
              <h2 className={styles.sectionTitle} style={{color: '#0a1931', marginBottom: 18}}>Lokasi Diskominfo Kab. Semarang</h2>
              <div style={{borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.08)'}}>
                <iframe
                  title="Google Maps Diskominfo Kab. Semarang"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.527964024052!2d110.40745!3d-7.139013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b1e2e2e2e2f%3A0x7e7e7e7e7e7e7e7e!2sDinas%20Komunikasi%20dan%20Informatika%20Kabupaten%20Semarang!5e0!3m2!1sid!2sid!4v1620000000000!5m2!1sid!2sid"
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
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;