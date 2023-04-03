const cards = document.querySelectorAll('.education-card');

cards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;

    const mouseX = e.pageX - card.offsetLeft - (cardWidth / 2);
    const mouseY = e.pageY - card.offsetTop - (cardHeight / 2);

    const rotateY = mouseX / 30;
    const rotateX = mouseY / -30;

    card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0) rotateX(0) scale(1)';
  });
});
