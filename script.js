// Smooth scroll to main content on CTA button click
document.querySelector('.cta-button').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#main-content').scrollIntoView({ behavior: 'smooth' });
});

// Parallax effect on scroll
window.addEventListener('scroll', function() {
  const parallax = document.querySelector('.hero');
  let scrollPosition = window.pageYOffset;
  parallax.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});

// Hover effect on portfolio items
document.querySelectorAll('.portfolio-item').forEach(item => {
  item.addEventListener('mouseover', function() {
      this.querySelector('.portfolio-info').style.opacity = '1';
  });

  item.addEventListener('mouseout', function() {
      this.querySelector('.portfolio-info').style.opacity = '0';
  });
});
