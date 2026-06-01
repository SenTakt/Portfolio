import React from 'react';
import './Nav.css';

const LINKS = ['about', 'skills', 'projects', 'education', 'awards'];

export default function Nav({ dark, onToggle, activeSection }) {
  const handleClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="nav">
      <div className="logo">Rush <span>Seguros</span></div>

      <ul className="nav-links">
        {LINKS.map(id => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={activeSection === id ? 'active' : ''}
              onClick={e => handleClick(e, id)}
            >
              {id}
            </a>
          </li>
        ))}
      </ul>

      <button className="theme-btn" onClick={onToggle}>
        {dark ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
}
