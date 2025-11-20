"use client";

export default function Marquee() {
    return (
        <div className="marquee-container">
            <div className="marquee-content">
                <span>CREATE • GLOW • PARTY • SPLATTER • PAINT • FUN • NEON • VIBES • </span>
                <span>CREATE • GLOW • PARTY • SPLATTER • PAINT • FUN • NEON • VIBES • </span>
            </div>

            <style jsx>{`
        .marquee-container {
          background: var(--neon-pink);
          color: white;
          padding: 1rem 0;
          overflow: hidden;
          position: relative;
          transform: rotate(-2deg) scale(1.05);
          margin: 4rem 0;
          box-shadow: 0 0 20px var(--neon-pink);
          z-index: 10;
        }
        
        .marquee-content {
          display: flex;
          white-space: nowrap;
          animation: marquee 20s linear infinite;
        }
        
        span {
          font-size: 2rem;
          font-weight: 900;
          padding-right: 2rem;
          text-transform: uppercase;
        }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </div>
    );
}
