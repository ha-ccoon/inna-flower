document.addEventListener('DOMContentLoaded', () => {
  const aboutButton = document.getElementById('letter');
  if (aboutButton) {
    aboutButton.addEventListener('click', () => {
      window.location.href = 'letter.html';
    });
  }
});
