"use client";

export default function Contact() {
    return (
        <div className="container page-content">
            <h1 className="page-title text-center animate-glow">Contact Us</h1>

            <div className="contact-container">
                <div className="contact-info">
                    <h2 className="text-neon-green">Get in Touch</h2>
                    <p>Have questions? Ready to book your neon experience? Reach out to us!</p>

                    <div className="info-item">
                        <h3>Location</h3>
                        <p>307 West Baltimore Street<br />Baltimore, MD 21201<br />United States</p>
                    </div>

                    <div className="info-item">
                        <h3>Email</h3>
                        <p>neonpaintplace@gmail.com</p>
                    </div>

                    <div className="info-item">
                        <h3>Phone</h3>
                        <p>+1 (667) 354-8923</p>
                    </div>
                </div>

                <form className="contact-form">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Your Email" />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea rows={5} placeholder="How can we help you?"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
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

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .contact-info h2 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }

        .contact-info p {
          color: #ccc;
          margin-bottom: 2rem;
        }

        .info-item h3 {
          color: var(--neon-blue);
          margin-bottom: 0.5rem;
        }

        .contact-form {
          background: #111;
          padding: 2rem;
          border-radius: 15px;
          border: 1px solid #333;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: #ddd;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.8rem;
          background: #222;
          border: 1px solid #444;
          border-radius: 5px;
          color: white;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--neon-pink);
          box-shadow: 0 0 10px rgba(255, 0, 255, 0.2);
        }

        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
        </div>
    );
}
