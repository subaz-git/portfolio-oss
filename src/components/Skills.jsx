const categories = [
  {
    icon: '🌐',
    color: '#3b82f6',
    title: 'Frontend',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux', 'HTML5', 'CSS3'],
  },
  {
    icon: '⚙️',
    color: '#10b981',
    title: 'Backend',
    tags: ['Node.js', 'Express', 'Python', 'Flask', 'FastAPI', 'REST APIs', 'GraphQL', 'WebSockets'],
  },
  {
    icon: '🗄️',
    color: '#f59e0b',
    title: 'Databases',
    tags: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Prisma', 'SQLite', 'Firebase'],
  },
  {
    icon: '🤖',
    color: '#8b5cf6',
    title: 'AI / ML',
    tags: ['PyTorch', 'TensorFlow', 'scikit-learn', 'OpenAI API', 'LangChain', 'Pandas', 'NumPy'],
  },
  {
    icon: '☁️',
    color: '#06b6d4',
    title: 'DevOps & Cloud',
    tags: ['Docker', 'AWS', 'GitHub Actions', 'Vercel', 'Nginx', 'Linux', 'CI/CD'],
  },
  {
    icon: '🛠️',
    color: '#f472b6',
    title: 'Tools & Others',
    tags: ['Git', 'Figma', 'VS Code', 'Postman', 'Jira', 'Agile', 'Jest', 'Vitest'],
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <p className="section-label">// tech stack</p>
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          A curated collection of tools and technologies I've worked with across academics, internships, and personal projects.
        </p>
        <div className="skills-grid">
          {categories.map(cat => (
            <div className="skill-category" key={cat.title}>
              <div className="skill-cat-header">
                <div className="skill-cat-icon" style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}30` }}>
                  {cat.icon}
                </div>
                <span className="skill-cat-title" style={{ color: cat.color }}>{cat.title}</span>
              </div>
              <div className="skill-tags">
                {cat.tags.map(tag => (
                  <span className="skill-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
