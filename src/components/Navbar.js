"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <Link href="/" className="nav-logo">
        NEON PAINT PLACE
      </Link>
      
      <button 
        className="hamburger" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
      </button>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><Link href="/" className="nav-link" onClick={closeMenu}>Home</Link></li>
        <li><Link href="/experiences" className="nav-link" onClick={closeMenu}>Experiences</Link></li>
        <li><Link href="/gallery" className="nav-link" onClick={closeMenu}>Gallery</Link></li>
        <li><Link href="/contact" className="nav-link" onClick={closeMenu}>Contact</Link></li>
      </ul>

      {isOpen && <div className="overlay" onClick={closeMenu}></div>}

      <style jsx>{`
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 1001;
          padding: 0.5rem;
        }

        .hamburger-line {
          width: 28px;
          height: 3px;
          background: var(--neon-pink);
          border-radius: 3px;
          transition: all 0.3s ease;
          box-shadow: 0 0 10px var(--neon-pink);
        }

        .hamburger-line.open:nth-child(1) {
          transform: rotate(45deg) translate(8px, 8px);
        }

        .hamburger-line.open:nth-child(2) {
          opacity: 0;
        }

        .hamburger-line.open:nth-child(3) {
          transform: rotate(-45deg) translate(8px, -8px);
        }

        .overlay {
          display: none;
        }

        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }

          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            height: 100vh;
            width: 70%;
            max-width: 300px;
            background: rgba(5, 5, 5, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            transition: right 0.3s ease;
            z-index: 1000;
            border-left: 2px solid var(--neon-pink);
            box-shadow: -5px 0 30px rgba(255, 0, 255, 0.3);
          }

          .nav-links.active {
            right: 0;
          }

          .nav-links li {
            width: 100%;
            text-align: center;
          }

          .nav-link {
            display: block;
            padding: 1rem;
            font-size: 1.2rem;
          }

          .overlay {
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.7);
            z-index: 999;
            animation: fadeIn 0.3s ease;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        }
      `}</style>
    </nav>
  );
}
