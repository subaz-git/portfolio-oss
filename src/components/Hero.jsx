import { useState, useEffect } from 'react';

const roles = ['Full-Stack Developer', 'CS Student', 'Open Source Enthusiast', 'Problem Solver'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx(i => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Available for internships &amp; projects
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="name">Alex Chen</span>
            <span className="role">
              {displayed}
              <span className="hero-cursor" />
            </span>
          </h1>
          <p className="hero-desc">
            Junior CS student at Stanford University passionate about building beautiful,
            performant web applications and exploring the intersection of AI and software engineering.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="/resume.pdf" className="btn btn-outline" target="_blank" rel="noreferrer">
              Download CV
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">15+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat">
              <span className="stat-num">3.9</span>
              <span className="stat-label">GPA</span>
            </div>
            <div className="stat">
              <span className="stat-num">2</span>
              <span className="stat-label">Internships</span>
            </div>
            <div className="stat">
              <span className="stat-num">500+</span>
              <span className="stat-label">GitHub Commits</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
