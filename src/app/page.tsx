"use client";

import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Marquee from '@/components/Marquee';
import Image from 'next/image';

export default function Home() {
  const services = [
    {
      title: "Splatter Paint Experience",
      description: "Glow crazy with paint, energy, and unforgettable fun.",
      image: "/images/DSC00834.jpg",
      duration: "1 hour",
      price: "USD 40.00",
      link: "/experiences"
    },
    {
      title: "Van Gogh's Neon Starry Night",
      description: "Paint, sip, and glow in Van Gogh's neon wonderland.",
      image: "/images/DSC01412.jpg",
      duration: "1 hour 30 minutes",
      price: "USD 40.00",
      link: "/experiences"
    },
    {
      title: "Spin Art Experience",
      description: "Pedal and paint! Create mesmerizing neon designs on our interactive bike spin stations.",
      image: "/images/_MG_0257.jpg",
      duration: "1 hour",
      price: "USD 40.00",
      link: "/experiences"
    },
    {
      title: "Private Parties & Events",
      description: "Exclusive access for birthdays, celebrations, and special events with dedicated hosts.",
      image: "/images/_MG_5726.JPG",
      duration: "Custom",
      price: "Contact Us",
      link: "/contact"
    }
  ];

  const galleryImages = [
    "/images/_MG_5726.JPG",
    "/images/DSC00845-2.jpg",
    "/images/_MG_0257.jpg",
    "/images/IMG_5987.JPEG"
  ];

  return (
    <main>
      <Hero />

      <Marquee />

      <section className="section container">
        <div className="section-header">
          <h2 className="section-title">Our <span className="text-neon-blue">Experiences</span></h2>
          <p className="section-subtitle">Choose your way to glow. We have something for everyone.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      <section className="section bg-darker relative overflow-hidden">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>

        <div className="container relative z-10">
          <div className="section-header text-center">
            <h2 className="section-title">Why <span className="text-neon-pink">Neon Paint Place?</span></h2>
          </div>

          <div className="features-grid">
            <div className="feature glass">
              <div className="feature-icon text-neon-pink">✨</div>
              <h3 className="text-neon-pink">Immersive Atmosphere</h3>
              <p>Step into a world of glowing colors and blacklights. Our studio is designed to transport you to a neon wonderland.</p>
            </div>
            <div className="feature glass">
              <div className="feature-icon text-neon-green">🎨</div>
              <h3 className="text-neon-green">All Ages Welcome</h3>
              <p>Fun for kids, teens, and adults alike. We have packages tailored for every age group and occasion.</p>
            </div>
            <div className="feature glass">
              <div className="feature-icon text-neon-blue">🖌️</div>
              <h3 className="text-neon-blue">No Experience Needed</h3>
              <p>Our instructors guide you every step of the way. You don't need to be an artist to create something amazing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-header">
          <h2 className="section-title">About <span className="text-neon-blue">Us</span></h2>
        </div>
        <div className="about-content glass">
          <p className="about-text">
            At Neon Paint Place, our mission is to create an inclusive, judgment-free space where freedom and self-expression thrive. We believe art should be bold, fun, and accessible to everyone, uniting people of all ages and backgrounds through creativity. Our goal is to help guests make unforgettable memories while inspiring positive growth within our community and youth.
          </p>
          <p className="about-text">
            We live by our motto: <strong className="text-neon-yellow">Crazy, Colorful, Connection</strong>. From our high-energy Splatter Paint Room and mesmerizing Spin Art Bikes to our signature Sip & Paint classes, Private Parties, and fully immersive VR Painting, every experience is designed to spark joy, creativity, and authentic connection.
          </p>
          <p className="about-text">
            But Neon Paint Place is more than just a destination for fun; it's a hub for impact. We proudly support our community through charitable donations, youth art programs, team-building workshops, and creative initiatives that bring people together. At Neon Paint Place, you're not just painting—you're creating memories, building connections, and becoming part of something brighter one brush stroke at a time!
          </p>
        </div>
      </section>

      <section className="section bg-darker relative overflow-hidden">
        <div className="glow-orb orb-3"></div>
        <div className="container relative z-10">
          <div className="section-header">
            <h2 className="section-title">What Our <span className="text-neon-pink">Clients Say</span></h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial glass">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <h3>Glow and paint birthday celebration!</h3>
              <p>"I had a great time, it was fun to create with paint. I've done Sip and paints but never a full body cover with a room full of paint. I would definitely go back and do the sip and paint class."</p>
              <p className="author">- Anonymous, Philadelphia, Pennsylvania</p>
            </div>
            <div className="testimonial glass">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <h3>Great Date!</h3>
              <p>"My wife and I had an absolute blast when we recently went on a unique date night. Everyone there is so friendly too! No notes!"</p>
              <p className="author">- Anonymous</p>
            </div>
            <div className="testimonial glass">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <h3>Amazing Time</h3>
              <p>"We have an amazing time with our private couples night. Painting, listening to our own music and dancing while we painted. Definitely doing a family night!"</p>
              <p className="author">- K-LINE G</p>
            </div>
            <div className="testimonial glass">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <h3>Cleanest mess and just AMAZING fun!</h3>
              <p>"Very zen and creative - great hour! As a couple they gave us our own room with Bluetooth music, and plenty of paint. They even challenged us to get paint on the ceiling!"</p>
              <p className="author">- Wendolyn T</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked <span className="text-neon-green">Questions</span></h2>
        </div>
        <div className="faq-grid">
          <div className="faq-item glass">
            <h3 className="text-neon-pink">How long does this experience last?</h3>
            <p>Each experience lasts up to an hour.</p>
          </div>
          <div className="faq-item glass">
            <h3 className="text-neon-pink">What is included once I book?</h3>
            <p>You will receive 1 canvas, hazmat suits, shoe covers, gloves, goggles, water, paints and supplies in your splatter booth.</p>
          </div>
          <div className="faq-item glass">
            <h3 className="text-neon-pink">After my session, how can I take my painting home?</h3>
            <p>We provide individual boxes for each canvas. You are welcomed to let it dry and pick it up the next day too.</p>
          </div>
          <div className="faq-item glass">
            <h3 className="text-neon-pink">Is alcohol provided or can I bring my own?</h3>
            <p>We do not provide alcohol. You are allowed to bring your own bottle for Private Sessions only.</p>
          </div>
          <div className="faq-item glass">
            <h3 className="text-neon-pink">Can I play my own music?</h3>
            <p>Of course! Each Splatter booth has a bluetooth speaker so you can dance and paint to your favorite jams!</p>
          </div>
          <div className="faq-item glass">
            <h3 className="text-neon-pink">Can we throw paint on each other?</h3>
            <p>Yes you can! Just make sure you get that person's consent first.</p>
          </div>
          <div className="faq-item glass">
            <h3 className="text-neon-pink">I have a white t-shirt I want to customize. Can I bring it?</h3>
            <p>Yes as long as it's not on you, we provide special paint for clothing customization for lasting results!</p>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-header">
          <h2 className="section-title">Gallery <span className="text-neon-yellow">Highlights</span></h2>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="gallery-item glass">
              <Image src={img} alt="Gallery" fill style={{ objectFit: 'cover' }} className="gallery-img" />
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .section {
          padding: 8rem 0;
          position: relative;
        }
        
        .bg-darker {
          background: #020202;
        }
        
        .relative { position: relative; }
        .overflow-hidden { overflow: hidden; }
        .z-10 { z-index: 10; }

        .section-header {
            text-align: center;
            margin-bottom: 5rem;
        }

        .section-title {
          font-size: 3.5rem;
          font-weight: 900;
          color: white;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: -1px;
        }
        
        .section-subtitle {
            color: #888;
            font-size: 1.2rem;
            max-width: 600px;
            margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
        }
        
        .feature {
            padding: 3rem 2rem;
            border-radius: 20px;
            text-align: center;
            transition: transform 0.3s;
        }
        
        .feature:hover {
            transform: translateY(-10px);
        }
        
        .feature-icon {
            font-size: 3rem;
            margin-bottom: 1.5rem;
        }

        .feature h3 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          font-weight: 800;
        }

        .feature p {
          color: #ccc;
          line-height: 1.7;
        }
        
        .glow-orb {
            position: absolute;
            width: 500px;
            height: 500px;
            border-radius: 50%;
            filter: blur(100px);
            opacity: 0.2;
            z-index: 0;
        }
        
        .orb-1 {
            background: var(--neon-pink);
            top: -100px;
            left: -100px;
        }
        
        .orb-2 {
            background: var(--neon-blue);
            bottom: -100px;
            right: -100px;
        }

        .orb-3 {
            background: var(--neon-green);
            top: 50%;
            right: -200px;
        }

        .about-content {
          padding: 3rem;
          border-radius: 20px;
          max-width: 900px;
          margin: 0 auto;
        }

        .about-text {
          color: #ddd;
          line-height: 1.8;
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .testimonial {
          padding: 2rem;
          border-radius: 15px;
          transition: transform 0.3s;
        }

        .testimonial:hover {
          transform: translateY(-5px);
        }

        .testimonial .stars {
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }

        .testimonial h3 {
          color: var(--neon-pink);
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }

        .testimonial p {
          color: #ccc;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .testimonial .author {
          color: #888;
          font-style: italic;
          font-size: 0.9rem;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .faq-item {
          padding: 2rem;
          border-radius: 15px;
        }

        .faq-item h3 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }

        .faq-item p {
          color: #ddd;
          line-height: 1.6;
        }
        
        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            height: 600px;
        }
        
        .gallery-item {
            position: relative;
            border-radius: 20px;
            overflow: hidden;
        }
        
        .gallery-item:nth-child(1) {
            grid-row: span 2;
        }
        
        .gallery-img {
            transition: transform 0.5s;
        }
        
        .gallery-item:hover .gallery-img {
            transform: scale(1.1);
        }
        
        @media (max-width: 768px) {
            .section-title {
                font-size: 2.5rem;
            }
            
            .gallery-grid {
                grid-template-columns: 1fr;
                height: auto;
            }
            
            .gallery-item {
                height: 300px;
            }
            
            .gallery-item:nth-child(1) {
                grid-row: auto;
            }
        }
      `}</style>
    </main>
  );
}
