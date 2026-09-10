// ============================================
// WEDDING INVITATION SCRIPT
// ============================================

// Get guest name from URL parameter
function getGuestName() {
  const params = new URLSearchParams(window.location.search);
  return params.get('guest');
}

// Display personalized greeting
function displayGuestGreeting() {
  const guestName = getGuestName();
  const greetingContainer = document.querySelector('.guest-greeting');
  
  if (guestName && greetingContainer) {
    greetingContainer.textContent = `Dear ${decodeURIComponent(guestName)},`;
    greetingContainer.style.display = 'block';
  } else if (greetingContainer) {
    greetingContainer.style.display = 'none';
  }
}

// ============================================
// COUNTDOWN TIMER
// ============================================

function updateCountdown() {
  const targetDate = new Date(weddingConfig.nikahDate).getTime();
  
  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Update DOM
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    
    if (distance < 0) {
      clearInterval(timer);
      document.querySelector('.countdown-container').innerHTML = '<p style="grid-column: 1/-1; font-size: 1.5rem; color: var(--burgundy);">The celebration is here! 🎉</p>';
    }
  }, 1000);
}

// ============================================
// SCRATCH CARD
// ============================================

class ScratchCard {
  constructor(canvasId, revealTextId) {
    this.canvas = document.getElementById(canvasId);
    this.revealText = document.getElementById(revealTextId);
    this.ctx = this.canvas.getContext('2d');
    this.isDrawing = false;
    this.scratched = 0;
    this.threshold = 50; // Percentage of card to scratch for reveal
    
    if (this.canvas) {
      this.init();
    }
  }
  
  init() {
    // Set canvas size
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
    
    // Draw scratch surface
    this.drawScratchSurface();
    
    // Bind events
    this.canvas.addEventListener('mousedown', (e) => this.startScratch(e));
    this.canvas.addEventListener('mousemove', (e) => this.scratch(e));
    this.canvas.addEventListener('mouseup', () => this.endScratch());
    this.canvas.addEventListener('mouseleave', () => this.endScratch());
    
    // Touch events
    this.canvas.addEventListener('touchstart', (e) => this.startScratch(e));
    this.canvas.addEventListener('touchmove', (e) => this.scratch(e));
    this.canvas.addEventListener('touchend', () => this.endScratch());
  }
  
  drawScratchSurface() {
    const gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, this.canvas.height);
    gradient.addColorStop(0, '#d4af37');
    gradient.addColorStop(0.5, '#f0e68c');
    gradient.addColorStop(1, '#daa520');
    
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Add texture
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    for (let i = 0; i < 200; i++) {
      const x = Math.random() * this.canvas.width;
      const y = Math.random() * this.canvas.height;
      this.ctx.fillRect(x, y, 1, 1);
    }
  }
  
  startScratch(e) {
    this.isDrawing = true;
    this.scratch(e);
  }
  
  endScratch() {
    this.isDrawing = false;
  }
  
  scratch(e) {
    if (!this.isDrawing) return;
    
    const rect = this.canvas.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;
    
    // Clear area
    this.ctx.clearRect(x - 15, y - 15, 30, 30);
    
    // Check if enough scratched
    this.checkRevealThreshold();
  }
  
  checkRevealThreshold() {
    const imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
    const data = imageData.data;
    let cleared = 0;
    
    for (let i = 3; i < data.length; i += 4) {
      if (data[i] === 0) cleared++;
    }
    
    this.scratched = (cleared / (data.length / 4)) * 100;
    
    if (this.scratched > this.threshold) {
      this.reveal();
    }
  }
  
  reveal() {
    this.canvas.style.display = 'none';
    if (this.revealText) {
      this.revealText.classList.add('show');
    }
  }
}

// ============================================
// SMOOTH SCROLLING NAVIGATION
// ============================================

function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // YOU'RE INVITED button scroll to top
  const invitedBtn = document.querySelector('.nav-button');
  if (invitedBtn) {
    invitedBtn.addEventListener('click', () => {
      document.getElementById('page-1').scrollIntoView({ behavior: 'smooth' });
    });
  }
}

// ============================================
// FORM SUBMISSION (Dua)
// ============================================

function setupDuaForm() {
  const form = document.getElementById('dua-form');
  if (!form) return;
  
  let selectedRsvp = null;
  
  // Handle RSVP selection
  const rsvpButtons = form.querySelectorAll('.rsvp-btn');
  rsvpButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      rsvpButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedRsvp = btn.dataset.value;
    });
  });
  
  // Handle form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('guest-name').value;
    const dua = document.getElementById('dua-message').value;
    
    if (!name || !selectedRsvp || !dua) {
      alert('Please fill in all fields');
      return;
    }
    
    // Prepare form data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('rsvp', selectedRsvp);
    formData.append('dua', dua);
    formData.append('_subject', `New Dua from ${name}`);
    formData.append('_captcha', 'false');
    
    try {
      // Send to Formspree
      const response = await fetch(weddingConfig.formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        alert('Thank you! Your dua has been received. 🤍');
        form.reset();
        rsvpButtons.forEach(b => b.classList.remove('active'));
        selectedRsvp = null;
      } else {
        alert('There was an issue submitting your dua. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error. Please try again.');
    }
  });
}

// ============================================
// MOBILE MENU
// ============================================

function setupMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
  }
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  displayGuestGreeting();
  updateCountdown();
  setupNavigation();
  setupDuaForm();
  setupMobileMenu();
  
  // Initialize scratch card
  new ScratchCard('scratch-canvas', 'revealed-date');
});
