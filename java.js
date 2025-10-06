document.querySelector('.logo').addEventListener('click', function() {
    const logo = this;
    const src = logo.src; 
    logo.src = ''; 
    logo.src = src; 
  });
  