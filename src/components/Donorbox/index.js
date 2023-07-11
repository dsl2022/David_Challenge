import React, { useEffect } from 'react';

const Donorbox = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://donorbox.org/install-popup-button.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <a
      className="dbox-donation-button"
      style={{
        background: '#128aed url(https://donorbox.org/images/white_logo.svg) no-repeat 45px',
        color: '#fff',
        textDecoration: 'none',
        fontFamily: 'Verdana, sans-serif',
        display: 'inline-block',
        fontSize: '16px',
        padding: '15px 45px',
        paddingLeft: '70px',
        borderRadius: '8px'
      }}
      href="https://donorbox.org/medical-mission-2"
    >
      Donate
    </a>
  );
};

export default Donorbox;
