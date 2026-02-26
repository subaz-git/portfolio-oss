export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <p className="section-label">// about me</p>
        <h2 className="section-title">Who Am I?</h2>
        <div className="about-grid">
          <div className="about-image-wrap">
            <div className="about-avatar">🧑‍💻</div>
            <div className="about-tag about-tag-2">
              <span>🎓</span> Stanford University
            </div>
            <div className="about-tag about-tag-1">
              <span style={{ color: '#4ade80' }}>●</span> Open to work
            </div>
          </div>
          <div className="about-text">
            <p>
              I'm a third-year Computer Science student at Stanford University, driven by a passion for
              creating technology that makes people's lives better. I love turning complex problems
              into elegant, user-friendly solutions.
            </p>
            <p>
              Outside of class, I contribute to open-source projects, compete in hackathons (won 3 this year!),
              and mentor freshmen through the CS department's tutoring program. I've also completed internships
              at a Series B startup and a Fortune 500 tech company.
            </p>
            <p>
              When I'm not coding, you'll find me hiking trails around the Bay Area, playing chess,
              or experimenting with new recipes.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🏫</div>
                Stanford University — B.S. Computer Science (2022–2026)
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">💼</div>
                Software Engineering Intern @ TechCorp (Summer 2024)
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🏆</div>
                HackMIT Winner — Best AI/ML Project (2024)
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">📍</div>
                San Francisco, CA · Open to remote
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
