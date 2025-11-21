"use client";

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('subscribing');
    
    // TODO: Integrate with your email service (Mailchimp, ConvertKit, etc.)
    // For now, this is a placeholder
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-content glass">
          <div className="newsletter-header">
            <h2 className="newsletter-title">
              Stay in the <span className="text-neon-pink">Glow</span>
            </h2>
            <p className="newsletter-subtitle">
              Get exclusive updates, special offers, and event announcements delivered straight to your inbox!
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="newsletter-input-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="newsletter-input"
                disabled={status === 'subscribing'}
              />
              <button 
                type="submit" 
                className="btn btn-primary newsletter-btn"
                disabled={status === 'subscribing'}
              >
                {status === 'subscribing' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            
            {status === 'success' && (
              <p className="newsletter-message success">
                ✨ Thanks for subscribing! Check your inbox for a special welcome offer.
              </p>
            )}
            
            {status === 'error' && (
              <p className="newsletter-message error">
                Oops! Something went wrong. Please try again.
              </p>
            )}
          </form>
          
          <p className="newsletter-note">
            🎨 No spam, just neon vibes and exclusive deals. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
