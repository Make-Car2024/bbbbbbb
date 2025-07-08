import React from "react";
import styles from './TentangPPID.module.css';
import img1 from '../../assets/home/ttg1.png';
import img2 from '../../assets/home/ttg2.png';
import img3 from '../../assets/home/ttg3.png';

const TentangPPID = () =>{
    return(
        <>
            <div className={`container ${styles.contain}`}>
                <div className="row overflow-hidden">
                    <div className="col-md-6">
                        <p data-aos="slide-right" className={styles.head}>TENTANG</p>
                        <p data-aos="slide-left" className={styles.heading}>Kabupaten Semarang</p>
                        <div data-aos="zoom-in">
                            <p className={styles.content}>
Kabupaten Semarang terletak di Provinsi Jawa Tengah, Indonesia, dan dikenal sebagai kawasan yang kaya akan potensi alam, budaya, serta pertumbuhan ekonomi yang dinamis. Dengan lanskap pegunungan yang indah, kawasan wisata Bandungan, serta sentra pertanian dan UMKM yang berkembang, Kabupaten Semarang menjadi destinasi menarik untuk wisata, investasi, dan hunian. Masyarakatnya ramah, infrastruktur terus berkembang, dan berbagai layanan publik semakin modern, menjadikan Kabupaten Semarang sebagai daerah yang nyaman, produktif, dan penuh peluang.
                            </p>
                        </div>
                        <div data-aos='zoom-in' style={{textAlign: 'left'}}>
                            <a href="https://main.semarangkab.go.id/" target="_blank" rel="noopener noreferrer">
                                <button className={`btn custom_btn ${styles.btn}`}>Lihat Lebih Lengkap</button>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 mt-5 overflow-hidden">
                        <div className={styles.row}>
                            <div className={`${styles.column} ${styles.col1}`}>
                                <img data-aos="zoom-in-right" src={img1} alt="Gambar Kabupaten Semarang 1"/>
                            </div>
                            <div className={styles.column}>
                                <img data-aos="zoom-in-left" src={img2} alt="Gambar Kabupaten Semarang 2"/>
                                <img data-aos="zoom-in-left" src={img3} alt="Gambar Kabupaten Semarang 3"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TentangPPID;
