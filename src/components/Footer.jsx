import React from 'react';
import './Footer.css';

const CONTACTS = [
  { label: 'Address', val: 'Blk 12 Lot 17, Dreamlandville, Brgy. Kaypian, SJDM, Bulacan' },
  { label: 'Phone',   val: '09760079627' },
  { label: 'Email',   val: 'rushmatthew073004@gmail.com' },
];

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <h3 className="footer-hl">
          Let's build something<br />
          <em>worth shipping.</em>
        </h3>

        {CONTACTS.map(({ label, val }) => (
          <div className="contact-row" key={label}>
            <span className="lbl">{label}</span>
            <span>{val}</span>
          </div>
        ))}

        <a href="mailto:rushmatthew073004@gmail.com" className="footer-cta">
          Send a Message →
        </a>

        <div className="footer-bottom">
          <p>© 2026 Rush Matthew B. Seguros. All rights reserved.</p>
          <p>BSIT 603 · STI College San Jose Del Monte</p>
        </div>
      </div>
    </footer>
  );
}
