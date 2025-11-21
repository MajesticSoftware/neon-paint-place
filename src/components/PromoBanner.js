"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="promo-banner">
      <div className="promo-content">
        <p className="promo-text">
          🎉 HOST YOUR NEXT HOLIDAY EVENT FOR 10% OFF
        </p>
        <Link href="/contact" className="promo-link">
          CLICK HERE
        </Link>
      </div>
      <button 
        className="promo-close"
        onClick={() => setIsVisible(false)}
        aria-label="Close banner"
      >
        ×
      </button>
    </div>
  );
}
