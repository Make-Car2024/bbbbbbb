import React, { useEffect, useState } from "react";
import TentangPPID from "../../components/TentangPPID";
import Banner from '../../components/Banner';
import CaseStudy from "../../components/CaseStudy";
import BeritaList from "../../components/Berita/BeritaList";
import ChoosingUs from "../../components/ChoosingUs";
import Footer from "../../components/Footer";
import Real from "../../components/Real";
import ServicesHome from "../../components/ServicesHome";
import Testimonial from "../../components/Testimonial";
import InfoPublikBox from "../../components/InfoPublikBox/InfoPublikBox";
import InfoPublikOverlay from "../../components/InfoPublikOverlay/InfoPublikOverlay";
import FloatingWhatsappButton from "../../components/FloatingWhatsappButton";



const Home = () => {
  const [infoPublikVisible, setInfoPublikVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setInfoPublikVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
        <main style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
          {/* Banner Section  */}
          <section style={{paddingTop: 0, marginTop: 0}}>
            <Banner />
          </section>

          {/* Info Publik Section dengan overlay */}
          <section style={{padding: '0 0 24px 0', background: 'transparent', position: 'relative'}}>
            <div className={`infoPublikOverlayWrapper${infoPublikVisible ? ' popIn' : ''}`}>
              <InfoPublikOverlay />
            </div>
            <div className={infoPublikVisible ? 'popIn' : ''}>
              <InfoPublikBox />
            </div>
          </section>

          {/* Berita Section} */}
          <section>
            <BeritaList />
          </section>

          {/* Services Section  */}
          {/* <section>
            <ServicesHome />
          </section> */}

          {/* Tentang PPID Section */}
          <section>
            <TentangPPID />
          </section>

          {/* Why Choosing Us Section  */}
          {/* <section>
            <ChoosingUs />
          </section> */}
          
          {/* Case Study Section  */}
          {/* <section>
            <CaseStudy />
          </section> */}

          {/* Real Section  */}
          {/* <section>
            <Real />
          </section> */}

          {/* Testimonial Section  */}
          {/* <section>
            <Testimonial />
          </section> */}
        </main>
      </div>
      {/* Footer Section  */}
      <footer style={{marginTop: 'auto', padding: 0}}>
        <Footer />
      </footer>
      
      {/* <FloatingWhatsappButton /> */}
     
    </>
  );
};

export default Home;