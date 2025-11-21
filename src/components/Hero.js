"use client";

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

export default function Hero() {
  const [offset, setOffset] = useState(0);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Ensure video plays on mount
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.error('Video autoplay failed:', err);
        setVideoError(true);
      });
    }
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
        <div className="hero-video-container fade-in">
          {!videoError ? (
            <video 
              ref={videoRef}
              className="hero-video"
              autoPlay 
              loop 
              muted 
              playsInline
              preload="auto"
              poster="/images/_MG_5643.JPG"
              onError={(e) => {
                console.error('Video load error:', e);
                setVideoError(true);
              }}
              onLoadedData={() => {
                console.log('Video loaded successfully');
                setVideoLoaded(true);
              }}
            >
              <source src="/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="video-fallback">
              <h1 className="hero-title animate-glow">
                <span className="text-neon-pink">Neon Paint Place</span>
              </h1>
            </div>
          )}
        </div>
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
