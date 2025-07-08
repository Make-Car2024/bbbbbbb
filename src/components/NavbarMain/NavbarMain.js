import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Dropdown } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import logoPPID from "../../assets/logoPPID.png";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import styles from "./NavbarMain.module.css";

const NavbarMain = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [activeNav, setActiveNav] = useState([true, false, false, false, false, false]);
  const [expand, setExpand] = useState(false);
  const [lang, setLang] = useState('id'); // 'id' = Indonesia, 'en' = English

  const closeNav = () => {
    setExpand(false);
  };

  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  useEffect(() => {
    // Aktifkan menu sesuai path
    const path = location.pathname;
    let idx = 0;
    if (path === "/" || path === "/home") idx = 0;
    else if (path.startsWith("/visi-misi") || path.startsWith("/struktur-organisasi") || path.startsWith("/tugas-ppid")) idx = 1;
    else if (path.startsWith("/regulasi") || path.startsWith("/maklumat-ppid") || path.startsWith("/sop-ppid")) idx = 2;
    else if (path.startsWith("/berita")) idx = 3;
    else if (path.startsWith("/kak")) idx = 4;
    else if (path.startsWith("/contactUs")) idx = 5;
    let temp = Array(6).fill(false);
    temp[idx] = true;
    setActiveNav(temp);
    sessionStorage.setItem("NavbarMain", JSON.stringify(temp));
  }, [location.pathname]);

  const handleActiveNav = (i) => {
    let temp = Array(activeNav.length).fill(false);
    temp[i] = true;
    setActiveNav([...temp]);
    sessionStorage.setItem("NavbarMain", JSON.stringify(temp));
  };



  return (
    <>
      <Navbar 
        style={{
          backgroundColor: "#0A1931",
          boxShadow: "1px 1px 10px rgb(0 0 0 / 0.4)",
        }}
        variant="dark"
        expand="lg"
        sticky="top"
        onToggle={()=>{setExpand(prevState => !prevState)}}
        expanded={expand}
      >
        <Container>
          <Navbar.Brand href="/" className={styles.logo}>
            <img
              src={logoPPID}
              height="50" // Atur tinggi logo agar pas di navbar
              className="d-inline-block align-top"
              alt="Logo PPID KAB SEMARANG" 
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className={styles.navMenu}>
              {/* Home */}
              <NavLink
                to="/"
                className={`${styles.nav_text} nav-link ${activeNav[0] ? styles.active : ""} ${styles.navItem}`}
                onClick={() => {handleActiveNav(0); closeNav()}}
              >
                Home
              </NavLink>

              {/* Profil dropdown */}
              <NavDropdown
                title={<span className={`${styles.nav_text} ${styles.dropicon}`}>Profil</span>}
                id="profil-nav-dropdown"
                className={`nav-link ${styles.drop} ${styles.navItem}`}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
              >
                <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink to="/visi-misi" className={styles.dropdownText} onClick={() => {handleActiveNav(1); closeNav();}}>Visi & Misi</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink to="/struktur-organisasi" className={styles.dropdownText} onClick={() => {handleActiveNav(1); closeNav();}}>Struktur Organisasi</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink to="/tugas-ppid" className={styles.dropdownText} onClick={() => {handleActiveNav(1); closeNav();}}>Tugas PPID</NavLink>
                </NavDropdown.Item>
              </NavDropdown>

              {/* Standar Layanan dropdown */}
              <NavDropdown
                title={<span className={`${styles.nav_text} ${styles.dropicon}`}>Standar Layanan</span>}
                id="standar-layanan-nav-dropdown"
                className={`nav-link ${styles.drop} ${styles.navItem}`}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
              >
                <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink to="/regulasi" className={styles.dropdownText} onClick={() => {handleActiveNav(2); closeNav();}}>DIP Instansi</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink to="/maklumat-ppid" className={styles.dropdownText} onClick={() => {handleActiveNav(2); closeNav();}}>DIP OPD</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink to="/sop-ppid" className={styles.dropdownText} onClick={() => {handleActiveNav(2); closeNav();}}>Dokumentasi Informasi</NavLink>
                </NavDropdown.Item>
              </NavDropdown>

              {/* Berita */}
              <NavLink
                to="/berita"
                className={`${styles.nav_text} nav-link ${activeNav[3] ? styles.active : ""} ${styles.navItem}`}
                onClick={() => {handleActiveNav(3); closeNav();}}
              >
                Berita
              </NavLink>

              {/* Laporan dropdown */}
              <NavDropdown
                title={<span className={`${styles.nav_text} ${styles.dropicon}`}>Laporan</span>}
                id="laporan-nav-dropdown"
                className={`nav-link ${styles.drop} ${styles.navItem}`}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
              >
                <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink to="/kak" className={styles.dropdownText} onClick={() => {handleActiveNav(4); closeNav();}}>Laporan Rekapitulasi</NavLink>
                </NavDropdown.Item>
              </NavDropdown>

              {/* Kontak */}
              <NavLink
                to="/contactUs"
                className={`${styles.nav_text} nav-link ${activeNav[5] ? styles.active : ""} ${styles.navItem}`}
                onClick={() => {handleActiveNav(5); closeNav();}}
              >
                Kontak
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          {/* Language Selector */}
          <div className={styles.langDropdown}>
            <Dropdown align="end">
              <Dropdown.Toggle className={styles.langToggle} id="dropdown-language">
                <span role="img" aria-label="language">🌐</span> {lang === 'id' ? 'Bahasa' : 'English'}
              </Dropdown.Toggle>
              <Dropdown.Menu className={styles.langMenu}>
                <Dropdown.Item active={lang === 'id'} onClick={() => setLang('id')}>Indonesia</Dropdown.Item>
                <Dropdown.Item active={lang === 'en'} onClick={() => setLang('en')}>English</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMain;
