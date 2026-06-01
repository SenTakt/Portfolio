import React from 'react';
import './Education.css';

const EDUCATION = [
  {
    period: '2023 — Present',
    badge: 'Tertiary',
    school: 'Systems Technology Institute (STI)',
    addr: 'Quirino Highway, Tungkong Mangga, San Jose Del Monte City, Bulacan',
    course: 'Bachelor of Science in Information Technology',
  },
  {
    period: '2022–2023\n2017–2020',
    badge: 'Secondary',
    school: 'Kaypian National High School',
    addr: 'Sitio Looban, Brgy. Kaypian, San Jose del Monte, Bulacan',
  },
  {
    period: '2021 — 2022',
    badge: 'Secondary',
    school: 'Eclaro Academy',
    addr: 'Lenjun 170, Quezon City, 1127 Metro Manila',
  },
  {
    period: '2010 — 2016',
    badge: 'Primary',
    school: 'Kaypian Elementary School',
    addr: 'Kaypian Road, San Jose del Monte, Bulacan',
  },
];

export default function Education() {
  return (
    <section id="education">
      <div className="sec-header">
        <span className="sec-num">04</span>
        <h2 className="sec-title">Educational Background</h2>
      </div>

      <div>
        {EDUCATION.map(({ period, badge, school, addr, course }) => (
          <div className="edu-item" key={school}>
            <div className="edu-period">
              {period.split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </div>
            <div className="edu-content">
              <span className="edu-badge">{badge}</span>
              <h4>{school}</h4>
              <p>{addr}</p>
              {course && <p className="course">{course}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
