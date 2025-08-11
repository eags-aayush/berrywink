import React, { useState, useEffect } from "react";
import { FaHeart, FaFeather, FaMoon, FaStar, FaSeedling } from "react-icons/fa";
import { GiSpiralShell, GiFlowerEmblem, GiButterfly } from "react-icons/gi";

const MarqueeComponent = () => {
  const marqueeItems = [
    {
      icon: <FaHeart className="text-pink-500 animate-pulse" />,
      text: "Pulse-quickening confessions",
    },
    {
      icon: <FaFeather className="text-purple-500" />,
      text: "Whispered fantasies at midnight",
    },
    {
      icon: <GiSpiralShell className="text-indigo-500 animate-spin-slow" />,
      text: "Conversations that spiral into intimacy",
    },
    {
      icon: <FaMoon className="text-blue-500" />,
      text: "Moonlit wordplay",
    },
    {
      icon: <GiFlowerEmblem className="text-rose-500 animate-bloom" />,
      text: "Flirtations in full bloom",
    },
    { 
      icon: <FaStar className="text-yellow-400 twinkle" />, 
      text: "Stolen moments under stars" 
    },
    {
      icon: <GiButterfly className="text-fuchsia-500 hover:animate-flutter" />,
      text: "Words that give you wings",
    },
    {
      icon: <FaSeedling className="text-emerald-500" />,
      text: "New desires taking root",
    },
    {
      icon: <FaHeart className="text-red-500 beat" />,
      text: "Heartbeats synchronized through screens",
    },
    {
      icon: <GiSpiralShell className="text-violet-500" />,
      text: "Your secrets are safe here",
    },
  ];

  // Duplicate for seamless loop
  const items = [...marqueeItems, ...marqueeItems];

  const MarqueeItem = ({ icon, text }) => (
    <div className="flex items-center mx-4 py-3 px-6 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200/50 shadow-sm hover:shadow-lg transition-all flex-shrink-0 hover:scale-105">
      <span className="mr-3 text-xl">{icon}</span>
      <span className="text-sm md:text-base font-medium text-gray-800">
        {text}
      </span>
    </div>
  );

  return (
    <div className="py-12 bg-gradient-to-b from-[var(--color-bg-secondary)] to-transparent relative overflow-hidden">
      {/* Ethereal background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-50/30 via-purple-50/20 to-blue-50/30 -z-10" />
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-pink-200/40 blur-xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-purple-200/30 blur-xl animate-float-delay"></div>

      {/* Top Marquee */}
      <div className="flex overflow-hidden mb-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {items.map((item, index) => (
            <MarqueeItem key={`top-${index}`} {...item} />
          ))}
        </div>
      </div>

      {/* Bottom Marquee (reverse) */}
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {items.map((item, index) => (
            <MarqueeItem key={`bottom-${index}`} {...item} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes bloom {
          0% { transform: scale(0.9); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(0.9); opacity: 0.8; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        @keyframes beat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes flutter {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-5px) rotate(5deg); }
          75% { transform: translateY(5px) rotate(-5deg); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee 30s linear infinite reverse;
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 10s ease-in-out infinite 2s;
        }
        .animate-bloom {
          animation: bloom 3s ease-in-out infinite;
        }
        .twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        .beat {
          animation: beat 1.5s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        .hover\:animate-flutter:hover {
          animation: flutter 0.8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default MarqueeComponent;