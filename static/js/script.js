// Theme toggle
  const toggle = document.getElementById('themeToggle');
  toggle.onclick = () => document.body.classList.toggle('light');

  // Scroll reveal + skill animation
  const reveals = document.querySelectorAll('.reveal');
  const bars = document.querySelectorAll('.bar span');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');

        entry.target.querySelectorAll('.bar span').forEach((bar, i) => {
          const level = bar.dataset.level;
          const counter = bar.parentElement.previousElementSibling.querySelector('.count');
          bar.style.width = level + '%';

          let n = 0;
          const interval = setInterval(() => {
            n++;
            counter.textContent = n + '%';
            if (n >= level) clearInterval(interval);
          }, 15);
        });
      }
    });
  }, { threshold: 0.3 });

  reveals.forEach(r => observer.observe(r));
  document.getElementById('year').textContent = new Date().getFullYear();