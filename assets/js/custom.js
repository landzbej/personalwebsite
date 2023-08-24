document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.img-link').forEach(e => {
   e.addEventListener('click', () => {
     window.open('https://pennant-notebook.github.io/', '_blank');
   });
  });

  document.querySelectorAll('.img-link2').forEach(e => {
   e.addEventListener('click', () => {
     window.open('https://www.trypennant.com/', '_blank');
   });
  });
});
