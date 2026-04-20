  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal,.ing-card,.bcard,.step,.faq-item').forEach(el => obs.observe(el));
  document.querySelectorAll('.ing-card').forEach((c,i) => c.style.transitionDelay = `${i*0.1}s`);
  document.querySelectorAll('.bcard').forEach((c,i) => c.style.transitionDelay = `${i*0.1}s`);
  document.querySelectorAll('.step').forEach((s,i) => s.style.transitionDelay = `${i*0.13}s`);
  document.querySelectorAll('.faq-item').forEach((f,i) => f.style.transitionDelay = `${i*0.07}s`);

  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q').addEventListener('click', () => {
      const open = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if(!open) item.classList.add('open');
    });
  });

  window.addEventListener('scroll', () => {
    document.getElementById('main-nav').style.boxShadow = window.scrollY > 60 ? '0 4px 30px rgba(0,0,0,0.07)' : 'none';
  });