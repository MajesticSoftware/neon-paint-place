"use client";

import Image from 'next/image';

export default function Experiences() {
    const experiences = [
        {
            title: "Splatter Paint Experience",
            description: "A high-energy glow-in-the-dark activity where guests create abstract art by splattering neon paint in our UV splatter room. Includes protective gear and a fun, immersive environment.",
            image: "/images/DSC00834.jpg",
            duration: "1 hour",
            price: "USD 40.00"
        },
        {
            title: "Sip & Paint Glow Classes",
            description: "Guided neon painting sessions inspired by iconic artworks or seasonal themes. Guests can BYOB and enjoy a relaxed, creative atmosphere under vibrant blacklights.",
            image: "/images/DSC01412.jpg",
            duration: "1 hour 30 minutes",
            price: "USD 40.00"
        },
        {
            title: "Spin Art Experience",
            description: "Create mesmerizing neon designs using our interactive spin stations. Guests use bikes with a wheel attachment that they manually pedal to make their canvas spin — turning art-making into a fun physical experience.",
            image: "/images/_MG_0257.jpg",
            duration: "1 hour",
            price: "USD 40.00"
        },
        {
            title: "VR Painting Experience",
            description: "Step into a digital creative world with our virtual reality painting studio. Guests can paint in 3D space, experiment with glowing effects, and create art in an immersive, futuristic environment perfect for all ages.",
            image: "/images/IMG_5987.JPEG",
            duration: "1 hour",
            price: "USD 40.00"
        },
        {
            title: "Private Parties",
            description: "Exclusive access to the studio for birthdays, celebrations, family gatherings, and special events. Includes dedicated hosts, music, neon décor, and customizable add-ons.",
            image: "/images/_MG_5726.JPG",
            duration: "Custom",
            price: "Contact Us"
        },
        {
            title: "Corporate & Team-Building Events",
            description: "Interactive glow experiences designed to boost creativity, teamwork, and engagement. Ideal for companies, organizations, and professional groups.",
            image: "/images/DSC00845-2.jpg",
            duration: "Custom",
            price: "Contact Us"
        },
        {
            title: "Youth Parties & Field Trips",
            description: "Fun, structured painting experiences for children and youth groups, including schools, camps, and after-school programs.",
            image: "/images/_MG_0266.jpg",
            duration: "1 hour",
            price: "USD 35.00"
        },
        {
            title: "Date Night Experiences",
            description: "Unique, romantic neon painting sessions for couples looking for a creative and memorable night out.",
            image: "/images/_MG_0290.jpg",
            duration: "1 hour 30 minutes",
            price: "USD 75.00"
        },
        {
            title: "Merchandise & Art Retail",
            description: "Neon Paint Place branded merchandise, accessories, and take-home art products available in-studio and online.",
            image: "/images/For booking withus.png",
            duration: "N/A",
            price: "Varies"
        },
        {
            title: "Special Theme Nights & Seasonal Events",
            description: "Rotating themed experiences such as holiday glow nights, Van Gogh neon sessions, artist-inspired classes, and community events.",
            image: "/images/_MG_5643.JPG",
            duration: "Varies",
            price: "USD 40-50"
        }
    ];

    return (
        <div className="container page-content">
            <h1 className="page-title text-center animate-glow">Our Experiences</h1>

            <div className="experiences-list">
                {experiences.map((exp, index) => (
                    <div key={index} className={`experience-item ${index % 2 === 1 ? 'reverse' : ''}`}>
                        <div className="exp-image">
                            <Image src={exp.image} alt={exp.title} fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div className="exp-info">
                            <h2 className="text-neon-pink">{exp.title}</h2>
                            <div className="exp-meta">
                                <span className="duration">⏱️ {exp.duration}</span>
                                <span className="price">💰 {exp.price}</span>
                            </div>
                            <p>{exp.description}</p>
                            <button className="btn btn-primary">Book Now</button>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
        .page-content {
          padding: 4rem 1rem;
        }

        .page-title {
          font-size: 3rem;
          margin-bottom: 4rem;
          color: white;
        }

        .experiences-list {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .experience-item {
          display: flex;
          align-items: center;
          gap: 3rem;
          background: #111;
          padding: 2rem;
          border-radius: 20px;
          border: 1px solid #333;
        }

        .experience-item.reverse {
          flex-direction: row-reverse;
        }

        .exp-image {
          position: relative;
          width: 50%;
          height: 300px;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 0 20px rgba(0,0,0,0.5);
        }

        .exp-info {
          width: 50%;
        }

        .exp-info h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .exp-meta {
          display: flex;
          gap: 2rem;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }

        .exp-meta .duration,
        .exp-meta .price {
          color: var(--neon-green);
          font-weight: 600;
        }

        .exp-info p {
          color: #ccc;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .experience-item {
            flex-direction: column;
            text-align: center;
          }
          .experience-item.reverse {
            flex-direction: column;
          }
          .exp-image, .exp-info {
            width: 100%;
          }
        }
      `}</style>
        </div>
    );
}
