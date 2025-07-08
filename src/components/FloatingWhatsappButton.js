import React from "react";

const FloatingWhatsappButton = () => {
  return (
    <a
      href="https://wa.me/6281234567890" // Ganti dengan nomor WA tujuan
      target="_blank"
      rel="noopener noreferrer"
      className="floating-wa-btn"
      aria-label="Chat WhatsApp"
    >
      <img src={require("../assets/Logo-Wa.png")} alt="WhatsApp" width={56} height={56} style={{display: 'block'}} />
    </a>
  );
};

export default FloatingWhatsappButton;
