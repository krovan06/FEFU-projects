document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementsByClassName('dropdown')[0];
  const dropdownContent = document.getElementsByClassName('dropdown-content')[0];

  button.addEventListener('click', function() {
    dropdownContent.classList.toggle('show');
  });
});