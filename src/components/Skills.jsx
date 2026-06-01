import React, { useState } from 'react';
import './Skills.css';

const SKILL_GROUPS = [
  {
    id: 'prog',
    title: 'Programming Languages',
    skills: [
      { name: 'Java',      pct: '85%' },
      { name: 'HTML / CSS', pct: '80%' },
      { name: 'Python',    pct: '75%' },
      { name: 'C#',        pct: '70%' },
    ],
  },
  {
    id: 'soft',
    title: 'Soft Skills',
    skills: [
      { name: 'Communication',      pct: '90%' },
      { name: 'Problem Solving',    pct: '88%' },
      { name: 'Conflict Resolution', pct: '82%' },
      { name: 'Attention to Detail', pct: '85%' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Environments',
    skills: [
      { name: 'NetBeans IDE',        pct: '80%' },
      { name: 'Visual Studio Code',  pct: '78%' },
      { name: 'Git (basic)',         pct: '60%' },
    ],
  },
];

function SkillGroup({ group }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="skill-group">
      <button
        className="skill-group-btn"
        onClick={() => setOpen(prev => !prev)}
        aria-expanded={open}
      >
        {group.title}
        <span className={`skill-arrow ${open ? 'rotated' : ''}`}>›</span>
      </button>

      {open && (
        <div className="skill-list">
          {group.skills.map(({ name, pct }) => (
            <div className="skill-row" key={name}>
              <span>{name}</span>
              <div className="skill-right">
                <div className="skill-bar-wrap">
                  <div className="skill-bar" style={{ width: pct }} />
                </div>
                <span className="skill-pct">{pct}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="sec-header">
        <span className="sec-num">02</span>
        <h2 className="sec-title">Technical Skills</h2>
      </div>

      {SKILL_GROUPS.map(group => (
        <SkillGroup key={group.id} group={group} />
      ))}
    </section>
  );
}
