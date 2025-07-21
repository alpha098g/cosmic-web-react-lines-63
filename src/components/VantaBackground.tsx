import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

interface VantaBackgroundProps {
  className?: string;
}

const VantaBackground: React.FC<VantaBackgroundProps> = ({ className = "" }) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    // Load Three.js
    const threeScript = document.createElement('script');
    threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
    threeScript.async = true;
    
    threeScript.onload = () => {
      // Load Vanta.js Waves after Three.js loads
      const vantaScript = document.createElement('script');
      vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js';
      vantaScript.async = true;
      
      vantaScript.onload = () => {
        if (vantaRef.current && window.VANTA && !vantaEffect.current) {
          vantaEffect.current = window.VANTA.WAVES({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x000000,
            shininess: 125.00,
            waveHeight: 35.50,
            waveSpeed: 0.65,
            zoom: 0.99,
            material: {
              options: {
                fog: true,
                wireframe: false
              }
            }
          });
        }
      };
      
      document.head.appendChild(vantaScript);
    };
    
    document.head.appendChild(threeScript);

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={vantaRef} 
      className={`fixed inset-0 z-0 ${className}`}
      style={{ background: '#000000' }}
    />
  );
};

export default VantaBackground;