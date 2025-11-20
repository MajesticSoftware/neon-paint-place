"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function ServiceCard({ title, description, image, link, duration, price }) {
  return (
    <div className="service-card glass">
      <div className="card-image-container">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="card-image"
        />
        <div className="card-overlay"></div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {(duration || price) && (
          <div className="card-meta">
            {duration && <span>⏱️ {duration}</span>}
            {price && <span>💰 {price}</span>}
          </div>
        )}
        <p className="card-description">{description}</p>
        <Link href={link} className="btn btn-outline btn-sm">
          {link === '/contact' ? 'Contact Us' : 'Book Now'}
        </Link>
      </div>

      <style jsx>{`
        .service-card {
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          border-color: var(--neon-pink);
        }
        
        .service-card:hover .card-image {
            transform: scale(1.1);
        }
        
        .service-card:hover .card-title {
            color: var(--neon-pink);
            text-shadow: 0 0 10px var(--neon-pink);
        }

        .card-image-container {
          position: relative;
          height: 250px;
          width: 100%;
          overflow: hidden;
        }
        
        .card-image {
            transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
            z-index: 1;
        }

        .card-content {
          padding: 2rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .card-title {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
          color: white;
          font-weight: 800;
          transition: all 0.3s;
        }

        .card-meta {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1rem;
          font-size: 0.85rem;
          color: var(--neon-green);
          font-weight: 600;
        }

        .card-description {
          color: #ccc;
          margin-bottom: 2rem;
          line-height: 1.6;
          flex-grow: 1;
        }

        .btn-sm {
          padding: 0.6rem 1.5rem;
          font-size: 0.9rem;
          align-self: flex-start;
        }
      `}</style>
    </div>
  );
}
