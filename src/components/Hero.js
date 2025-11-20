"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-section">
      <div
        className="hero-bg"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      ></div>
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <div className="announcement-banner fade-in">
          🎉 NOW OPEN AT OUR NEW DOWNTOWN LOCATION! BOOK TODAY! 🎉
        </div>
        <h1 className="hero-title animate-glow">
          <span className="text-neon-pink">Neon Paint Place</span>
        </h1>
        <h2 className="hero-tagline fade-in">
          Crazy, Colorful, Connection
        </h2>
        <p className="hero-subtitle fade-in" style={{ animationDelay: '0.1s' }}>
          Glow crazy with paint, energy, and unforgettable fun.
        </p>
        <div className="hero-buttons fade-in" style={{ animationDelay: '0.2s' }}>
          <Link href="/experiences" className="btn btn-primary">
            View Experiences
          </Link>
          <Link href="/contact" className="btn btn-outline">
            Book Now
          </Link>
        </div>
      </div>

      <div className="scroll-indicator animate-float">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow"></div>
      </div>
    </section>
  );
}
