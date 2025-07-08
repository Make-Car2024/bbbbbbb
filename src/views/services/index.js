import React from "react";
import Footer from "../../components/Footer";

const ServicesHome = () => {
  return (
    <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <div style={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '48px 0 32px 0', background: 'linear-gradient(to bottom, #e3ecf7 0%, #fff 100%)'}}>
        <div style={{flex: 2, background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.07)', minHeight: 320, marginRight: 32, padding: 32}}>
          {/* Konten utama di sini */}
        </div>
        <div style={{flex: 1, background: '#f7fafc', borderRadius: 16, minHeight: 320, boxShadow: '0 2px 12px rgba(0,0,0,0.04)', padding: 32}}>
          {/* Konten samping di sini */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesHome;