// UserWay widget loader for accessibility
import { useEffect } from 'react';

const UserWayWidget = () => {
  useEffect(() => {
    // Hapus script lama jika ada
    const prev = document.getElementById('userway-widget-script');
    if (prev) prev.remove();
    // Tambahkan script baru
    const script = document.createElement('script');
    script.id = 'userway-widget-script';
    script.src = 'https://cdn.userway.org/widget.js';
    script.async = true;
    script.setAttribute('data-account', 'demo'); // demo mode, gratis
    document.body.appendChild(script);

    // Paksa posisi widget ke kanan bawah (tidak menutupi fungsi/menu)
    const interval = setInterval(() => {
      const uw = document.querySelector('.uwy');
      if (uw) {
        uw.style.top = 'auto';
        uw.style.bottom = '24px';
        uw.style.right = '24px';
        uw.style.left = 'auto';
        uw.style.zIndex = 9999;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return null;
};

export default UserWayWidget;
