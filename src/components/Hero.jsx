import React from 'react';
import './Hero.css';

const STATS = [
  { num: '21', label: 'Years Old' },
  { num: '4',  label: 'Tech Skills' },
  { num: '6',  label: 'Awards' },
];

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-left">
        <p className="tag-line fade-up fade-up-1">BSIT — Section 603 · STI College SJDM</p>

        <h1 className="hero-name fade-up fade-up-2">
          Rush Matthew<br />
          <em>B. Seguros</em>
        </h1>

        <p className="hero-desc fade-up fade-up-3">
          Aspiring Financial Software Developer — building systems that are calculated, accurate, and built to last.
        </p>

        <div className="hero-stats fade-up fade-up-4">
          {STATS.map(({ num, label }) => (
            <div key={label}>
              <span className="stat-num">{num}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>

        <div className="hero-actions fade-up fade-up-5">
          <a href="#about" className="btn-primary" onClick={e => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>
            View Profile
          </a>
          <a href="mailto:rushmatthew073004@gmail.com" className="btn-secondary">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-right">
        <img src="Profile_picture.jpg" alt="Rush Matthew B. Seguros" />
        <div className="photo-overlay" />
        <div className="photo-caption">
          <h2>"Calculated. Analytical. Practical."</h2>
          <p>Rush Matthew B. Seguros — BSIT 603</p>
        </div>
      </div>
    </header>
  );
}
