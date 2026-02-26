export default function Footer() {
  const socials = [
    { icon: '🐙', href: 'https://github.com', label: 'GitHub' },
    { icon: '💼', href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: '🐦', href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">&lt;<span>alex</span> /&gt;</div>
        <div className="footer-socials">
          {socials.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="footer-social" title={s.label}>
              {s.icon}
            </a>
          ))}
        </div>
        <p>Designed &amp; built with ❤️ by Alex Chen · {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
