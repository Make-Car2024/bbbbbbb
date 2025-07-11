import HeaderBar from './components/HeaderBar/HeaderBar';
import NavbarMain from './components/NavbarMain';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import routes from './router/route';
import FloatingWhatsappButton from './components/FloatingWhatsappButton';
import ScrollToTopButton from './components/ScrollToTopButton';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AccessibilityWidget } from 'react-accessibility';

function App() {
  // Animation global setting 
  AOS.init({
    // Global settings:
    disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 70, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
  return (
    <>
      <HeaderBar />
      <Router>
        <div className="App">
          <NavbarMain />
          <div className='content'>
            <Routes>
              {
                routes.map(x => (
                  <Route key={x.to} path={x.to} element={x.components} exact/>
                ))
              }
            </Routes>
          </div>
          {/* Floating WhatsApp and Accessibility Widget in a styled container */}
          <div className="floating-buttons-container">
            <ScrollToTopButton />
            <FloatingWhatsappButton />
          </div>
          <AccessibilityWidget />
        </div>
      </Router>
    </>
  );
}

export default App;
