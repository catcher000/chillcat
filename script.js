// script.js
document.querySelector('.dropdown').addEventListener('mouseenter', () => {
    document.querySelector('.dropdown-content').style.display = 'block';
  });
  
  document.querySelector('.dropdown').addEventListener('mouseleave', () => {
    document.querySelector('.dropdown-content').style.display = 'none';
  });
  