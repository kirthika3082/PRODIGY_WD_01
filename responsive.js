document.addEventListener('DOMContentLoaded', function () {
 
 
  const navLinks = document.querySelectorAll('#navbar a');
  navLinks.forEach(function (link) {
    link.addEventListener('mouseenter', function () {
      link.style.color = '#ffcc00';
    });
    link.addEventListener('mouseleave', function () {
      link.style.color = 'white';
    });
  });
});
