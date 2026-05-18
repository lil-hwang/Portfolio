// ─── HIGHLIGHT ACTIVE NAV LINK ───
document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.php';
  document.querySelectorAll('.nav-links a').forEach(function(link) {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
});

// ─── MOBILE MENU ───
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ─── SKILL BARS (skills.php handles this inline, but kept as fallback) ───
function animateBars() {
  setTimeout(function() {
    document.querySelectorAll('.skill-bar').forEach(function(bar) {
      bar.style.width = bar.dataset.w + '%';
    });
  }, 200);
}

// ─── LIGHTBOX ───
function openLightbox(src, title, desc) {
  document.getElementById('lightboxImg').src = src;
  document.getElementById('lightboxImg').alt = title;
  document.getElementById('lightboxTitle').textContent = title;
  document.getElementById('lightboxDesc').textContent = desc;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
  if (!e || e.target === document.getElementById('lightbox') || e.currentTarget.classList.contains('lightbox-close')) {
    document.getElementById('lightbox').classList.remove('open');
    document.body.style.overflow = '';
  }
}

// ─── CONTACT FORM ───
function submitForm() {
  const name = document.getElementById('fname').value;
  const email = document.getElementById('femail').value;
  if (!name || !email) { alert('Please fill in your name and email.'); return; }
  document.getElementById('contactForm').style.display = 'none';
  document.getElementById('formSuccess').style.display = 'block';
}