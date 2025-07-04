import React from 'react';
import styles from './Footer.module.css';
import { FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";

// Impor logo-logo untuk strip atas. Ganti nama file sesuai yang Anda simpan.
import logoJakarta from '../../assets/footer/kemendagri.png';
import logoJalaHoaks from '../../assets/footer/lpsesmg2.png';
import logoBeritaJakarta from '../../assets/footer/pemprovjateng.png';
import logoSatuData from '../../assets/footer/satudata.png';


const Footer = () => {
    // Array untuk memudahkan rendering logo strip
    const partnerLogos = [
        { src: logoJakarta, alt: 'Logo Jakarta' },
        { src: logoJalaHoaks, alt: 'Logo Jala Hoaks' },
        { src: logoBeritaJakarta, alt: 'Logo Berita Jakarta' },
        { src: logoSatuData, alt: 'Logo Satu Data' },
    ];

    return (
         <footer className={styles.footer}>
            <div className={styles.logoStrip}>
                <div className={`container ${styles.logoScroll}`}>
                    {partnerLogos.map((logo, index) => (
                        <a href="#" key={index} className={styles.logoLink}>
                            <img src={logo.src} alt={logo.alt} className={styles.logoImage} />
                        </a>
                    ))}
                </div>
            </div>

            <div className={`container ${styles.mainContent}`}>
                <div className="row">
                    
                    {/* KOLOM KIRI: FOLLOW US */}
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <h5 className={styles.footerHeading}>Follow Us</h5>
                        <ul className={styles.socialFollowList}>
                            <li className={styles.socialFollowItem}>
                                <a href="https://www.instagram.com/ppidkabsemarang/" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram />
                                    <span>ppidkabsemarang</span>
                                </a>
                            </li>
                            <li className={styles.socialFollowItem}>
                                <a href="https://www.youtube.com/c/SemarangTelevisi" target="_blank" rel="noopener noreferrer">
                                    <FaYoutube />
                                    <span>Semarang Televisi</span>
                                </a>
                            </li>
                            <li className={styles.socialFollowItem}>
                                <a href="https://twitter.com/kab_semarang" target="_blank" rel="noopener noreferrer">
                                    <FaXTwitter />
                                    <span>Kabupaten Semarang</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* KOLOM TENGAH: KONTAK KAMI */}
                 <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    <h5 className={styles.footerHeading}>Kontak Kami</h5>
                    {/* BUNGKUS DENGAN DIV BARU DAN HAPUS <br/> */}
                    <div className={styles.contactInfo}>
                    <p>
                        <strong>Alamat:</strong> Jl. Diponegoro No. 14, Ungaran, Kabupaten Semarang, Jawa Tengah 50511
                    </p>
                    <p>
                        <strong>Telepon:</strong> (024) 6921013
                    </p>
                    <p>
                     <strong>Email:</strong> diskominfo@semarangkab.go.id
                    </p>
                </div>
            </div>

                    {/* KOLOM KANAN: PENGUNJUNG */}
                    <div className="col-lg-4">
                        <h5 className={styles.footerHeading}>Statistik Pengunjung</h5>
                        <div className={styles.visitorStats}>
                            <div className={styles.statItem}>
                                <span>Pengunjung Bulan Ini</span>
                                <strong>112,470</strong>
                            </div>
                            <div className={styles.statItem}>
                                <span>Pengunjung Tahun Ini</span>
                                <strong>850,921</strong>
                            </div>
                            <div className={styles.statItem}>
                                <span>Total Pengunjung</span>
                                <strong>2,431,567</strong>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bagian 3: Sub-Footer (Tidak Berubah) */}
            <div className={styles.subFooter}>
                <div className="container">
                    <p className={styles.copyrightText}>
                        © 2025 Dinas Komunikasi dan Informatika Kabupaten Semarang
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;