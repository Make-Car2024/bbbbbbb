import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { SiX } from "react-icons/si";


const iconStyle = { width: 28, height: 28, verticalAlign: 'middle' };

const SocialIcons = () => (
  <div style={{display: 'flex', gap: 18, alignItems: 'center', marginTop: 4, justifyContent: 'center'}}>
    <a href="https://www.instagram.com/ppidkabsemarang/" target="_blank" rel="noopener noreferrer" style={{color: '#E4405F'}}>
      <FaInstagram style={iconStyle} />
    </a>
    <a href="https://www.youtube.com/c/SemarangTelevisi" target="_blank" rel="noopener noreferrer" style={{color: '#FF0000'}}>
      <FaYoutube style={iconStyle} />
    </a>
    <a href="https://twitter.com/kab_semarang" target="_blank" rel="noopener noreferrer" style={{color: '#000'}}>
      <SiX style={iconStyle} />
    </a>
  </div>
);

export default SocialIcons;
