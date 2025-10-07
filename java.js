document.querySelector('.logo').addEventListener('click', function() {
    const logo = this;
    const src = logo.src; 
    logo.src = ''; 
    logo.src = src; 
  });

  // Carrossel
const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const nextButton = document.querySelector('.carousel-btn.next');
const prevButton = document.querySelector('.carousel-btn.prev');
let currentIndex = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

// Formulário de reserva
const form = document.getElementById('reservaForm');
const msg = document.getElementById('reservaMsg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  msg.textContent = `Reserva de ${form.name.value} para ${form.area.value} confirmada! 🎮`;
  form.reset();
});


  