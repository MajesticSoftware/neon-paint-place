"use client";

import Image from 'next/image';

export default function Gallery() {
    const images = [
        "/images/DSC00834.jpg",
        "/images/DSC00845-2.jpg",
        "/images/DSC01412.jpg",
        "/images/_MG_0257.jpg",
        "/images/_MG_0266.jpg",
        "/images/_MG_0290.jpg",
        "/images/_MG_5643.JPG",
        "/images/_MG_5726.JPG",
        "/images/IMG_5987.JPEG"
    ];

    return (
        <div className="container page-content">
            <h1 className="page-title text-center animate-glow">Gallery</h1>
            <p className="text-center mb-5">See the glow in action!</p>

            <div className="gallery-grid">
                {images.map((src, index) => (
                    <div key={index} className="gallery-item">
                        <Image 
                            src={src} 
                            alt={`Gallery image ${index + 1}`} 
                            fill 
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={index < 3}
                            loading={index < 3 ? undefined : 'lazy'}
                        />
                    </div>
                ))}
            </div>

            <style jsx>{`
        .page-content {
          padding: 4rem 1rem;
        }

        .page-title {
          font-size: 3rem;
          margin-bottom: 1rem;
          color: white;
        }

        .mb-5 {
          margin-bottom: 3rem;
          color: #aaa;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .gallery-item {
          position: relative;
          height: 300px;
          border-radius: 10px;
          overflow: hidden;
          transition: transform 0.3s;
          cursor: pointer;
        }

        .gallery-item:hover {
          transform: scale(1.03);
          box-shadow: 0 0 20px var(--neon-blue);
          z-index: 1;
        }
      `}</style>
        </div>
    );
}
