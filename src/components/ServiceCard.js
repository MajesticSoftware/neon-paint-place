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
    </div>
  );
}
