import React from "react";
import styles from "./VisiMisi.module.css";
import Footer from "../components/Footer/Footer";

const VisiMisi = () => {
  return (
    <div className={styles.visiMisiBg} style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <div className={styles.headerSection}>
        <h1 className={styles.title}>Visi Misi</h1>
        {/* <div className={styles.breadcrumb}>
          <span className={styles.breadcrumbHome}>Home</span> <span className={styles.breadcrumbDivider}>/</span> <span>Visi Misi</span>
        </div> */}
      </div>
      <div style={{width: '100%', maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 48, marginTop: 32, flex: 1}}>
        <div style={{flex: 2, minWidth: 0}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24}}>
            <div style={{background: '#fff', border: '1.5px solid #d1d5db', borderRadius: 6, width: 44, height: 54, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 20, color: '#d7263d'}}>
              <div style={{fontSize: 20, fontWeight: 700, lineHeight: 1}}>14</div>
              <div style={{fontSize: 13, fontWeight: 400, color: '#888', lineHeight: 1}}>JUN</div>
            </div>
            <span style={{fontSize: '2.3rem', fontWeight: 600, color: '#444'}}>Visi Misi</span>
          </div>
          <div style={{marginBottom: 40}}>
            <div style={{fontSize: '2rem', fontWeight: 600, color: '#444', margin: '32px 0 12px 0', textAlign: 'left', letterSpacing: 1}}>VISI</div>
            <div style={{fontStyle: 'italic', color: '#5a5a5a', fontSize: '1.18rem', marginBottom: 36, textAlign: 'left'}}>
              “Bersatu, Berdaulat, Berkepribadian, Sejahtera dan Mandiri (BERDIKARI), dengan Semangat Gotong Royong, berdasarkab Pancasila dalam Bingkai Negara Kesatuan Republik Indonesia yang ber-Bhinneka tunggal Ika “
            </div>
            <div style={{fontSize: '2rem', fontWeight: 600, color: '#444', margin: '32px 0 12px 0', textAlign: 'left', letterSpacing: 1}}>MISI</div>
            <ol style={{margin: '0 0 0 18px', color: '#444', fontSize: '1.08rem', textAlign: 'left', lineHeight: 1.7, fontWeight: 400}}>
              <li>Meningkatkan kualitas SDM Unggul yang Beriman dan Bertaqwa kepada Tuhan yang Maha Esa, Berkepribadian serta Menguasai Ilmu Pengetahuan dan Teknologi</li>
              <li>Meningkatkan Kemandirian Perekonomian Daerah yang berbasis pada Industri, Pertanian, Pariwisata (INTANPARI), Perdagangan, Jasa serta sektor lain yang Berwawasan Lingkungan</li>
              <li>Meningkatkan Pemerintahan yang baik, bersih, Demokratis dan Bertanggung Jawab, didukung oleh Aparatur yang Kompeten dan Profesional</li>
              <li>Meningkatkan Pemerataan Pembangunan guna menunjang Pengembangan Wilayah, Penyediaan Pelayanan Dasar dan Pertumbuhan Ekonomi Daerah</li>
              <li>Meningkatkan kepastian Hukum, penegakan HAM, mewujudkan Kesetaraan dan Keadilan Gender, serta Perlindungan Anak di semua Bidang Pembangunan</li>
              <li>Meningkatkan Pengelolaan SDA dan Lingkungan Hidup dengan tetap menjaga kelestariannya</li>
              <li>Meningkatkan Pemberdayaan Pemuda, Olahraga serta melestarikan seni dan Budaya Lokal</li>
            </ol>
          </div>
        </div>
        {/* <div style={{flex: 1, minWidth: 0}}>
          // Berita/kanan layout di sini nanti
        </div> */}
      </div>
      <footer style={{marginTop: 'auto', padding: 0}}>
        <Footer />
      </footer>
    </div>
  );
};

export default VisiMisi;
