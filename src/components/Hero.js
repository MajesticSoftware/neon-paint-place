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
    <section className="hero">
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

      <style jsx>{`
        .hero {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('/images/_MG_5643.JPG');
          background-size: cover;
          background-position: center;
          z-index: 0;
          height: 120%; /* Taller for parallax */
          width: 100%;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding-top: 2rem;
        }

        .announcement-banner {
          background: linear-gradient(90deg, var(--neon-pink), var(--neon-blue), var(--neon-green));
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 800;
          font-size: 1rem;
          letter-spacing: 1px;
          margin-bottom: 2rem;
          display: inline-block;
          color: black;
          box-shadow: 0 0 30px rgba(255, 0, 255, 0.6);
        }

        .hero-title {
          font-size: 5rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1rem;
          color: white;
          text-transform: uppercase;
          letter-spacing: -2px;
        }

        .hero-tagline {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--neon-yellow);
          text-shadow: 0 0 20px var(--neon-yellow);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          margin-bottom: 3rem;
          color: #e0e0e0;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          font-weight: 300;
          letter-spacing: 1px;
        }

        .hero-buttons {
          display: flex;
          gap: 2rem;
          justify-content: center;
        }
        
        .scroll-indicator {
            position: absolute;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            z-index: 2;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            opacity: 0.7;
        }
        
        .mouse {
            width: 30px;
            height: 50px;
            border: 2px solid rgba(255,255,255,0.5);
            border-radius: 20px;
            position: relative;
        }
        
        .wheel {
            width: 4px;
            height: 8px;
            background: white;
            border-radius: 2px;
            position: absolute;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
            animation: scroll 1.5s infinite;
        }
        
        .arrow {
            width: 15px;
            height: 15px;
            border-right: 2px solid rgba(255,255,255,0.5);
            border-bottom: 2px solid rgba(255,255,255,0.5);
            transform: rotate(45deg);
        }
        
        @keyframes scroll {
            0% { opacity: 1; top: 10px; }
            100% { opacity: 0; top: 30px; }
        }

        @media (max-width: 768px) {
          .announcement-banner {
            font-size: 0.8rem;
            padding: 0.8rem 1.5rem;
          }
          .hero-title {
            font-size: 3rem;
          }
          .hero-tagline {
            font-size: 1.5rem;
          }
          .hero-subtitle {
            font-size: 1.1rem;
            padding: 0 1rem;
          }
          .hero-buttons {
            flex-direction: column;
            gap: 1rem;
            padding: 0 2rem;
          }
        }
      `}</style>
    </section>
  );
}
