// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))
      .scrollIntoView({ behavior:'smooth' });
  });
});

// ScrollSpy
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');
const io = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    const id = entry.target.id;
    const link = document.querySelector(`.nav__link[href="#${id}"]`);
    if(entry.isIntersecting) {
      navLinks.forEach(l=>l.classList.remove('active'));
      link.classList.add('active');
    }
  });
},{ threshold:0.6 });
sections.forEach(sec=>io.observe(sec));

// Dark mode toggle
const toggle = document.getElementById('toggle-dark');
const darkOn = localStorage.getItem('darkMode')==='true';
document.body.classList.toggle('dark', darkOn);
toggle.addEventListener('click',()=>{
  document.body.classList.toggle('dark');
  localStorage.setItem('darkMode', document.body.classList.contains('dark'));
});
