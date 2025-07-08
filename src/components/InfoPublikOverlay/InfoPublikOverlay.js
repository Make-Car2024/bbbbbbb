import React from "react";
import styles from "./InfoPublikOverlay.module.css";
import { FaWpforms } from "react-icons/fa";

const InfoPublikOverlay = () => {
  return (
    <div className={styles.overlayBox}>
      <div className={styles.card}>
        <div className={styles.iconCircle}>
          <FaWpforms size={48} />
        </div>
        <div className={styles.cardTitle}>
          Form Permohonan
          <br />
          Informasi Publik
        </div>
        <button className={styles.cardButton}>Isi Formulir</button>
      </div>
      <div className={styles.card}>
        <div className={styles.iconCircle}>
          <FaWpforms size={48} />
        </div>
        <div className={styles.cardTitle}>
          Form Pengajuan
          <br />
          Keberatan
        </div>
        <button className={styles.cardButton}>Isi Formulir</button>
      </div>
    </div>
  );
};

export default InfoPublikOverlay;
