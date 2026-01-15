function showSidebar() { 
  const sidebar = document.querySelector('.sidebar') 
  sidebar.style.display = 'flex' 
} 

function hideSidebar() { 
  const sidebar = document.querySelector('.sidebar') 
  sidebar.style.display = 'none' 
}

function showSidebar(event) {
    event.preventDefault();
    document.querySelector('.sidebar').style.display = 'flex';
}


function hideSidebar(event) {
    event.preventDefault(); // stops the page from jumping
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}



document.querySelectorAll('.carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const cards = Array.from(track.children);

  // Duplicate slides
  cards.forEach(card => {
    track.appendChild(card.cloneNode(true));
  });

  const direction = carousel.classList.contains('carousel-right') ? 1 : -1;
  const speed = 0.4 * direction;
  let pos = 0;

  function animate() {
    pos += speed;

    const halfWidth = track.scrollWidth / 2;

    if (direction === -1 && -pos >= halfWidth) {
      pos += halfWidth;
    }

    if (direction === 1 && pos >= 0) {
      pos -= halfWidth;
    }

    track.style.transform = `translateX(${pos}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});