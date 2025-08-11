import { useEffect, useState } from 'react';
import { 
  FaHeart, 
  FaComment, 
  FaVideo, 
  FaCamera, 
  FaMicrophone,
  FaSeedling,
  FaFeather,
  FaMoon
} from 'react-icons/fa';
import { GiSpiralShell, GiButterfly } from 'react-icons/gi';
import '../styles/FloatingIcons.css'; // Renamed from FloatingHearts.css

const iconComponents = [
  FaHeart,
  FaComment, 
  FaVideo,
  FaCamera,
  FaMicrophone,
  FaSeedling,
  FaFeather,
  FaMoon,
  GiSpiralShell,
  GiButterfly
];

export default function FloatingIcons() {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    const createIcon = () => {
      const randomIcon = iconComponents[Math.floor(Math.random() * iconComponents.length)];
      const icon = {
        id: Date.now(),
        left: Math.random() * 100,
        size: Math.random() * 10 + 8, // Slightly larger base size
        duration: Math.random() * 5 + 5,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.6 + 0.2, // Random opacity between 0.2-0.8
        rotation: Math.random() * 60 - 30, // Random rotation between -30 and 30 degrees
        Component: randomIcon
      };
      setIcons(prev => [...prev.slice(-25), icon]); // Keep more icons visible
    };

    const interval = setInterval(createIcon, 300); // More frequent appearance
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {icons.map(icon => {
        const IconComponent = icon.Component;
        return (
          <div
            key={icon.id}
            className="absolute text-[var(--color-primary)] animate-float"
            style={{
              left: `${icon.left}%`,
              bottom: '-20px',
              fontSize: `${icon.size}px`,
              animationDuration: `${icon.duration}s`,
              animationDelay: `${icon.delay}s`,
              opacity: icon.opacity,
              transform: `rotate(${icon.rotation}deg)`,
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
            }}
          >
            <IconComponent />
          </div>
        );
      })}
    </div>
  );
}