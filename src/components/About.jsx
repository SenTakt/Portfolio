import React from 'react';
import './About.css';

const INFO = [
  { label: 'Age',          val: '21 years old' },
  { label: 'Citizenship',  val: 'Filipino 🇵🇭' },
  { label: 'Civil Status', val: 'Single' },
  { label: 'Religion',     val: 'Roman Catholic' },
  { label: 'Languages',    val: 'English & Filipino' },
  { label: 'Location',     val: 'Kaypian, SJDM, Bulacan' },
  { label: 'Phone',        val: '09760079627' },
  { label: 'Email',        val: 'rushmatthew073004@gmail.com' },
];

export default function About() {
  return (
    <section id="about">
      <div className="sec-header">
        <span className="sec-num">01</span>
        <h2 className="sec-title">Profile</h2>
      </div>

      <div className="about-grid">
        <div className="about-body">
          <p className="pull-quote">
            "I aim to design systems that ensure accuracy, compliance, and reliability in financial technologies."
          </p>
          <p>
            I am currently pursuing a <strong>Bachelor of Science in Information Technology</strong> at STI College San Jose Del Monte, under Section BSIT-603. My focus spans data structures, web systems, and mobile technology.
          </p>
          <p>
            My long-term goal is <strong>Financial Software Development</strong> — building backend systems where precision is non-negotiable. That drives my methodical, deliberate approach to every line of code.
          </p>
          <p>
            I also hold a National Certificate II, multiple academic honors, and a background in film direction that shapes how I think about user experience.
          </p>
        </div>

        <div className="info-box">
          <h4>Personal Details</h4>
          {INFO.map(({ label, val }) => (
            <div className="info-item" key={label}>
              <div className="info-label">{label}</div>
              <div className="info-val">{val}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
