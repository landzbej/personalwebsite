document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.img-link').forEach(e => {
   e.addEventListener('click', () => {
     window.open('https://pennant-notebook.github.io/', '_blank');
   });
  });
});
