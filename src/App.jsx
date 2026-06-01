import React, { useState, useEffect } from 'react';
import './index.css';

import Nav      from './components/Nav';
import Hero     from './components/Hero';
import About    from './components/About';
import Skills   from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Awards   from './components/Awards';
import Footer   from './components/Footer';

const SECTIONS = ['about', 'skills', 'projects', 'education', 'awards'];

export default function App() {
  const [dark, setDark] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // ── Dark mode: toggle class on <body> ──────────────────
  useEffect(() => {
    document.body.classList.toggle('dark', dark);
  }, [dark]);

  // ── Active nav link via IntersectionObserver ───────────
  useEffect(() => {
    const observers = [];

    SECTIONS.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <>
      <Nav
        dark={dark}
        onToggle={() => setDark(d => !d)}
        activeSection={activeSection}
      />

      <Hero />

      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 48px' }}>
        <About />
        <Skills />
        <Projects />
        <Education />
        <Awards />
      </main>

      <Footer />
    </>
  );
}
