import React, { useState } from 'react';
import './Awards.css';

const AWARDS_DATA = [
  { mark: '◆', title: 'National Certificate II Passer', sub: 'TESDA — 2023' },
  { mark: '★', title: 'With Honors', sub: 'Academic — 2017–2018' },
  { mark: '★', title: 'With Honors', sub: 'Academic — 2019–2020' },
  { mark: '★', title: 'With Honors', sub: 'Academic — 2022–2023' },
  { mark: '✦', title: 'Best in English', sub: 'Academic Excellence — 2019' },
  { mark: '✦', title: 'Best in Film Direction', sub: 'Creative Arts — 2018–2023' },
];

const SPECIAL_SKILLS = [
  'Communication Skills',
  'Conflict Resolution',
  'Film Direction',
  'Analytical Thinking',
  'Attention to Detail',
];

export default function Awards() {
  const [claimed, setClaimed] = useState(new Set());

  const handleClaim = (index) => {
    setClaimed(prev => {
      const next = new Set(prev);
      next.add(index);
      return next;
    });
  };

  return (
    <>
      <section id="awards">
        <div className="sec-header">
          <span className="sec-num">05</span>
          <h2 className="sec-title">Awards & Certifications</h2>
        </div>

        <div className="awards-grid">
          {AWARDS_DATA.map((award, i) => {
            const isClaimed = claimed.has(i);
            return (
              <div
                key={i}
                className={`award-card ${isClaimed ? 'claimed' : ''}`}
                onClick={() => handleClaim(i)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && handleClaim(i)}
                aria-label={`Claim ${award.title}`}
              >
                <div className="award-mark">{award.mark}</div>
                <div className="award-body">
                  <h5>{award.title}</h5>
                  <span>{award.sub}</span>
                  {isClaimed && (
                    <div className="award-claimed">✓ Claimed</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <p className="award-counter">
          Awards viewed: <span>{claimed.size}</span> / {AWARDS_DATA.length}
        </p>
      </section>

      <section id="special">
        <div className="sec-header">
          <span className="sec-num">06</span>
          <h2 className="sec-title">Special Skills</h2>
        </div>
        <div className="pills">
          {SPECIAL_SKILLS.map(skill => (
            <div className="pill" key={skill}>
              <div className="dot" />
              {skill}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
