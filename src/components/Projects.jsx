const projects = [
  {
    icon: '🧠',
    title: 'StudyAI — Intelligent Study Assistant',
    desc: 'An AI-powered platform that generates personalized quizzes, flashcards, and summaries from lecture notes using GPT-4. Features spaced repetition and progress tracking.',
    tech: ['Next.js', 'Python', 'OpenAI', 'PostgreSQL', 'Redis'],
    github: 'https://github.com',
    live: 'https://studyai.demo',
    featured: true,
    techColors: ['#61dafb', '#3776ab', '#10a37f', '#336791', '#d82c20'],
  },
  {
    icon: '🛒',
    title: 'ShopLocal — Community Marketplace',
    desc: 'A full-stack marketplace connecting local vendors with customers. Real-time inventory, Stripe payments, and an interactive map built with Mapbox.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Mapbox'],
    github: 'https://github.com',
    live: 'https://shoplocal.demo',
    featured: true,
    techColors: ['#61dafb', '#68a063', '#47a248', '#6772e5', '#1a1a1a'],
  },
  {
    icon: '📊',
    title: 'DevMetrics Dashboard',
    desc: 'A developer analytics dashboard that visualizes GitHub stats, commit streaks, and code health metrics in real time using the GitHub GraphQL API.',
    tech: ['React', 'GraphQL', 'D3.js', 'TypeScript'],
    github: 'https://github.com',
    live: 'https://devmetrics.demo',
    techColors: ['#61dafb', '#e535ab', '#f9a03c', '#3178c6'],
  },
  {
    icon: '🌐',
    title: 'LinkSync — URL Shortener',
    desc: 'A blazing-fast URL shortener with custom aliases, click analytics, QR code generation, and link expiry. Handles 10k+ redirects per second.',
    tech: ['Go', 'Redis', 'React', 'Docker'],
    github: 'https://github.com',
    live: null,
    techColors: ['#00acd7', '#d82c20', '#61dafb', '#2496ed'],
  },
  {
    icon: '🎵',
    title: 'MoodSync — Music Recommender',
    desc: 'ML model that predicts mood from facial expressions using OpenCV + ResNet and recommends Spotify playlists via the Spotify API.',
    tech: ['Python', 'PyTorch', 'OpenCV', 'FastAPI'],
    github: 'https://github.com',
    live: null,
    techColors: ['#3776ab', '#ee4c2c', '#e8e8e8', '#009688'],
  },
  {
    icon: '💬',
    title: 'ChatRoom — Real-time Messaging',
    desc: 'A WhatsApp-inspired chat application with end-to-end encryption, file sharing, read receipts, and presence detection using WebSockets.',
    tech: ['React', 'Socket.io', 'Express', 'MongoDB'],
    github: 'https://github.com',
    live: null,
    techColors: ['#61dafb', '#010101', '#68a063', '#47a248'],
  },
];

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
    </svg>
  );
}

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <p className="section-label">// my work</p>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A selection of projects I've built — from hackathon prototypes to production-ready apps.
        </p>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              className={`project-card${p.featured ? ' project-featured' : ''}`}
              key={p.title}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {p.featured && <span className="project-badge">Featured</span>}
              <div className="project-header">
                <span className="project-icon">{p.icon}</span>
                <div className="project-links">
                  <a href={p.github} target="_blank" rel="noreferrer" className="project-link" title="GitHub">
                    <GitHubIcon />
                  </a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="project-link" title="Live Demo">
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tech">
                {p.tech.map((t, j) => (
                  <span
                    className="tech-tag"
                    key={t}
                    style={{
                      background: `${p.techColors[j]}18`,
                      border: `1px solid ${p.techColors[j]}30`,
                      color: p.techColors[j],
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
