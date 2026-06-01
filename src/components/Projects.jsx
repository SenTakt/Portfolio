import React from 'react';
import './Projects.css';

const PROJECTS = [
  {
    num: '01',
    title: 'Java Applications',
    desc: 'Built robust object-oriented applications using NetBeans IDE, applying encapsulation, inheritance, and polymorphism.',
    tag: 'Java · OOP',
  },
  {
    num: '02',
    title: 'Data Structures & Algorithms',
    desc: 'Implemented Stack and Queue structures from scratch to develop strong algorithmic thinking.',
    tag: 'DSA · Logic',
  },
  {
    num: '03',
    title: 'C# Management Systems',
    desc: 'Console-based management systems with full CRUD operations, designed for data integrity and clean architecture.',
    tag: 'C# · CRUD',
  },
  {
    num: '04',
    title: 'Web Development & HCI',
    desc: 'Structured, semantic web pages applying human-computer interaction principles and accessibility standards.',
    tag: 'HTML · HCI',
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="sec-header">
        <span className="sec-num">03</span>
        <h2 className="sec-title">Academic Projects</h2>
      </div>

      <div className="proj-list">
        {PROJECTS.map(({ num, title, desc, tag }) => (
          <div className="proj-item" key={num}>
            <div className="proj-num">{num}</div>
            <div className="proj-body">
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
            <span className="proj-tag">{tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
