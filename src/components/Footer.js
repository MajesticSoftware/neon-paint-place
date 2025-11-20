"use client";

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-section">
                        <h3 className="text-neon-pink">NEON PAINT PLACE</h3>
                        <p className="footer-tagline">Crazy, Colorful, Connection</p>
                    </div>
                    <div className="footer-section">
                        <h4>CONTACT INFO</h4>
                        <p>+1 (667) 354-8923</p>
                        <p>neonpaintplace@gmail.com</p>
                        <p>307 West Baltimore Street<br />Baltimore, MD 21201, United States</p>
                    </div>
                    <div className="footer-section">
                        <h4>USEFUL LINKS</h4>
                        <div className="footer-links-vertical">
                            <Link href="/" className="footer-link">Home</Link>
                            <Link href="/experiences" className="footer-link">Experiences</Link>
                            <Link href="/gallery" className="footer-link">Gallery</Link>
                            <Link href="/contact" className="footer-link">Contact</Link>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h4>FOLLOW US</h4>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="Facebook">📘</a>
                            <a href="#" className="social-link" aria-label="Instagram">📷</a>
                            <a href="#" className="social-link" aria-label="Twitter">🐦</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Neon Paint Place. All rights reserved.</p>
                    <p className="powered-by">Powered by Bókun</p>
                </div>
            </div>

            <style jsx>{`
                .footer-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 3rem;
                    margin-bottom: 3rem;
                }

                .footer-section h3 {
                    font-size: 1.5rem;
                    margin-bottom: 0.5rem;
                    font-weight: 900;
                }

                .footer-section h4 {
                    color: var(--neon-green);
                    margin-bottom: 1rem;
                    font-size: 1rem;
                    font-weight: 700;
                }

                .footer-tagline {
                    color: var(--neon-yellow);
                    font-weight: 600;
                }

                .footer-section p {
                    color: #aaa;
                    line-height: 1.6;
                    margin-bottom: 0.5rem;
                }

                .footer-links-vertical {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .social-links {
                    display: flex;
                    gap: 1rem;
                }

                .social-link {
                    font-size: 1.5rem;
                    transition: transform 0.3s;
                    display: inline-block;
                }

                .social-link:hover {
                    transform: scale(1.2);
                }

                .footer-bottom {
                    border-top: 1px solid #333;
                    padding-top: 2rem;
                    text-align: center;
                }

                .footer-bottom p {
                    color: #666;
                    margin-bottom: 0.5rem;
                }

                .powered-by {
                    font-size: 0.9rem;
                }

                @media (max-width: 768px) {
                    .footer-grid {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                }
            `}</style>
        </footer>
    );
}
